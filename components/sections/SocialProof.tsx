'use client'

import { motion } from 'framer-motion'
import { Card } from '../Card'

const testimonials = [
  {
    quote:
      'Innerhalb von 60 Tagen haben wir 23 qualifizierte Termine generiert. Das System arbeitet, während wir schlafen.',
    author: 'Placeholder Company',
    role: 'CEO',
    company: 'Tech Startup',
  },
  {
    quote:
      'Keine manuellen LinkedIn-Anfragen mehr. Salesbrain hat unseren Outreach komplett automatisiert – und die Qualität ist besser als vorher.',
    author: 'Placeholder Name',
    role: 'Head of Sales',
    company: 'B2B SaaS',
  },
  {
    quote:
      'Die Setup-Zeit von 2-3 Wochen hat sich gelohnt. Jetzt haben wir einen Vertrieb, der 24/7 arbeitet – ohne zusätzliche Mitarbeiter.',
    author: 'Placeholder',
    role: 'Founder',
    company: 'Consulting',
  },
]

const trustBadges = [
  { label: '100% DSG-konform', emoji: '🇨🇭' },
  { label: 'Swiss Quality', emoji: '✓' },
  { label: 'No Setup-Kosten', emoji: '✓' },
  { label: 'Persönlicher Support', emoji: '✓' },
]

// Placeholder logos (text-based for now)
const placeholderLogos = [
  'Company A',
  'Brand B',
  'Firm C',
  'Corp D',
  'Business E',
  'Enterprise F',
]

export function SocialProof() {
  return (
    <section className="py-32 px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-6">
            <span className="text-sm text-success font-semibold">
              Vertrauenswürdig
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Das sagen unsere Kunden
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Reale Ergebnisse von Schweizer B2B-Unternehmen.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card padding="lg" className="h-full">
                {/* Quote */}
                <p className="text-white/90 leading-relaxed mb-6 text-lg">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  {/* Placeholder Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-gold to-accent-cyan flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-white/60">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Logo Wall (Placeholder) */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-white/50 text-sm mb-8">
            Vertraut von führenden Schweizer Unternehmen
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {placeholderLogos.map((logo, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-lg border border-white/10 text-white/40 font-semibold hover:text-white/70 hover:border-white/20 transition-all"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-white/70"
            >
              <span className="text-success">{badge.emoji}</span>
              <span className="font-medium">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
