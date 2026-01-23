'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/Button'

export function CaseStudiesHero() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-24 lg:pt-56 lg:pb-32 px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 xs:px-4 sm:px-4 py-1.5 xs:py-2 sm:py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 mb-6 xs:mb-8 sm:mb-8"
          >
            <span className="text-xs xs:text-sm sm:text-sm text-accent-gold font-semibold">
              Erfolgsgeschichten
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 xs:mb-8 sm:mb-8 leading-tight"
          >
            Enterprise-Methoden.
            <br />
            <span className="text-accent-gold">KMU-Preise.</span>
            <br />
            Bewiesene Resultate.
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base xs:text-lg sm:text-xl md:text-xl text-white/70 max-w-3xl mx-auto mb-8 xs:mb-10 sm:mb-12 leading-relaxed"
          >
            Die Strategien, die Zoom, SAP und Snowflake nutzen – jetzt auch für Schweizer KMUs zugänglich.
            Keine Marketing-Versprechen, sondern verifizierte Ergebnisse aus über 10'000 analysierten Kampagnen.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col xs:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.location.href = '/#contact'}
            >
              Demo buchen
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 xs:mt-14 sm:mt-16 flex flex-wrap items-center justify-center gap-6 xs:gap-8 text-sm text-white/50"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Verifizierte Daten</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Peer-Reviewed Studien</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Made in Switzerland</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
