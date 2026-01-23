'use client'

import { motion } from 'framer-motion'
import { CaseStudyCard, CaseStudyCardProps } from './CaseStudyCard'
import { CaseStudyTable } from './CaseStudyTable'

const smbCases: CaseStudyCardProps[] = [
  {
    company: 'Healthcare Software Entwickler',
    size: 'Mittelstand',
    challenge: 'Cold Outreach unter 2% Antwortrate, After-Event Follow-ups nur 5% Erfolgsrate. Kein klares Targeting, alles manuell.',
    solution: '30 Zielkunden präzise definiert. Personalisierter Multi-Channel-Outreach mit kleinen, persönlichen Geschenken. Budget: CHF 4\'500.',
    results: [
      { metric: 'Antwortrate', value: '37%' },
      { metric: 'Umsatz generiert', value: 'CHF 270\'000' },
      { metric: 'ROI', value: '6\'000%' }
    ],
    highlight: true,
    source: 'fullfunnel.io'
  },
  {
    company: 'Payscale',
    logo: '/payscale-full-logo-dark-06a2a33b-c448-4913-bfbb-3884ea1d3763.png',
    size: 'HR-Tech / Mid-Market',
    challenge: 'Langsames Wachstum, hohe Akquisitionskosten, langer Sales Cycle.',
    solution: 'ABM-Integration mit HubSpot, fokussierte Multi-Channel-Kampagnen auf qualifizierte Zielaccounts.',
    results: [
      { metric: 'Umsatzsteigerung', value: '6x' },
      { metric: 'Traffic Zielaccounts', value: '500%' },
      { metric: 'Sales Cycle', value: '-50%' }
    ],
    source: 'rollworks.com, cxl.com'
  },
  {
    company: 'Goverlan',
    logo: '/goverlan-logo.png',
    logoClassName: 'h-40 w-auto max-w-[360px] object-contain filter brightness-0 invert opacity-100',
    size: 'IT-Administration Software',
    challenge: 'Begrenzte Marketing-Ressourcen, schwierig Demos zu generieren, hoher manueller Aufwand.',
    solution: 'ABM-Plattform integriert mit HubSpot für automatisierte Lead-Generierung und Nurturing.',
    results: [
      { metric: 'Demo-Anfragen/Woche', value: '40-50' },
      { metric: 'ROI', value: '15x' },
      { metric: 'Automatisierung', value: '80%' }
    ],
    source: 'singlegrain.com'
  },
  {
    company: 'Dassault Systèmes',
    logo: '/Dassault_Systèmes_logo.svg.png',
    size: '3D-Design Software, Frankreich',
    challenge: 'Grosses Account-Universum in Nordamerika, Fokus unklar, zu viele kleine Opportunities.',
    solution: 'Fokus auf nur 15-20 Zielunternehmen (Fertigung, über CHF 900 Mio. Umsatz). Intensive 1:1 Betreuung.',
    results: [
      { metric: 'Umsatz (12 Monate)', value: 'CHF 61 Mio.' },
      { metric: 'Stakeholder/Account', value: '4.2' },
      { metric: 'Kundenzufriedenheit', value: '9.1/10' }
    ],
    source: 'abmagency.com'
  }
]

const summaryTable = {
  headers: ['Unternehmen', 'Investment', 'Kernergebnis', 'ROI'],
  rows: [
    {
      'Unternehmen': 'Healthcare Software',
      'Investment': 'CHF 4\'500',
      'Kernergebnis': 'CHF 270\'000 Umsatz',
      'ROI': '6\'000%'
    },
    {
      'Unternehmen': 'Payscale',
      'Investment': 'Mid-Market Budget',
      'Kernergebnis': '6x Umsatzsteigerung',
      'ROI': 'Nicht angegeben'
    },
    {
      'Unternehmen': 'Goverlan',
      'Investment': 'HubSpot + ABM',
      'Kernergebnis': '40-50 Demos/Woche',
      'ROI': '15x'
    },
    {
      'Unternehmen': 'Dassault Systèmes',
      'Investment': 'Enterprise ABM',
      'Kernergebnis': 'CHF 61 Mio. Umsatz',
      'ROI': 'Nicht angegeben'
    }
  ]
}

export function SMBCases() {
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-400/10 border border-green-400/20 mb-6">
            <span className="text-sm text-green-400 font-semibold">Mid-Market & KMU-Erfolge</span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Das funktioniert nicht nur für Konzerne
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-xl text-white/70 max-w-3xl mx-auto">
            Die besten Ergebnisse kommen oft von kleineren Unternehmen mit fokussierten Kampagnen.
            Hier sind verifizierte Erfolgsgeschichten von Mittelständlern.
          </p>
        </motion.div>

        {/* Featured Case - Full Width (CHF 4'500 ROI) */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <CaseStudyCard {...smbCases[0]} />
        </motion.div>

        {/* Remaining Cases - 3-column Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {smbCases.slice(1).map((caseStudy, index) => (
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
            Übersicht Mid-Market Cases
          </h3>
          <CaseStudyTable
            headers={summaryTable.headers}
            rows={summaryTable.rows}
            variant="smb"
            highlightColumn={2}
          />
        </motion.div>

        {/* Fazit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 xs:p-8 bg-green-400/5 border border-green-400/20 rounded-2xl"
        >
          <p className="text-base xs:text-lg text-white/90 text-center leading-relaxed">
            <span className="font-semibold text-green-400">Was wir daraus lernen:</span> Du brauchst
            kein Enterprise-Budget. Ein Mittelständler hat mit CHF 4'500 über CHF 270'000 Umsatz generiert.
            Der Schlüssel? Die richtige Methodik, nicht das grösste Budget.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
