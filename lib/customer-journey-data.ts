export interface Phase {
  id: number
  name: string
  emoji: string
  lordIcons: {
    primary: string
    secondary?: string
  }
  color: string
  timeframe: string
  headline: string
  description: string[]
  result: string
  special?: string
}

export const phases: Phase[] = [
  {
    id: 1,
    name: 'RESEARCH',
    emoji: '🔍',
    lordIcons: {
      primary: 'msoeawqm', // Search/magnifier with data effect
      secondary: 'wxnxiano' // Target/bullseye
    },
    color: '#22C55E',
    timeframe: 'Woche 1-2',
    headline: 'Analyse & Strategie',
    description: [
      'Persönliches Online-Meeting mit Eduard',
      'TAM/SAM/SOM-Analyse deines Marktes',
      'Definition von ICP & Buyer Personas',
      'AI-gestützte Datenbank-Erstellung (DSG-konform)',
      'Kampagnen-Strategie & Messaging-Framework'
    ],
    result: 'Du weisst genau, wen du ansprechen willst und wie.'
  },
  {
    id: 2,
    name: 'SETUP',
    emoji: '⚙️',
    lordIcons: {
      primary: '978-project-management', // Project management icon
      secondary: 'zzcjjxew' // Tools/wrench
    },
    color: '#60A5FA',
    timeframe: 'Woche 2-3',
    headline: 'Infrastruktur',
    description: [
      'Domain & E-Mail Warmup',
      'Erstellung massgeschneiderter Landing Pages',
      'LinkedIn-Kampagnen vorbereiten',
      'Dashboard-Anbindung für Echtzeit-Einblicke',
      'E-Mail-Sequenzen & Templates erstellen'
    ],
    result: 'Alles ist bereit für den Start – ohne dass du etwas tun musstest.'
  },
  {
    id: 3,
    name: 'GO LIVE',
    emoji: '🚀',
    lordIcons: {
      primary: 'wloilxuq', // Rocket with launch animation (CRITICAL!)
      secondary: 'ofqpikiu' // Energy/sparkles expanding
    },
    color: '#E6B500',
    timeframe: 'TAG 30',
    headline: 'Der Start',
    description: [
      'Alle Kanäle gehen live (E-Mail, LinkedIn, optional Ads)',
      'Automatisierungen starten den Outreach',
      'Monitoring wird aktiviert',
      'Erste Kontakte werden angesprochen'
    ],
    result: 'Dein Vertrieb arbeitet – 24/7, ohne Pause.',
    special: 'launch'
  },
  {
    id: 4,
    name: 'QUALIFY',
    emoji: '✅',
    lordIcons: {
      primary: '760-review', // Review/rating icon
      secondary: 'lupuorrc' // Star/rating system
    },
    color: '#C084FC',
    timeframe: 'Ab Woche 5',
    headline: 'Qualifizierung',
    description: [
      'Kontakte werden gesammelt und bewertet',
      'AI-Scoring: Hot / Warm / Cold',
      'Priorisierung nach Verkaufspotenzial',
      'Reporting & Analyse der Ergebnisse'
    ],
    result: 'Du bekommst nur qualifizierte Kontakte – keine Zeitverschwendung.'
  },
  {
    id: 5,
    name: 'OPTIMIZE',
    emoji: '🔄',
    lordIcons: {
      primary: '683-female-customer-service', // Customer service/support icon
      secondary: 'zqikcdpp' // Team/people icons
    },
    color: '#00CED1',
    timeframe: '∞ Laufend',
    headline: 'Laufende Betreuung',
    description: [
      'Kontinuierliche Kampagnen-Optimierung',
      'A/B-Testing von Messaging',
      'Regelmässiges Reporting & Insights',
      'Persönlicher Support durch das Team',
      'Anpassung an Marktveränderungen'
    ],
    result: 'Dein Vertrieb wird mit der Zeit immer besser.',
    special: 'infinity'
  }
]

export interface Channel {
  name: string
  emoji: string
  lordIconId: string
  color: string
}

export const channels: Channel[] = [
  {
    name: 'E-Mail',
    emoji: '📧',
    lordIconId: '145-envelope-mail', // Email envelope icon
    color: '#6366F1'
  },
  {
    name: 'LinkedIn',
    emoji: '💼',
    lordIconId: '2677-logo-square-linkedin', // LinkedIn logo icon
    color: '#0A66C2'
  },
  {
    name: 'Landing Page',
    emoji: '🌐',
    lordIconId: 'zpxybbhl', // Browser/web (working)
    color: '#10B981'
  },
  {
    name: 'Ads',
    emoji: '📣',
    lordIconId: '1027-marketing-campaign', // Marketing campaign icon
    color: '#F59E0B'
  }
]
