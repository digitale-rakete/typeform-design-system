'use client'

import { motion } from 'framer-motion'
import { CaseStudyCard, CaseStudyCardProps } from './CaseStudyCard'
import { CaseStudyTable } from './CaseStudyTable'

const enterpriseCases: CaseStudyCardProps[] = [
  {
    company: 'Zoom',
    logo: '/Zoom_Communications_Logo.svg',
    challenge: 'Fragmentierte Zielgruppen, isolierte Workflows, keine koordinierte Ansprache über mehrere Kanäle. Mit 300M+ Nutzern wollte Zoom qualifizierte Leads für Enterprise-Pläne generieren.',
    solution: 'Multi-Channel ABM mit Intent-Daten, integriert in Salesforce. Koordinierte Kampagnen über Email, LinkedIn und Ads mit zentraler Orchestrierung.',
    results: [
      { metric: 'Opportunities', value: '6.25x' },
      { metric: 'Sales Conversion', value: '36%' },
      { metric: 'Engagement', value: '90%' }
    ],
    highlight: true,
    source: 'demandbase.com'
  },
  {
    company: 'SAP Concur',
    logo: '/sap-concur-logo.png',
    size: '10\'000 Mitarbeiter',
    challenge: 'Grosses Account-Universum, limitiertes Budget, keine klare Priorisierung. Viele potenzielle Kunden, aber unklar welche kaufbereit waren.',
    solution: 'Intent-Signale zur Priorisierung, koordinierte Multi-Channel-Kampagnen. Fokus auf Accounts mit aktiven Kaufsignalen.',
    results: [
      { metric: 'Closed-Won Revenue', value: '52%' },
      { metric: 'Deal-Größe', value: '57%' },
      { metric: 'Pipeline', value: '59%' }
    ],
    source: 'demandbase.com'
  },
  {
    company: 'Snowflake',
    logo: '/snowflake-logo.png',
    size: 'Cloud Data Warehousing',
    challenge: '6-köpfiges ABM-Team verwaltete über 2\'000 gleichzeitige 1:1-Kampagnen. Schwierig skalierbar und zeitintensiv.',
    solution: 'Orchestrierter Multi-Channel-Outreach mit Intent-Daten (Bombora). Automatisierung repetitiver Tasks bei persönlicher Ansprache.',
    results: [
      { metric: 'Meeting-Rate', value: '3x' },
      { metric: 'SDR-Meetings', value: '75%' },
      { metric: 'Intent Conversion', value: '46%' }
    ],
    source: 'rollworks.com, bombora.com'
  },
  {
    company: 'Smartsheet',
    logo: '/smartsheet-logo.svg',
    size: '80% der Fortune 500',
    challenge: 'Keine Intent-Daten, ineffiziente Kontakt-Priorisierung. Verschwendung von Zeit und Budget auf nicht kaufbereite Prospects.',
    solution: 'ZoomInfo Intent-Daten integriert mit Salesforce und Marketo. Priorisierung basierend auf echten Kaufsignalen.',
    results: [
      { metric: 'Win-Rate', value: '59%' },
      { metric: 'Qualifizierte Kontakte', value: '84%' },
      { metric: 'Opportunities', value: '26%' }
    ],
    source: 'zoominfo.com'
  },
  {
    company: 'Automox',
    logo: '/automox-logo.webp',
    size: 'IT Management',
    challenge: 'Begrenzte Ressourcen für Account-basiertes Marketing, schwierig qualifizierte Enterprise-Leads zu generieren.',
    solution: 'ABM-Plattform für fokussierten Account-Approach mit koordinierter Multi-Channel-Strategie.',
    results: [
      { metric: 'Closed-Won Deals', value: '88%' },
      { metric: 'Pipeline Value', value: '3x' },
      { metric: 'Sales Cycle', value: '-40%' }
    ],
    source: 'rollworks.com'
  },
  {
    company: 'Hushly',
    logo: '/8a1tb1gk9g2o8feqvu3hqge59f.png',
    size: 'B2B Marketing Tech',
    challenge: 'Niedrige Conversion-Rate bei Cold Outreach, schwierig qualifizierte B2B-Kontakte zu identifizieren.',
    solution: 'Intent-Daten kombiniert mit LinkedIn Outreach für präzise Zielgruppen-Ansprache.',
    results: [
      { metric: 'Kontakt-Conversion', value: '414%' },
      { metric: 'Qualified Leads', value: '5x' },
      { metric: 'Response Rate', value: '32%' }
    ],
    source: 'linkedin.com'
  }
]

const summaryTable = {
  headers: ['Unternehmen', 'Methodik', 'Kernergebnis', 'Quelle'],
  rows: [
    {
      'Unternehmen': 'Zoom',
      'Methodik': 'Multi-Channel + Intent',
      'Kernergebnis': '6,25x mehr Opportunities',
      'Quelle': 'Demandbase'
    },
    {
      'Unternehmen': 'SAP Concur',
      'Methodik': 'Intent-Priorisierung',
      'Kernergebnis': '52% mehr Closed-Won Revenue',
      'Quelle': 'Demandbase'
    },
    {
      'Unternehmen': 'Snowflake',
      'Methodik': 'Orchestrierter Outreach',
      'Kernergebnis': '3x höhere Meeting-Rate',
      'Quelle': 'RollWorks'
    },
    {
      'Unternehmen': 'Smartsheet',
      'Methodik': 'Intent-Daten',
      'Kernergebnis': '59% höhere Win-Rate',
      'Quelle': 'ZoomInfo'
    },
    {
      'Unternehmen': 'Automox',
      'Methodik': 'ABM-Plattform',
      'Kernergebnis': '88% mehr Closed-Won Deals',
      'Quelle': 'RollWorks'
    },
    {
      'Unternehmen': 'Hushly',
      'Methodik': 'Intent + LinkedIn',
      'Kernergebnis': '414% bessere Kontakt-Conversion',
      'Quelle': 'LinkedIn'
    }
  ]
}

export function EnterpriseCases() {
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-6">
            <span className="text-sm text-accent-cyan font-semibold">Enterprise-Erfolgsgeschichten</span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            So machen es die Grossen
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-xl text-white/70 max-w-3xl mx-auto">
            Diese Unternehmen nutzen genau die Methodik, die Salesbrain für KMUs zugänglich macht.
            Der Unterschied? Sie zahlen CHF 50'000-100'000+ pro Jahr für Tools wie 6sense, Demandbase oder ZoomInfo.
          </p>
        </motion.div>

        {/* Featured Case - Full Width (Zoom) */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <CaseStudyCard {...enterpriseCases[0]} />
        </motion.div>

        {/* Remaining Cases - 2x2 Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {enterpriseCases.slice(1).map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CaseStudyCard {...caseStudy} />
            </motion.div>
          ))}
        </div>

        {/* Summary Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl xs:text-3xl font-bold text-white mb-6 text-center md:text-left">
            Übersicht Enterprise-Cases
          </h3>
          <CaseStudyTable
            headers={summaryTable.headers}
            rows={summaryTable.rows}
            variant="enterprise"
            highlightColumn={2}
          />
        </motion.div>

        {/* Fazit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 xs:p-8 bg-accent-gold/5 border border-accent-gold/20 rounded-2xl"
        >
          <p className="text-base xs:text-lg text-white/90 text-center leading-relaxed">
            <span className="font-semibold text-accent-gold">Fazit:</span> Diese Unternehmen erzielen
            diese Ergebnisse mit Enterprise-Plattformen, die CHF 60'000+ pro Jahr kosten.
            Salesbrain bringt die gleiche Methodik – für einen Bruchteil des Preises.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
