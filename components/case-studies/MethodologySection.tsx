'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/Card'
import { StatCounter } from './StatCounter'

interface Baustein {
  title: string
  problem: string
  solution: string
  statValue: number
  statSuffix: string
  statLabel: string
  example: string
}

const bausteine: Baustein[] = [
  {
    title: 'Multi-Channel Orchestrierung',
    problem: 'Die meisten Unternehmen setzen auf Email allein. Das Ergebnis? Durchschnittlich 5% Antwortrate. 95 von 100 Kontakten ignorieren dich.',
    solution: 'Multi-Channel-Kampagnen kombinieren Email, LinkedIn und Landing Pages – perfekt aufeinander abgestimmt. Das Ergebnis? Bis zu 287% höhere Abschlussraten.',
    statValue: 287,
    statSuffix: '%',
    statLabel: 'Höhere Conversions',
    example: 'CrossKnowledge steigerte den Marketing-Anteil an der Pipeline von 35% auf 60% – allein durch Multi-Channel-Orchestrierung.'
  },
  {
    title: 'Speed-to-Lead',
    problem: 'Die durchschnittliche Antwortzeit im B2B-Vertrieb beträgt über 42 Stunden. 50% aller Kontakte bekommen überhaupt keine Antwort.',
    solution: 'Automatisierte Sofort-Reaktion auf jedes Kaufsignal. Keine Verzögerung. Keine verpassten Chancen. Wer zuerst antwortet, gewinnt.',
    statValue: 21,
    statSuffix: 'x',
    statLabel: 'Höhere Qualifizierung',
    example: 'LinkedSelling steigerte die Terminquote von 82 auf 195 pro Monat (+138%) durch Reaktion innerhalb von 24 Stunden statt einer Woche.'
  },
  {
    title: 'Intent-basierte Priorisierung',
    problem: 'Du hast 1\'000 Kontakte. Aber nur 280 davon sind gerade aktiv auf der Suche nach einer Lösung. Die anderen 720? Noch nicht bereit. Zeitverschwendung.',
    solution: 'AI-gestütztes Scoring erkennt, welche Kontakte echtes Kaufinteresse zeigen – basierend auf Verhalten, Engagement und Signalen.',
    statValue: 59,
    statSuffix: '%',
    statLabel: 'Höhere Win-Rate',
    example: 'Cloudera erkannte: Nur 28% ihrer Zielkunden waren kaufbereit. Durch Fokussierung sank der Cost-per-Kontakt um 50% bei 30+ grossen Abschlüssen.'
  }
]

export function MethodologySection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 mb-6">
            <span className="text-sm text-accent-gold font-semibold">Die drei Bausteine</span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Warum diese Methodik funktioniert
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-xl text-white/70 max-w-3xl mx-auto">
            Salesbrain ist kein weiteres Tool. Es ist die Kombination aus drei bewährten Strategien,
            die Enterprise-Konzerne seit Jahren erfolgreich einsetzen – automatisiert und bezahlbar für KMUs.
          </p>
        </motion.div>

        {/* Grid of 3 Bausteine */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {bausteine.map((baustein, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card padding="lg" className="h-full flex flex-col">
                {/* Icon/Number */}
                <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-accent-gold">{index + 1}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl xs:text-2xl font-bold text-white mb-4">
                  {baustein.title}
                </h3>

                {/* Problem */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-red-400 mb-2 uppercase tracking-wide">
                    Das Problem
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {baustein.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-green-400 mb-2 uppercase tracking-wide">
                    Die Lösung
                  </h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {baustein.solution}
                  </p>
                </div>

                {/* Key Stats */}
                <div className="pt-4 mt-auto border-t border-white/10">
                  <div className="text-3xl xs:text-4xl font-bold text-accent-gold mb-1">
                    <StatCounter
                      end={baustein.statValue}
                      suffix={baustein.statSuffix}
                      duration={2500}
                    />
                  </div>
                  <p className="text-xs text-white/60 mb-4">
                    {baustein.statLabel}
                  </p>
                </div>

                {/* Example Case */}
                <div className="pt-4 border-t border-white/5">
                  <p className="text-xs text-white/50 leading-relaxed">
                    <span className="font-semibold text-white/70">Beispiel:</span> {baustein.example}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
