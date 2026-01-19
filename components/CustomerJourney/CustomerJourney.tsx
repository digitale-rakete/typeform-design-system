'use client'

import { useState, useEffect } from 'react'
import { PhaseSection } from './PhaseSection'
import { PhaseIndicator } from './PhaseIndicator'
import { ScrollProgress } from './ScrollProgress'
import { phases } from '@/lib/customer-journey-data'

export function CustomerJourney() {
  const [activePhase, setActivePhase] = useState(1)
  const phaseColors = phases.map(p => p.color)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      const scrollPercentage = scrollPosition / (documentHeight - windowHeight)

      const newPhase = Math.min(
        Math.ceil(scrollPercentage * phases.length) || 1,
        phases.length
      )

      setActivePhase(newPhase)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePhaseClick = (phase: number) => {
    const element = document.getElementById(`phase-${phase}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

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
