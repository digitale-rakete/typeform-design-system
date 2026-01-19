'use client'

import { motion } from 'framer-motion'
import { Card } from '../Card'

const packages = [
  {
    name: 'Starter',
    tagline: 'Für den Einstieg',
    description: 'Perfekt für Unternehmen, die mit Multi-Channel-Outreach starten wollen.',
    features: [
      'E-Mail-Sequenzen (automatisiert)',
      'LinkedIn Connection Requests',
      'Landing Page (1 Variante)',
      'Monatliche Strategy Calls',
      'Performance-Tracking Dashboard',
    ],
    cta: 'Gespräch buchen',
    highlight: false,
  },
  {
    name: 'Professional',
    tagline: 'Die komplette Lösung',
    description: 'Maximale Reichweite durch orchestrierte Multi-Channel-Kampagnen.',
    features: [
      'Alles aus Starter, plus:',
      'LinkedIn InMails & Messaging',
      'Landing Pages (3 Varianten)',
      'A/B Testing & Optimierung',
      'Erweiterte AI-Personalisierung',
      'Wöchentliche Optimierung',
      'Dedizierter Account Manager',
    ],
    cta: 'Gespräch buchen',
    highlight: true,
  },
  {
    name: 'Enterprise',
    tagline: 'Für Skalierung',
    description: 'Massgeschneiderte Lösungen für grosse Teams und komplexe Sales-Prozesse.',
    features: [
      'Alles aus Professional, plus:',
      'Ads (Meta & LinkedIn) optional',
      'Unbegrenzte Landing Pages',
      'Multi-Markt & Multi-Language',
      'Custom Integrationen (CRM, ERP)',
      'White-Label Möglichkeit',
      'Priority Support',
    ],
    cta: 'Gespräch buchen',
    highlight: false,
  },
]

export function Packages() {
  return (
    <section id="packages" className="py-32 px-6 lg:px-8 border-t border-white/5">
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
              Unsere Pakete
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Wähle dein Paket
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Drei Pakete für unterschiedliche Bedürfnisse. Preise auf Anfrage – massgeschneidert für dein Unternehmen.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card
                padding="lg"
                className={`h-full flex flex-col ${
                  pkg.highlight
                    ? 'border-2 border-accent-gold/40 bg-gradient-to-b from-accent-gold/10 to-transparent relative'
                    : ''
                }`}
              >
                {/* Recommended Badge */}
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1.5 bg-accent-gold text-[#1a1025] text-sm font-semibold rounded-full">
                      Empfohlen
                    </div>
                  </div>
                )}

                {/* Package Header */}
                <div className="mb-6">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      pkg.highlight
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-accent-cyan to-accent-gold'
                        : 'text-white'
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-white/60">{pkg.tagline}</p>
                </div>

                {/* Description */}
                <p className="text-white/70 mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Features List */}
                <div className="flex-1 mb-8">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span
                          className={`mt-1 flex-shrink-0 ${
                            pkg.highlight ? 'text-accent-gold' : 'text-success'
                          }`}
                        >
                          ✓
                        </span>
                        <span className="text-white/80 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href="https://cal.com/salesbrain/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-full inline-flex items-center justify-center
                    px-10 py-5 text-lg font-semibold rounded-lg
                    transition-all duration-[300ms] ease-out
                    ${pkg.highlight
                      ? 'bg-accent-gold text-[#1a1025] hover:bg-[#ffbf00] hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-gold/20'
                      : 'bg-transparent border-2 border-white/20 text-white hover:border-accent-gold hover:text-accent-gold hover:bg-accent-gold/5'
                    }
                  `}
                >
                  {pkg.cta}
                </a>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div
            className="inline-block px-8 py-4 rounded-2xl border"
            style={{
              borderColor: 'rgba(230, 181, 0, 0.3)',
              backgroundColor: 'rgba(230, 181, 0, 0.05)',
            }}
          >
            <p className="text-lg text-white/90">
              <span className="text-accent-gold font-semibold">Preise auf Anfrage.</span>
              {' '}Keine Setup-Kosten. Keine versteckten Gebühren. Massgeschneidert für dein Unternehmen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
