'use client'

import { motion } from 'framer-motion'
import { Card } from '../Card'

const comparisonData = [
  {
    feature: 'Setup-Zeit',
    crm: '6-12 Monate',
    agentur: '2-3 Monate',
    salesbrain: '2-3 Wochen',
  },
  {
    feature: 'Done-for-you Service',
    crm: '✗',
    agentur: '✓',
    salesbrain: '✓',
  },
  {
    feature: 'Multi-Channel (E-Mail + LinkedIn)',
    crm: '✗',
    agentur: '✓ (teuer)',
    salesbrain: '✓',
  },
  {
    feature: 'AI-gestützte Personalisierung',
    crm: '✗',
    agentur: '✗',
    salesbrain: '✓',
  },
  {
    feature: 'Landing Pages inklusive',
    crm: '✗',
    agentur: 'Zusatzkosten',
    salesbrain: '✓',
  },
  {
    feature: 'Eigene Infrastruktur',
    crm: '✓',
    agentur: '✗',
    salesbrain: '✓',
  },
  {
    feature: 'Monatliche Kosten',
    crm: 'CHF 100-500',
    agentur: 'CHF 5000+',
    salesbrain: 'CHF 2500-4000',
  },
  {
    feature: 'Zeitaufwand',
    crm: 'Hoch (täglich)',
    agentur: 'Niedrig',
    salesbrain: 'Minimal',
  },
]

const solutions = [
  { id: 'crm', name: 'CRM-Lösung', key: 'crm' },
  { id: 'agentur', name: 'Marketing-Agentur', key: 'agentur' },
  { id: 'salesbrain', name: 'SalesbrAIn', key: 'salesbrain', highlight: true },
]

export function Comparison() {
  return (
    <section id="comparison" className="py-32 px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 mb-6">
            <span className="text-sm text-accent-gold font-semibold">
              Der Vergleich
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Warum SalesbrAIn?
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Siehe selbst, wie wir uns von klassischen CRM-Lösungen und teuren Agenturen unterscheiden.
          </p>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-bg-elevated border border-white/10 rounded-2xl overflow-hidden shadow-lg shadow-black/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 text-white/70 font-semibold">
                      Feature
                    </th>
                    {solutions.map((solution) => (
                      <th
                        key={solution.id}
                        className={`p-6 text-center font-semibold ${
                          solution.highlight
                            ? 'bg-accent-gold/10 border-l border-r border-accent-gold/20'
                            : ''
                        }`}
                      >
                        {solution.highlight ? (
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-accent-cyan to-accent-gold">
                            SalesbrAIn
                          </span>
                        ) : (
                          <span className="text-white/70">{solution.name}</span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="p-6 text-white font-medium">{row.feature}</td>
                      <td className="p-6 text-center text-white/70">{row.crm}</td>
                      <td className="p-6 text-center text-white/70">{row.agentur}</td>
                      <td className="p-6 text-center bg-accent-gold/5 border-l border-r border-accent-gold/20">
                        <span className="text-accent-gold font-semibold">
                          {row.salesbrain}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {solutions.map((solution, solutionIndex) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: solutionIndex * 0.1 }}
            >
              <Card
                padding="lg"
                className={
                  solution.highlight
                    ? 'border-2 border-accent-gold/30 bg-accent-gold/5'
                    : ''
                }
              >
                <h3
                  className={`text-2xl font-bold mb-6 ${
                    solution.highlight
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-accent-cyan to-accent-gold'
                      : 'text-white'
                  }`}
                >
                  {solution.highlight ? 'SalesbrAIn' : solution.name}
                </h3>
                <div className="space-y-4">
                  {comparisonData.map((row, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="flex justify-between items-start pb-4 border-b border-white/10 last:border-0"
                    >
                      <span className="text-white/70 text-sm">{row.feature}</span>
                      <span
                        className={`font-semibold text-right ml-4 ${
                          solution.highlight ? 'text-accent-gold' : 'text-white/90'
                        }`}
                      >
                        {row[solution.key as keyof typeof row]}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-lg text-white/80">
            <span className="text-accent-gold font-semibold">
              SalesbrAIn kombiniert das Beste aus beiden Welten:
            </span>
            {' '}Die Kontrolle eines CRM mit der Effizienz einer Agentur.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
