'use client'

import { useEffect, useRef } from 'react'

interface LordIconProps {
  icon: string
  size?: number
  loop?: boolean
  colorize?: string
  delay?: number
}

// Extend JSX to recognize lord-icon custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lord-icon': {
        src?: string
        trigger?: string
        colors?: string
        style?: React.CSSProperties
        ref?: React.Ref<HTMLElement>
      }
    }
  }
}

export function LordIcon({
  icon,
  size = 96,
  loop = true,
  colorize,
  delay = 0
}: LordIconProps) {
  const iconRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Load lord-icon script if not already loaded
    if (typeof window !== 'undefined' && !window.customElements.get('lord-icon')) {
      const script = document.createElement('script')
      script.src = 'https://cdn.lordicon.com/lordicon.js'
      script.async = true
      document.body.appendChild(script)

      return () => {
        // Cleanup if needed
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      }
    }
  }, [])

  useEffect(() => {
    if (loop && iconRef.current && delay > 0) {
      const timer = setTimeout(() => {
        // Trigger animation after delay
        const lordIcon = iconRef.current as any
        if (lordIcon && typeof lordIcon.playFromBeginning === 'function') {
          lordIcon.playFromBeginning()
        }
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [loop, delay])

  if (!icon) {
    return null
  }

  const colors = colorize
    ? `primary:${colorize},secondary:${colorize}`
    : undefined

  return (
    <lord-icon
      ref={iconRef}
      src={`https://cdn.lordicon.com/${icon}.json`}
      trigger={loop ? 'loop' : 'hover'}
      colors={colors}
      style={{
        width: `${size}px`,
        height: `${size}px`
      }}
    />
  )
}
