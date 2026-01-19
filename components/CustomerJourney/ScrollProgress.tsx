'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollProgressProps {
  phaseColors: string[]
}

export function ScrollProgress({ phaseColors }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()

  const phaseColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8],
    phaseColors
  )

  return (
    <div className="fixed left-8 top-20 bottom-20 z-50 hidden md:block w-1">
      {/* Background track with gradient effect */}
      <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-transparent via-white/10 to-transparent">
        {/* Progress fill with glow */}
        <motion.div
          className="absolute top-0 left-0 w-full origin-top rounded-full"
          style={{
            scaleY: scrollYProgress,
            background: `linear-gradient(to bottom, transparent, var(--phase-color) 50%, transparent)`,
            boxShadow: `0 0 20px color-mix(in srgb, var(--phase-color) 60%, transparent)`,
            // @ts-ignore - CSS custom property
            '--phase-color': phaseColor
          }}
        />
      </div>
    </div>
  )
}
