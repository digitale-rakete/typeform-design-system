'use client'

import { useState, useEffect, useRef } from 'react'
import { PhaseSection } from './PhaseSection'
import { PhaseIndicator } from './PhaseIndicator'
import { ScrollProgress } from './ScrollProgress'
import { phases } from '@/lib/customer-journey-data'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export function CustomerJourney() {
  const containerRef = useRef<HTMLDivElement>(null)
  const phaseColors = phases.map(p => p.color)

  // Check if we're on desktop (≥768px)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  // Horizontal scroll hook (only on desktop)
  const { activeIndex, scrollProgress, translateX } = useHorizontalScroll({
    containerRef,
    numSlides: phases.length,
    enabled: isDesktop
  })

  // Active phase is 1-indexed for compatibility
  const activePhase = activeIndex + 1

  const handlePhaseClick = (phase: number) => {
    // TODO: Implement horizontal scroll to phase
    // For now, scroll to container
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Mobile/Tablet: Vertical fallback
  if (!isDesktop) {
    return (
      <div id="journey" className="relative">
        <ScrollProgress phaseColors={phaseColors} />

        <PhaseIndicator
          totalPhases={phases.length}
          activePhase={activePhase}
          phaseColors={phaseColors}
          onPhaseClick={handlePhaseClick}
        />

        {phases.map((phase) => (
          <PhaseSection
            key={phase.id}
            phase={phase}
            isActive={activePhase === phase.id}
          />
        ))}
      </div>
    )
  }

  // Desktop: Horizontal scroll
  return (
    <div id="journey" className="relative">
      <ScrollProgress phaseColors={phaseColors} />

      <PhaseIndicator
        totalPhases={phases.length}
        activePhase={activePhase}
        phaseColors={phaseColors}
        onPhaseClick={handlePhaseClick}
      />

      {/* Spacer - Provides vertical scroll height */}
      <div
        ref={containerRef}
        style={{ height: `${phases.length * 150}vh` }}
        className="relative"
      >
        {/* Sticky Container - Stays fixed while user scrolls */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Horizontal Slider */}
          <div
            className="flex h-full"
            style={{
              width: `${phases.length * 100}vw`,
              transform: `translateX(-${translateX}%)`,
              transition: 'none', // Smooth via lerp, not CSS
              willChange: 'transform'
            }}
          >
            {phases.map((phase, index) => {
              // Calculate distance from active phase for fade effect
              const distanceFromActive = Math.abs(index - activeIndex)
              const opacity = distanceFromActive === 0 ? 1 :
                             distanceFromActive === 1 ? 0.15 : 0.05

              return (
                <div
                  key={phase.id}
                  className="w-screen h-screen flex-shrink-0 transition-opacity duration-500"
                  style={{ opacity }}
                >
                  <PhaseSection
                    phase={phase}
                    isActive={activePhase === phase.id}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
