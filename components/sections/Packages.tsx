'use client'

import { motion } from 'framer-motion'
import { Card } from '../Card'

const packages = [
  {
    name: 'Basis-Paket',
    tagline: '',
    description: '',
    price: 2490,
    recommendedRuntime: 6,
    setupCost: 1790,
    features: [
      'Ermittlung der gesamten Zielgruppe (KI-basierte Datenvalidierung)',
      'Bis zu 2 Kampagnen pro Jahr',
      'B2B Sales Funnel inkl. Landing Page, LinkedIn, E-Mail',
      'SalesbrAIn Dashboard',
      'Monatliches Online-Meeting',
    ],
    cta: 'Gespräch buchen',
    highlight: false,
  },
  {
    name: 'Wachstums-Paket',
    tagline: 'Beliebteste Wahl',
    description: '',
    price: 3490,
    recommendedRuntime: 6,
    setupCost: 1790,
    features: [
      'Alles aus Basis-Paket',
      'Bis zu 4 Kampagnen pro Jahr',
      'Erweiterte Datenvalidierung',
      'DACH-Region',
    ],
    cta: 'Gespräch buchen',
    highlight: true,
  },
  {
    name: 'Professional-Paket',
    tagline: '',
    description: '',
    price: 4990,
    recommendedRuntime: 12,
    setupCost: 1790,
    features: [
      'Alles aus Wachstums-Paket',
      'Bis zu 6 Kampagnen pro Jahr',
      'Mehrere LinkedIn und E-Mail Kanäle',
    ],
    cta: 'Gespräch buchen',
    highlight: false,
  },
]

export function Packages() {
  return (
    <section id="packages" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-3 xs:px-4 sm:px-4 py-1.5 xs:py-2 sm:py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 mb-6">
            <span className="text-xs xs:text-sm sm:text-sm text-accent-gold font-semibold">
              Unsere Pakete
            </span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white mb-6">
            Ihr Investment
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-xl text-white/70 max-w-3xl mx-auto">
            Klare Preise. Keine versteckten Kosten. Punkt.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-6 lg:gap-8 mb-16">
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
                    <div className="px-4 py-1.5 bg-accent-gold text-[#1a1025] text-xs xs:text-sm sm:text-sm font-semibold rounded-full">
                      Empfohlen
                    </div>
                  </div>
                )}

                {/* Package Header */}
                <div className="mb-6">
                  <h3
                    className={`text-xl xs:text-2xl sm:text-2xl font-bold mb-2 ${
                      pkg.highlight
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-accent-cyan to-accent-gold'
                        : 'text-white'
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-sm text-white/60">{pkg.tagline}</p>
                </div>

                {/* Description */}
                <p className="text-sm xs:text-base sm:text-base text-white/70 mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Pricing */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl xs:text-4xl sm:text-4xl font-bold text-white">
                      CHF {pkg.price.toLocaleString('de-CH')}.-
                    </span>
                    <span className="text-sm xs:text-base sm:text-base text-white/60">
                      pro Monat
                    </span>
                  </div>

                  {/* Runtime Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
                    <span className="text-xs text-white/70">
                      Min. {pkg.recommendedRuntime} Monate
                    </span>
                  </div>

                  {/* Setup Costs */}
                  <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs xs:text-sm sm:text-sm text-white/70">
                        + Einmalige Einrichtung
                      </span>
                      <span className="text-sm xs:text-base sm:text-base font-semibold text-white">
                        CHF {pkg.setupCost.toLocaleString('de-CH')}.-
                      </span>
                    </div>
                    <p className="text-xs text-white/50 mb-2">
                      Inkl. Kickoff, TAM/SAM/SOM-Analyse, komplettes System-Setup
                    </p>
                    <p className="text-xs text-white/40">
                      Nicht enthalten: Google Ads Budget, Content-Erstellung
                    </p>
                  </div>
                </div>

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
                          •
                        </span>
                        <span className="text-white/80 text-xs xs:text-sm sm:text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href="https://calendly.com/eduard-mirdita-digitalerakete/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-full inline-flex items-center justify-center
                    px-6 xs:px-8 sm:px-10 py-3 xs:py-4 sm:py-5 text-base xs:text-base sm:text-lg font-semibold rounded-lg
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
            <p className="text-sm xs:text-base sm:text-lg md:text-lg text-white/90">
              <span className="text-accent-gold font-semibold">Transparente Preise.</span>
              {' '}Keine versteckten Gebühren. Massgeschneidert für dein Unternehmen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
