'use client'

import { motion } from 'framer-motion'
import { Card } from '../Card'
import { channels } from '@/lib/customer-journey-data'
import { LordIcon } from '@/components/LordIcon'

const channelDetails = [
  {
    description: 'Personalisierte Cold-E-Mail-Sequenzen, automatisiert & getrackt',
    features: ['Automatische Follow-ups', 'Domain Warmup', 'A/B Testing'],
  },
  {
    description: 'Connection Requests, InMails, Profile Views – alles koordiniert',
    features: ['Auto-Connect', 'Personalisierte Messages', 'Kontakt-Tracking'],
  },
  {
    description: 'Massgeschneiderte Seiten für jede Kampagne & Zielgruppe',
    features: ['Conversion-optimiert', 'A/B Testing', 'Analytics'],
  },
  {
    description: 'Meta/LinkedIn Ads für zusätzliche Reichweite',
    features: ['Zielgruppen-Targeting', 'Budget-Optimierung', 'Performance-Tracking'],
  },
]

export function MultiChannel() {
  return (
    <section id="multi-channel" className="relative py-32 px-6 lg:px-8 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] bg-accent-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-accent-cyan/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-6">
            <span className="text-sm text-accent-cyan font-semibold">
              Die Orchestrierung
            </span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Multi-Channel Outreach
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-xl text-white/70 max-w-3xl mx-auto">
            Alle Kanäle arbeiten zusammen – koordiniert, automatisiert, effizient.
          </p>
        </motion.div>

        {/* Channels Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-6 lg:gap-8 mb-16">
          {channels.map((channel, index) => {
            const details = channelDetails[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card interactive padding="lg" className="h-full">
                  {/* Channel Header */}
                  <div className="flex items-center space-x-4 mb-4">
                    {/* Animated Icon Container */}
                    <div
                      className="relative w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
                      style={{
                        backgroundColor: `${channel.color}15`,
                        border: `2px solid ${channel.color}30`,
                        boxShadow: `0 0 30px ${channel.color}20`,
                      }}
                    >
                      <LordIcon
                        icon={channel.lordIconId}
                        size={64}
                        colorize={channel.color}
                        loop={true}
                      />
                    </div>
                    <h3
                      className="text-xl sm:text-2xl md:text-2xl font-bold"
                      style={{ color: channel.color }}
                    >
                      {channel.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {details.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {details.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: channel.color }}
                        />
                        <span className="text-sm text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Message */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div
            className="inline-block px-8 py-4 rounded-2xl border"
            style={{
              borderColor: 'rgba(230, 181, 0, 0.3)',
              backgroundColor: 'rgba(230, 181, 0, 0.05)',
            }}
          >
            <p className="text-lg text-white/90">
              <span className="text-accent-gold font-semibold">Alles aus einer Hand.</span>
              {' '}Keine Tools. Keine Integrationen. Keine Kopfschmerzen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
