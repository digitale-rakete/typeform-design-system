'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/Card'
import { CaseStudyTable } from './CaseStudyTable'

const pricingTable = {
  headers: ['Lösung', 'Jährliche Kosten', 'Setup-Zeit', 'Typ'],
  rows: [
    {
      'Lösung': '6sense / Demandbase',
      'Jährliche Kosten': 'CHF 60\'000+',
      'Setup-Zeit': '3-6 Monate',
      'Typ': 'Enterprise-Plattform'
    },
    {
      'Lösung': 'ZoomInfo',
      'Jährliche Kosten': 'CHF 15\'000+',
      'Setup-Zeit': '1-2 Monate',
      'Typ': 'Daten-Plattform'
    },
    {
      'Lösung': 'Marketing-Agentur',
      'Jährliche Kosten': 'CHF 60\'000+',
      'Setup-Zeit': '2-3 Monate',
      'Typ': 'Service'
    },
    {
      'Lösung': 'Salesbrain Basis',
      'Jährliche Kosten': 'CHF 14\'940',
      'Setup-Zeit': '3-4 Wochen',
      'Typ': 'Done-for-you'
    },
    {
      'Lösung': 'Salesbrain Wachstum',
      'Jährliche Kosten': 'CHF 20\'940',
      'Setup-Zeit': '3-4 Wochen',
      'Typ': 'Done-for-you'
    },
    {
      'Lösung': 'Salesbrain Professional',
      'Jährliche Kosten': 'CHF 59\'880',
      'Setup-Zeit': '3-4 Wochen',
      'Typ': 'Done-for-you'
    }
  ]
}

const benefits = [
  {
    title: 'Multi-Channel-Orchestrierung',
    description: 'Email, LinkedIn und Landing Pages perfekt aufeinander abgestimmt'
  },
  {
    title: 'Speed-to-Lead Automatisierung',
    description: 'Sofortige Reaktion auf Kaufsignale, 24/7 aktiv'
  },
  {
    title: 'AI-gestütztes Kontakt-Scoring',
    description: 'Intelligente Priorisierung basierend auf echtem Kaufinteresse'
  },
  {
    title: 'Kontinuierliche Optimierung',
    description: 'Laufendes A/B-Testing und Performance-Verbesserung'
  },
  {
    title: 'Persönliche Betreuung',
    description: 'Monatliche Meetings und direkter Support'
  },
  {
    title: 'SalesbrAIn Dashboard',
    description: 'Echtzeit-Einblicke in alle Kampagnen und Metriken'
  }
]

export function BenefitsSection() {
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
            <span className="text-sm text-accent-gold font-semibold">Dein Investment</span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Enterprise-Ergebnisse.
            <br />
            <span className="text-accent-gold">KMU-Budget.</span>
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-xl text-white/70 max-w-3xl mx-auto">
            Du musst kein Millionen-Budget haben, um diese Methodik zu nutzen.
            Salesbrain macht sie zugänglich.
          </p>
        </motion.div>

        {/* Pricing Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl xs:text-3xl font-bold text-white mb-6 text-center md:text-left">
            Der Vergleich
          </h3>
          <CaseStudyTable
            headers={pricingTable.headers}
            rows={pricingTable.rows}
            variant="pricing"
            highlightColumn={1}
          />
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl xs:text-3xl font-bold text-white mb-8 text-center">
            Was du bekommst
          </h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card padding="md" className="h-full">
                  <div>
                    <h4 className="text-base xs:text-lg font-semibold text-white mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 xs:p-8 md:p-10 bg-gradient-to-br from-accent-gold/10 to-accent-cyan/10 border border-accent-gold/20 rounded-2xl text-center"
        >
          <h3 className="text-xl xs:text-2xl md:text-3xl font-bold text-white mb-4">
            Salesbrain kombiniert das Beste aus beiden Welten
          </h3>
          <p className="text-base xs:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Die Kontrolle eines CRM mit der Effizienz einer Agentur – und der Methodik
            von Enterprise-Konzernen. Für einen Bruchteil des Preises.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Schneller Setup (3-4 Wochen)</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Done-for-you Service</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Made in Switzerland</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
