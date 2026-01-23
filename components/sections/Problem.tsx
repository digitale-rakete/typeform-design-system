'use client'

import { motion } from 'framer-motion'
import { Card } from '../Card'

const problems = [
  {
    title: 'Dein CRM ist ein Friedhof',
    description:
      'Hunderte Kontakte. Null Bewegung. Du verbringst mehr Zeit mit Datenpflege als mit echten Verkaufsgesprächen. Und während du Excel-Listen aktualisierst, ruft dein Wettbewerb bereits an.',
  },
  {
    title: 'Kontakte werden kalt, bevor du reagierst',
    description:
      '78% der Käufer entscheiden sich für den Erstantwortenden. Das Problem? Die meisten B2B-Unternehmen brauchen über 40 Stunden für eine Antwort. Bis dahin ist die Chance längst beim Wettbewerb.',
  },
  {
    title: 'LinkedIn-Outreach frisst deine Zeit',
    description:
      'Profile durchklicken, Connection Requests schreiben, Follow-ups tracken. Jeden Tag die gleiche manuelle Arbeit. Das Ergebnis? Vielleicht 5% Antwortrate – wenn du Glück hast. LinkedIn funktioniert. Aber nicht so.',
  },
  {
    title: 'Agenturen kosten ein Vermögen',
    description:
      'CHF 5\'000+ pro Monat. Wochen bis zum Start. Lange Reportings, wenig Resultate. Und am Ende gehören dir nicht mal die Kontakte und Prozesse. Du zahlst – aber du kontrollierst nichts.',
  },
]

export function Problem() {
  return (
    <section id="problems" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-3 xs:px-4 sm:px-4 py-1.5 xs:py-2 sm:py-2 rounded-full bg-error/10 border border-error/20 mb-6">
            <span className="text-xs xs:text-sm sm:text-sm text-error font-semibold">
              Kennst du das?
            </span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white mb-6">
            Wir verstehen dein Problem
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-xl text-white/70 max-w-3xl mx-auto">
            B2B-Vertrieb ist zeitaufwändig, teuer und frustrierend. Du bist nicht allein.
          </p>
        </motion.div>

        {/* Problem Cards Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-6 lg:gap-8">
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
                    <h3 className="text-xl xs:text-xl sm:text-2xl md:text-2xl font-bold text-white mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-sm xs:text-base sm:text-base text-white/70 leading-relaxed">
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
          <p className="text-base xs:text-lg sm:text-xl md:text-xl text-white/80 mb-4">
            <span className="text-accent-gold font-semibold">Salesbrain löst all diese Probleme.</span>
          </p>
          <p className="text-sm xs:text-base sm:text-base text-white/60">
            Done-for-you. Multi-Channel. Aktiv in 3-4 Wochen.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
