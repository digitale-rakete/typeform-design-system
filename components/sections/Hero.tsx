'use client'

import { motion } from 'framer-motion'
import { Button } from '../Button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-sm text-white/80">
            Der einzige KI-Agent mit 20 Jahren Schweizer Vertriebserfahrung
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Dein Vertrieb.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-accent-cyan to-accent-gold">
            Auf Autopilot.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Aktiv in 2-3 Wochen. Verkauft 24/7. Keine IT-Kenntnisse nötig.
          <br />
          <span className="text-white/50">
            100% DSG-konform. Entwickelt in der Schweiz, für die Schweiz.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button size="lg">
            Erstgespräch buchen
          </Button>

          <Button size="lg" variant="secondary">
            Customer Journey ansehen
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span>✓ Keine Vertragsbindung</span>
          <span>✓ Setup in 2-3 Wochen</span>
          <span>✓ Persönliche Beratung</span>
        </motion.div>
      </div>
    </section>
  )
}
