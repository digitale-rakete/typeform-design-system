'use client'

import { useState, useEffect, useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { PhaseSection } from './PhaseSection'
import { PhaseIndicator } from './PhaseIndicator'
import { ScrollProgress } from './ScrollProgress'
import { phases } from '@/lib/customer-journey-data'

export function CustomerJourney() {
  const [activePhase, setActivePhase] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const phaseColors = phases.map(p => p.color)
  const journeyRef = useRef<HTMLDivElement>(null)

  // Framer Motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start start", "end end"]
  })

  // Transform vertical scroll progress to horizontal translation
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(phases.length - 1) * 100}%`]
  )

  // Update active phase based on scroll progress
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const phaseIndex = Math.floor(latest * phases.length)
      const newActivePhase = Math.max(1, Math.min(phases.length, phaseIndex + 1))
      setActivePhase(newActivePhase)
    })
  }, [scrollYProgress])

  // Visibility tracking for PhaseIndicator
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (journeyRef.current) {
      observer.observe(journeyRef.current)
    }

    return () => {
      if (journeyRef.current) {
        observer.unobserve(journeyRef.current)
      }
    }
  }, [])

  const handlePhaseClick = (phase: number) => {
    const element = document.getElementById(`phase-${phase}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
    }
  }

  return (
    <>
      {/* Mobile Layout - Simple Vertical Stack */}
      <div className="block md:hidden py-16 px-4 xs:px-5 sm:px-6">
        {phases.map((phase) => (
          <PhaseSection
            key={phase.id}
            phase={phase}
            isActive={true}
          />
        ))}
      </div>

      {/* Desktop Layout - Horizontal Scroll */}
      <div
        id="journey"
        ref={journeyRef}
        className="hidden md:block relative"
        style={{ height: `${phases.length * 150}vh` }}
      >
        <ScrollProgress phaseColors={phaseColors} />

        <PhaseIndicator
          totalPhases={phases.length}
          activePhase={activePhase}
          phaseColors={phaseColors}
          onPhaseClick={handlePhaseClick}
          isVisible={isVisible}
        />

        {/* Sticky container that stays in viewport while scrolling */}
        <div
          className="sticky top-0 h-screen overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          <motion.div
            style={{ x }}
            className="flex flex-row h-full"
          >
            {phases.map((phase) => (
              <PhaseSection
                key={phase.id}
                phase={phase}
                isActive={activePhase === phase.id}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}
