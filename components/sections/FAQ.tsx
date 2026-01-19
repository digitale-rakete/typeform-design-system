'use client'

import { motion } from 'framer-motion'
import * as Accordion from '@radix-ui/react-accordion'
import { useState } from 'react'

const faqs = [
  {
    question: 'Wie lange dauert es, bis SalesbrAIn aktiv ist?',
    answer:
      'Nach dem Kickoff-Meeting beginnt die Research-Phase (Woche 1-2), gefolgt von der Setup-Phase (Woche 2-3). Nach 2-3 Wochen geht dein System live und beginnt, Kontakte zu generieren. Die ersten qualifizierten Termine kannst du ab Woche 5 erwarten.',
  },
  {
    question: 'Was kostet SalesbrAIn pro Monat?',
    answer:
      'Die monatlichen Kosten liegen zwischen CHF 2500 und CHF 4000, abhängig vom gewählten Paket und den benötigten Kanälen. Im Gegensatz zu Agenturen (CHF 5000+) oder dem Zeitaufwand eines eigenen CRM-Systems bietet SalesbrAIn das beste Preis-Leistungs-Verhältnis.',
  },
  {
    question: 'Brauche ich technisches Know-how?',
    answer:
      'Nein. SalesbrAIn ist ein Done-for-you Service. Wir kümmern uns um die gesamte technische Infrastruktur, Setup und Wartung. Du konzentrierst dich auf das, was du am besten kannst: Verkaufsgespräche führen.',
  },
  {
    question: 'Welche Kanäle nutzt SalesbrAIn?',
    answer:
      'Wir orchestrieren E-Mail, LinkedIn, Landing Pages und optional auch Ads (Meta, LinkedIn). Alle Kanäle arbeiten koordiniert zusammen, um maximale Reichweite und Conversion zu erzielen.',
  },
  {
    question: 'Ist SalesbrAIn DSG-konform?',
    answer:
      'Ja, zu 100%. Alle Systeme sind in der Schweiz gehostet und erfüllen die Anforderungen des Schweizer Datenschutzgesetzes (DSG). Deine Daten und die deiner Kontakte sind bei uns sicher.',
  },
  {
    question: 'Was unterscheidet SalesbrAIn von anderen Lösungen?',
    answer:
      'Im Gegensatz zu CRM-Systemen, die du selbst pflegen musst, oder teuren Agenturen, die deine Kontakte kontrollieren, bietet SalesbrAIn Done-for-you Service mit voller Kontrolle. Du besitzt deine Infrastruktur, deine Daten und deine Kontakte – während wir die Arbeit machen.',
  },
  {
    question: 'Wie viele Termine kann ich erwarten?',
    answer:
      'Das hängt von deiner Branche und Zielgruppe ab. Unsere Kunden generieren durchschnittlich 15-30 qualifizierte Termine pro Monat nach der Optimierungsphase. In der QUALIFY-Phase arbeiten wir gemeinsam daran, deine Conversion zu maximieren.',
  },
  {
    question: 'Kann ich jederzeit kündigen?',
    answer:
      'Ja. SalesbrAIn arbeitet mit flexiblen Laufzeiten. Nach der initialen Setup-Phase von 2-3 Wochen kannst du monatlich kündigen. Deine Infrastruktur und Daten bleiben bei dir – auch nach einer Kündigung.',
  },
]

export function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  return (
    <section id="faq" className="py-32 px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
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
              Häufige Fragen
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Alles, was du wissen musst
          </h2>
          <p className="text-xl text-white/70">
            Die wichtigsten Fragen zu SalesbrAIn – ehrlich beantwortet.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion.Root
            type="multiple"
            value={openItems}
            onValueChange={setOpenItems}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="border border-white/10 rounded-2xl overflow-hidden bg-[#141419] hover:border-accent-gold/30 transition-colors"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex items-center justify-between group">
                    <span className="text-lg md:text-xl font-semibold text-white pr-4 group-hover:text-accent-gold transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`text-2xl text-accent-gold transition-transform duration-300 flex-shrink-0 ${
                        openItems.includes(`item-${index}`) ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="px-6 pb-6 md:px-8 md:pb-8">
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg text-white/80 mb-6">
            Noch Fragen? Lass uns sprechen.
          </p>
          <a
            href="https://cal.com/salesbrain/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-accent-gold text-[#1a1025] font-semibold rounded-xl hover:bg-[#ffbf00] hover:scale-[1.02] transition-all"
          >
            Kostenloses Gespräch buchen
          </a>
        </motion.div>
      </div>
    </section>
  )
}
