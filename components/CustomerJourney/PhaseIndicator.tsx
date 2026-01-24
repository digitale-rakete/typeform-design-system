'use client'

import { motion } from 'framer-motion'

interface PhaseIndicatorProps {
  totalPhases: number
  activePhase: number
  phaseColors: string[]
  onPhaseClick: (phase: number) => void
  isVisible: boolean
}

export function PhaseIndicator({
  totalPhases,
  activePhase,
  phaseColors,
  onPhaseClick,
  isVisible
}: PhaseIndicatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
        scale: isVisible ? 1 : 0.8
      }}
      transition={{
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1]
      }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:flex flex-row gap-3 items-center justify-center"
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      {Array.from({ length: totalPhases }, (_, i) => i + 1).map((phase) => {
        const isActive = phase === activePhase
        const color = phaseColors[phase - 1]

        return (
          <button
            key={phase}
            onClick={() => onPhaseClick(phase)}
            className="group relative"
            aria-label={`Go to phase ${phase}`}
          >
            <motion.div
              initial={false}
              animate={{
                scale: isActive ? 1.5 : 1,
                backgroundColor: isActive ? color : 'transparent'
              }}
              transition={{ duration: 0.3 }}
              className="w-3 h-3 rounded-full border-2 cursor-pointer transition-colors duration-300"
              style={{
                borderColor: color,
                boxShadow: isActive ? `0 0 20px ${color}` : 'none'
              }}
            />

            <span
              className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap backdrop-blur-sm pointer-events-none"
              style={{
                backgroundColor: `${color}20`,
                color: color,
                border: `1px solid ${color}40`
              }}
            >
              Phase {phase}
            </span>
          </button>
        )
      })}
    </motion.div>
  )
}
