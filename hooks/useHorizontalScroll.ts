import { useEffect, useState, useRef, RefObject } from 'react'

interface HorizontalScrollConfig {
  containerRef: RefObject<HTMLDivElement>
  numSlides: number
  enabled: boolean
}

export function useHorizontalScroll(config: HorizontalScrollConfig) {
  const { containerRef, numSlides, enabled } = config

  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [translateX, setTranslateX] = useState(0)

  const targetX = useRef(0)
  const currentX = useRef(0)
  const rafId = useRef<number>()
  const isInSection = useRef(false)

  useEffect(() => {
    if (!enabled || !containerRef.current) return

    const container = containerRef.current

    // Lerp function for smooth interpolation
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    // Animation loop for smooth movement
    const animate = () => {
      currentX.current = lerp(currentX.current, targetX.current, 0.08)
      setTranslateX(currentX.current)

      // Calculate active index
      const index = Math.round(Math.abs(currentX.current) / 100)
      setActiveIndex(Math.min(Math.max(0, index), numSlides - 1))

      // Calculate scroll progress (0-100%)
      const maxScroll = (numSlides - 1) * 100
      const progress = (Math.abs(currentX.current) / maxScroll) * 100
      setScrollProgress(Math.min(Math.max(0, progress), 100))

      rafId.current = requestAnimationFrame(animate)
    }

    // Scroll event handler
    const handleScroll = () => {
      if (!container) return

      const rect = container.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // Check if container is in viewport
      const isInViewport = rect.top <= 0 && rect.bottom >= viewportHeight

      if (isInViewport) {
        isInSection.current = true

        // Calculate how far we've scrolled through the container
        const scrolled = Math.abs(rect.top)
        const totalScrollHeight = container.offsetHeight - viewportHeight

        // Add entry buffer - don't start scrolling until 20vh into the section
        const entryBuffer = viewportHeight * 0.2
        const adjustedScroll = Math.max(0, scrolled - entryBuffer)
        const adjustedHeight = totalScrollHeight - entryBuffer

        // Convert vertical scroll to horizontal position
        // Each phase = 100vw, so we map scroll to 0-400 (for 5 phases)
        const maxTranslate = (numSlides - 1) * 100
        const progress = Math.min(adjustedScroll / adjustedHeight, 1)
        targetX.current = progress * maxTranslate
      } else if (rect.top > 0) {
        // Before section - reset to 0
        targetX.current = 0
        isInSection.current = false
      } else if (rect.bottom < viewportHeight) {
        // After section - stay at end
        const maxTranslate = (numSlides - 1) * 100
        targetX.current = maxTranslate
        isInSection.current = false
      }
    }

    // Start animation loop
    rafId.current = requestAnimationFrame(animate)

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [enabled, containerRef, numSlides])

  return { activeIndex, scrollProgress, translateX }
}
