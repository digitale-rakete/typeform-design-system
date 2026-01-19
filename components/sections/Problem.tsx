'use client'

import { motion } from 'framer-motion'
import { Card } from '../Card'

const problems = [
  {
    title: 'Dein CRM ist ein Friedhof',
    description:
      'Hunderte von Kontakten. Null Bewegung. Du verbringst mehr Zeit mit der Pflege des Systems als mit echten Verkaufsgesprächen.',
  },
  {
    title: 'Kontakte sind kalt, bevor du reagierst',
    description:
      'Bis du einen Lead kontaktierst, hat er schon drei Konkurrenten angeschrieben. Du bist immer einen Schritt zu spät.',
  },
  {
    title: 'LinkedIn-Outreach frisst Stunden',
    description:
      'Profile suchen, Connection Requests schreiben, Follow-ups verfolgen. Jeden Tag die gleiche manuelle Arbeit – ohne Garantie auf Erfolg.',
  },
  {
    title: 'Agenturen kosten ein Vermögen',
    description:
      'CHF 5000+ pro Monat, lange Setup-Zeiten, und am Ende hast du keine Kontrolle über deine eigenen Kontakte und Prozesse.',
  },
]

export function Problem() {
  return (
    <section id="problems" className="py-32 px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-error/10 border border-error/20 mb-6">
            <span className="text-sm text-error font-semibold">
              Kennst du das?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Wir verstehen dein Problem
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            B2B-Vertrieb ist zeitaufwändig, teuer und ineffizient. Du bist nicht allein.
          </p>
        </motion.div>

        {/* Problem Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card interactive padding="lg" className="h-full">
                <div className="flex items-start space-x-4">
                  {/* Red indicator */}
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-error mt-2" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-xl text-white/80 mb-4">
            <span className="text-accent-gold font-semibold">Salesbrain löst all diese Probleme.</span>
          </p>
          <p className="text-white/60">
            Done-for-you. Multi-Channel. Aktiv in 2-3 Wochen.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
