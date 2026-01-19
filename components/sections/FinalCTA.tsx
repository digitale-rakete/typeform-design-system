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
          className="text-4xl md:text-6xl font-bold text-white mb-6"
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
          className="text-xl text-white/70 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Buche jetzt dein kostenloses Erstgespräch und erfahre, wie Salesbrain
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
          <Button size="lg" className="min-w-[280px]">
            Jetzt Erstgespräch buchen
          </Button>

          <Button size="lg" variant="secondary" className="min-w-[280px]">
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
          ✓ Keine Kreditkarte erforderlich · ✓ 100% DSG-konform · ✓ Antwort innerhalb von 24h
        </motion.p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}
