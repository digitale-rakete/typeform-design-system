export interface Phase {
  id: number
  name: string
  emoji: string
  color: string
  timeframe: string
  headline: string
  description: string[]
  result: string
}

export const phases: Phase[] = [
  {
    id: 1,
    name: 'RESEARCH',
    emoji: '🔍',
    color: '#22C55E',
    timeframe: 'Woche 1-2',
    headline: 'Analyse & Strategie',
    description: [
      'Persönliches Online-Meeting mit Eduard',
      'TAM/SAM/SOM-Analyse deines Marktes',
      'Definition von ICP (Ideal Customer Profile) & Buyer Personas',
      'AI-gestützte Datenbank-Erstellung (DSG-konform)',
      'Kampagnen-Strategie & Messaging-Framework',
    ],
    result: 'Du weisst genau, wen du ansprechen willst und wie.',
  },
  {
    id: 2,
    name: 'SETUP',
    emoji: '⚙️',
    color: '#60A5FA',
    timeframe: 'Woche 2-3',
    headline: 'Infrastruktur',
    description: [
      'Domain & E-Mail Warmup (damit du nicht im Spam landest)',
      'Erstellung massgeschneiderter Landing Pages',
      'LinkedIn-Kampagnen vorbereiten',
      'Dashboard-Anbindung für Echtzeit-Einblicke',
      'E-Mail-Sequenzen & Templates erstellen',
    ],
    result: 'Alles ist bereit für den Start – ohne dass du etwas tun musstest.',
  },
  {
    id: 3,
    name: 'GO LIVE',
    emoji: '🚀',
    color: '#E6B500',
    timeframe: 'TAG 30',
    headline: 'Der Start',
    description: [
      'Alle Kanäle gehen live (E-Mail, LinkedIn, optional Ads)',
      'Automatisierungen starten den Outreach',
      'Monitoring wird aktiviert',
      'Erste Kontakte werden angesprochen',
    ],
    result: 'Dein Vertrieb arbeitet – 24/7, ohne Pause.',
  },
  {
    id: 4,
    name: 'QUALIFY',
    emoji: '⭐',
    color: '#C084FC',
    timeframe: 'Ab Woche 5',
    headline: 'Qualifizierung',
    description: [
      'Kontakte werden gesammelt und bewertet',
      'AI-Scoring: Hot / Warm / Cold',
      'Priorisierung nach Verkaufspotenzial',
      'Reporting & Analyse der Ergebnisse',
    ],
    result: 'Du bekommst nur qualifizierte Kontakte – keine Zeitverschwendung.',
  },
  {
    id: 5,
    name: 'OPTIMIZE',
    emoji: '∞',
    color: '#00CED1',
    timeframe: 'Laufend',
    headline: 'Laufende Betreuung',
    description: [
      'Kontinuierliche Kampagnen-Optimierung',
      'A/B-Testing von Messaging',
      'Regelmässiges Reporting & Insights',
      'Persönlicher Support durch das Team',
      'Anpassung an Marktveränderungen',
    ],
    result: 'Dein Vertrieb wird mit der Zeit immer besser.',
  },
]
