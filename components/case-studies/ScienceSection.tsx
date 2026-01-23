'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/Card'
import { CaseStudyTable } from './CaseStudyTable'
import { StatCounter } from './StatCounter'

interface ResearchSource {
  institution: string
  study: string
  finding: string
  statValue: number
  statSuffix: string
  statLabel: string
}

const researchSources: ResearchSource[] = [
  {
    institution: 'MIT Sloan School of Management',
    study: 'Dr. James Oldroyd analysierte 15\'000+ Kontakte und 100\'000+ Call-Versuche über 3 Jahre.',
    finding: 'Kontakt innerhalb von 5 Minuten vs. 30 Minuten erhöht die Qualifizierungswahrscheinlichkeit massiv.',
    statValue: 21,
    statSuffix: 'x',
    statLabel: 'Höhere Qualifizierung'
  },
  {
    institution: 'Harvard Business Review',
    study: 'Studie mit 2\'200+ US-Unternehmen zur Reaktionszeit im B2B-Vertrieb.',
    finding: 'Unternehmen, die innerhalb 1 Stunde antworten, führen signifikant mehr qualifizierte Gespräche mit Entscheidern.',
    statValue: 7,
    statSuffix: 'x',
    statLabel: 'Mehr Gespräche'
  },
  {
    institution: 'Velocify Research',
    study: 'Analyse von Millionen Sales-Interaktionen zur Optimierung der Conversion.',
    finding: 'Kontakt innerhalb 1 Minute nach Erstkontakt erhöht die Conversion drastisch.',
    statValue: 391,
    statSuffix: '%',
    statLabel: 'Höhere Conversion'
  },
  {
    institution: 'Gartner / Industry Benchmarks',
    study: 'Meta-Analyse von Multi-Channel Marketing Kampagnen im B2B-Bereich.',
    finding: 'Multi-Channel-Kampagnen erreichen deutlich höhere Kaufraten als Single-Channel-Ansätze.',
    statValue: 287,
    statSuffix: '%',
    statLabel: 'Mehr Conversions'
  }
]

const benchmarksTable = {
  headers: ['Kategorie', 'Benchmark', 'Quelle'],
  rows: [
    {
      'Kategorie': 'Speed-to-Lead',
      'Benchmark': '21x besser bei 5 Min vs. 30 Min',
      'Quelle': 'MIT Sloan'
    },
    {
      'Kategorie': 'Multi-Channel',
      'Benchmark': '287% mehr Conversions',
      'Quelle': 'Gartner'
    },
    {
      'Kategorie': 'Intent-Daten',
      'Benchmark': '59% höhere Win-Rate',
      'Quelle': 'ZoomInfo / Smartsheet'
    },
    {
      'Kategorie': 'Personalisierung',
      'Benchmark': '32% mehr Antworten',
      'Quelle': 'Industry Average'
    },
    {
      'Kategorie': 'A/B-Testing',
      'Benchmark': '82% höherer ROI',
      'Quelle': 'Industry Studies'
    },
    {
      'Kategorie': 'Cold Email (Durchschnitt)',
      'Benchmark': '5% Antwortrate',
      'Quelle': 'Belkins Research'
    },
    {
      'Kategorie': 'Cold Email (Top-Performer)',
      'Benchmark': '15-25% Antwortrate',
      'Quelle': 'Belkins Research'
    }
  ]
}

export function ScienceSection() {
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20 mb-6">
            <span className="text-sm text-blue-400 font-semibold">Peer-Reviewed Research</span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Die Wissenschaft dahinter
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-xl text-white/70 max-w-3xl mx-auto">
            Diese Zahlen stammen nicht aus Marketing-Blogs, sondern aus peer-reviewed Studien
            und verifizierten Vendor Case Studies.
          </p>
        </motion.div>

        {/* Research Sources Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {researchSources.map((source, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card padding="lg" className="h-full flex flex-col">
                {/* Institution */}
                <div className="mb-4">
                  <h3 className="text-lg xs:text-xl font-bold text-white">
                    {source.institution}
                  </h3>
                </div>

                {/* Study */}
                <p className="text-sm text-white/70 mb-4 leading-relaxed">
                  {source.study}
                </p>

                {/* Finding */}
                <p className="text-sm text-white/90 mb-6 leading-relaxed">
                  <span className="font-semibold text-accent-gold">Kernergebnis:</span> {source.finding}
                </p>

                {/* Stat */}
                <div className="mt-auto pt-4 border-t border-white/10">
                  <div className="text-3xl xs:text-4xl font-bold text-blue-400 mb-1">
                    <StatCounter
                      end={source.statValue}
                      suffix={source.statSuffix}
                      duration={2500}
                    />
                  </div>
                  <p className="text-xs text-white/60">
                    {source.statLabel}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Benchmarks Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl xs:text-3xl font-bold text-white mb-6 text-center md:text-left">
            Die wichtigsten Benchmarks
          </h3>
          <CaseStudyTable
            headers={benchmarksTable.headers}
            rows={benchmarksTable.rows}
            variant="science"
            highlightColumn={1}
          />
        </motion.div>

        {/* Methodology Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 xs:p-8 bg-blue-400/5 border border-blue-400/20 rounded-2xl"
        >
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-3">
              Keine Marketing-Versprechen
            </h4>
            <p className="text-sm xs:text-base text-white/80 leading-relaxed">
              Alle Zahlen stammen aus verifizierten Quellen: MIT Sloan School of Management,
              Harvard Business Review, Gartner Research, und offiziellen Vendor Case Studies
              (ZoomInfo, Demandbase, RollWorks). Salesbrain basiert auf dieser bewährten Methodik.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
