'use client'

import { motion } from 'framer-motion'
import { Button } from '../Button'

export function FinalCTA() {
  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 via-transparent to-accent-cyan/10" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Headline */}
        <motion.h2
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Bereit, deinen Vertrieb zu{' '}
          <span className="text-accent-gold">automatisieren</span>?
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          className="text-base xs:text-lg sm:text-xl md:text-xl text-white/70 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Buche jetzt deine kostenlose Demo und erfahre, wie Salesbrain
          deinen Vertrieb revolutioniert.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="https://calendly.com/eduard-mirdita-digitalerakete/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full sm:min-w-[240px] sm:w-auto">
              Demo buchen
            </Button>
          </a>

          <Button size="lg" variant="secondary" className="w-full sm:min-w-[240px] sm:w-auto">
            Oder schreib uns
          </Button>
        </motion.div>

        {/* Trust Line */}
        <motion.p
          className="mt-8 text-sm text-white/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Unverbindliche Beratung · Antwort innerhalb von 24h
        </motion.p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-accent-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] bg-accent-cyan/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}
