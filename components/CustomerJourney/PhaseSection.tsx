'use client'

import { motion } from 'framer-motion'
import type { Phase } from '@/lib/customer-journey-data'
import { LordIcon } from '@/components/LordIcon'

interface PhaseSectionProps {
  phase: Phase
  isActive: boolean
}

export function PhaseSection({ phase, isActive }: PhaseSectionProps) {
  return (
    <section
      id={`phase-${phase.id}`}
      className="relative w-full md:w-screen md:min-h-screen flex-shrink-0 flex items-center justify-center py-16 sm:py-20 md:py-24 lg:py-32 px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8"
      style={{
        background: `radial-gradient(ellipse at center, ${phase.color}08 0%, transparent 70%)`,
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Left-aligned Header with Icon + Stacked Text */}
          <div className="flex items-start gap-4 mb-6">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex-shrink-0 inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full backdrop-blur-sm"
              style={{
                backgroundColor: `${phase.color}15`,
                border: `3px solid ${phase.color}40`,
                boxShadow: `0 0 40px ${phase.color}20`,
              }}
            >
              <LordIcon
                icon={phase.lordIcons.primary}
                size={60}
                colorize={phase.color}
                loop={true}
                speed={phase.id === 1 ? 0.5 : 1}
              />
            </motion.div>

            {/* Stacked Text - Left Aligned */}
            <div className="flex flex-col gap-1">
              {/* Phase Name */}
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider backdrop-blur-sm w-fit"
                style={{
                  backgroundColor: `${phase.color}10`,
                  color: phase.color,
                  border: `2px solid ${phase.color}30`,
                }}
              >
                PHASE {phase.id}: {phase.name}
              </motion.span>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-2xl sm:text-3xl font-bold text-white"
              >
                {phase.headline}
              </motion.h2>

              {/* Timeframe */}
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="text-base sm:text-lg font-semibold"
                style={{ color: phase.color }}
              >
                {phase.timeframe}
              </motion.p>
            </div>
          </div>

          {/* 2-Column Layout: Left = Items, Right = Warum + Ergebnis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LEFT COLUMN - All Items */}
            <div className="flex flex-col gap-3">
              {phase.whatWeDo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + index * 0.05,
                    duration: 0.4,
                    ease: 'easeOut'
                  }}
                  className="flex items-start gap-2 p-3 rounded-lg backdrop-blur-sm border transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(42, 31, 61, 0.3)',
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{
                      backgroundColor: phase.color,
                      boxShadow: `0 0 8px ${phase.color}80`
                    }}
                  />
                  <p className="text-white/90 text-sm leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* RIGHT COLUMN - Warum + Ergebnis */}
            <div className="flex flex-col gap-3">
              {/* "Warum das entscheidend ist" */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.7,
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                className="p-4 rounded-lg backdrop-blur-sm border transition-all duration-300 flex-1"
                style={{
                  backgroundColor: 'rgba(42, 31, 61, 0.35)',
                  borderColor: `${phase.color}30`,
                  boxShadow: `0 0 20px ${phase.color}15`,
                }}
              >
                <h3
                  className="text-sm font-bold uppercase tracking-wider mb-3"
                  style={{ color: phase.color }}
                >
                  💡 Warum das entscheidend ist
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {phase.whyItMatters}
                </p>
              </motion.div>

              {/* Result */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.85,
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                className="p-4 rounded-lg backdrop-blur-sm border-2 transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(42, 31, 61, 0.4)',
                  borderColor: phase.color,
                  boxShadow: `0 0 30px ${phase.color}20`,
                }}
              >
                <h3
                  className="text-sm font-bold uppercase tracking-wider mb-3"
                  style={{ color: phase.color }}
                >
                  ✓ Ergebnis
                </h3>
                <p
                  className="text-base font-semibold"
                  style={{ color: phase.color }}
                >
                  {phase.result}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Special Launch Animation for Phase 3 */}
      {phase.special === 'launch' && (
        <>
          {/* Bestehende Pulsing-Animation */}
          <motion.div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at center, ${phase.color}20 0%, transparent 70%)`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          {/* NEU: Countdown-Effekt beim ersten Erscheinen */}
          <motion.div
            className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
            initial={{ opacity: 0, scale: 2 }}
            whileInView={{
              opacity: [0, 1, 1, 1, 0],
              scale: [2, 1.5, 1.5, 1.5, 0.5]
            }}
            viewport={{ once: true }}
            transition={{
              duration: 3,
              times: [0, 0.3, 0.6, 0.9, 1]
            }}
          >
            <motion.span
              className="text-5xl xs:text-6xl sm:text-7xl md:text-9xl lg:text-9xl font-bold block"
              style={{
                color: phase.color,
                textShadow: `0 0 60px ${phase.color}80`,
              }}
            >
              3
            </motion.span>
          </motion.div>

          {/* NEU: Partikel-Effekt beim Launch */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{
                width: 8,
                height: 8,
                backgroundColor: phase.color,
                borderRadius: '50%',
                left: '50%',
                top: '50%',
                boxShadow: `0 0 20px ${phase.color}`,
              }}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
              whileInView={{
                opacity: [0, 1, 1, 0],
                x: Math.cos((i / 12) * Math.PI * 2) * 300,
                y: Math.sin((i / 12) * Math.PI * 2) * 300,
                scale: [0, 1, 1, 0],
              }}
              viewport={{ once: true }}
              transition={{
                duration: 2.5,
                delay: 0.5 + i * 0.05,
                ease: 'easeOut'
              }}
            />
          ))}

          {/* NEU: Sekundäre Partikel-Welle */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`secondary-${i}`}
              className="absolute pointer-events-none"
              style={{
                width: 4,
                height: 4,
                backgroundColor: phase.color,
                borderRadius: '50%',
                left: '50%',
                top: '50%',
                opacity: 0.6,
              }}
              initial={{ opacity: 0, x: 0, y: 0 }}
              whileInView={{
                opacity: [0, 0.8, 0],
                x: Math.cos((i / 8) * Math.PI * 2) * 200,
                y: Math.sin((i / 8) * Math.PI * 2) * 200,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 2,
                delay: 1 + i * 0.08,
                ease: 'easeOut'
              }}
            />
          ))}

          {/* NEU: Expanding Ring Effect */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: 100,
              height: 100,
              border: `3px solid ${phase.color}`,
              borderRadius: '50%',
            }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{
              scale: [0, 4, 6],
              opacity: [0, 0.8, 0],
            }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              delay: 0.8,
              ease: 'easeOut'
            }}
          />
        </>
      )}
    </section>
  )
}
