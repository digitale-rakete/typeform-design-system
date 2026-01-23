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
      className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 md:py-24 lg:py-32 px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8"
      style={{
        background: `radial-gradient(ellipse at center, ${phase.color}08 0%, transparent 70%)`,
      }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Phase Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div
              className="inline-flex items-center justify-center w-20 xs:w-20 sm:w-24 md:w-24 h-20 xs:h-20 sm:h-24 md:h-24 rounded-full backdrop-blur-sm"
              style={{
                backgroundColor: `${phase.color}15`,
                border: `3px solid ${phase.color}40`,
                boxShadow: `0 0 40px ${phase.color}20`,
              }}
            >
              <LordIcon
                icon={phase.lordIcons.primary}
                size={80}
                colorize={phase.color}
                loop={true}
                speed={phase.id === 1 ? 0.5 : 1}
              />
            </div>
          </motion.div>

          {/* Phase Number */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <span
              className="inline-block px-4 xs:px-5 sm:px-6 md:px-6 py-1.5 xs:py-2 sm:py-2 rounded-full text-xs xs:text-sm sm:text-sm font-bold tracking-wider backdrop-blur-sm"
              style={{
                backgroundColor: `${phase.color}10`,
                color: phase.color,
                border: `2px solid ${phase.color}30`,
              }}
            >
              PHASE {phase.id}: {phase.name}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold mb-6 text-white"
          >
            {phase.headline}
          </motion.h2>

          {/* Timeframe */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl font-semibold mb-12"
            style={{ color: phase.color }}
          >
            {phase.timeframe}
          </motion.p>

          {/* "Was wir machen" Überschrift - Subtil */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65 }}
            className="text-xs uppercase tracking-wider mb-4 text-white/50 font-semibold"
          >
            Was wir machen
          </motion.p>

          {/* Description Items - Glassmorphism Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid gap-3 xs:gap-4 sm:gap-4 text-left mb-12 max-w-2xl mx-auto"
          >
            {phase.whatWeDo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-3 xs:gap-4 sm:gap-4 p-4 xs:p-5 sm:p-5 rounded-xl backdrop-blur-sm border transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(42, 31, 61, 0.3)',
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                }}
              >
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{
                    backgroundColor: phase.color,
                    boxShadow: `0 0 10px ${phase.color}80`
                  }}
                />
                <p className="text-white/90 leading-relaxed text-sm xs:text-base sm:text-base">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* "Warum das entscheidend ist" Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="mb-8 p-6 xs:p-7 sm:p-8 md:p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 max-w-2xl mx-auto"
            style={{
              backgroundColor: 'rgba(42, 31, 61, 0.35)',
              borderColor: `${phase.color}30`,
              boxShadow: `0 0 20px ${phase.color}15`,
            }}
          >
            <h3
              className="text-sm xs:text-base sm:text-base font-bold uppercase tracking-wider mb-4"
              style={{ color: phase.color }}
            >
              Warum das entscheidend ist
            </h3>
            <p className="text-white/80 leading-relaxed text-sm xs:text-base sm:text-base">
              {phase.whyItMatters}
            </p>
          </motion.div>

          {/* Result Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
            className="p-6 xs:p-7 sm:p-8 md:p-8 rounded-2xl backdrop-blur-sm border-2 transition-all duration-300"
            style={{
              backgroundColor: 'rgba(42, 31, 61, 0.4)',
              borderColor: phase.color,
              boxShadow: `0 0 30px ${phase.color}20`,
            }}
          >
            <p className="text-xs xs:text-sm sm:text-sm uppercase tracking-wider text-white/50 mb-3 font-semibold">
              Ergebnis
            </p>
            <p
              className="text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold"
              style={{ color: phase.color }}
            >
              {phase.result}
            </p>
          </motion.div>

          {/* Special: Infinity Symbol for Phase 5 */}
          {phase.special === 'infinity' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-12 text-6xl xs:text-7xl sm:text-8xl md:text-8xl font-bold"
              style={{
                color: phase.color,
                textShadow: `0 0 40px ${phase.color}60`,
              }}
            >
              ∞
            </motion.div>
          )}
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
