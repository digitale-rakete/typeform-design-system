export interface Phase {
  id: number
  name: string
  lordIcons: {
    primary: string
    secondary?: string
  }
  color: string
  timeframe: string
  headline: string
  whatWeDo: string[]
  whyItMatters: string
  result: string
  special?: string
}

export const phases: Phase[] = [
  {
    id: 1,
    name: 'RESEARCH',
    lordIcons: {
      primary: 'msoeawqm', // Search/magnifier with data effect (WORKING)
      secondary: 'wxnxiano' // Target/bullseye
    },
    color: '#22C55E',
    timeframe: 'Woche 1-2',
    headline: 'Analyse & Strategie',
    whatWeDo: [
      'Marktanalyse: Wer sind deine idealen Kunden wirklich?',
      'TAM/SAM/SOM-Analyse',
      'Zielgruppen-Recherche: Gesamte Datenbasis erstellen',
      'KI-basierte Datenvalidierung',
      'Definition von Zielkunden & Buyer Personas',
      'Kampagnen-Strategie & Messaging'
    ],
    whyItMatters: 'Unternehmen, die ihre Zielkunden präzise definieren, schliessen bis zu 67% mehr Deals ab. Wir finden die 28%, die gerade aktiv nach einer Lösung suchen – nicht die 72%, die deine Zeit verschwenden.',
    result: 'Du weisst genau, wen du ansprechen willst und wie.'
  },
  {
    id: 2,
    name: 'SETUP',
    lordIcons: {
      primary: 'uukerzzv', // Settings gear (SIMPLE AND WORKS)
      secondary: 'zzcjjxew' // Tools/wrench
    },
    color: '#60A5FA',
    timeframe: 'Woche 2-3',
    headline: 'Infrastruktur',
    whatWeDo: [
      'Domain & E-Mail Warmup',
      'Massgeschneiderte Landing Pages',
      'LinkedIn-Kampagnen vorbereiten',
      'SalesbrAIn Dashboard einrichten',
      'E-Mail-Sequenzen & Templates'
    ],
    whyItMatters: 'Ohne korrektes Setup landen deine Emails im Spam. Mit professioneller Infrastruktur erreichst du Zustellraten über 95%. Wir kümmern uns um alles – du musst nichts tun.',
    result: 'Alles ist bereit für den Start – ohne dass du etwas tun musstest.'
  },
  {
    id: 3,
    name: 'GO LIVE',
    lordIcons: {
      primary: 'wloilxuq', // Rocket (VERIFIED WORKING)
      secondary: 'ofqpikiu' // Energy/sparkles expanding
    },
    color: '#E6B500',
    timeframe: 'Woche 3-4',
    headline: 'Der Start',
    whatWeDo: [
      'Alle Kanäle gehen live (E-Mail, LinkedIn, optional Ads)',
      'Automatisierungen starten',
      'Monitoring wird aktiviert',
      'Erste Kontakte werden angesprochen'
    ],
    whyItMatters: 'Multi-Channel-Kampagnen erreichen bis zu 287% höhere Abschlussraten als Einzelkanal-Ansätze. Email allein bringt 5% Antwortrate. Email + LinkedIn + Landing Page zusammen? Das ist eine andere Liga.',
    result: 'Dein Vertrieb arbeitet – 24/7, ohne Pause.',
    special: 'launch'
  },
  {
    id: 4,
    name: 'QUALIFY',
    lordIcons: {
      primary: 'egiwmiit', // Checkmark/verification (WORKING)
      secondary: 'lupuorrc' // Star/rating system
    },
    color: '#C084FC',
    timeframe: 'Ab Woche 5',
    headline: 'Qualifizierung',
    whatWeDo: [
      'Kontakte sammeln und bewerten',
      'AI-Scoring: Hot / Warm / Cold',
      'Priorisierung nach Verkaufspotenzial',
      'Reporting & Analyse'
    ],
    whyItMatters: 'Nicht jeder Kontakt ist kaufbereit. Unser AI-Scoring erkennt, wer jetzt Interesse hat – damit du deine Zeit nur mit echten Chancen verbringst, nicht mit Zeitverschwendern.',
    result: 'Du bekommst nur qualifizierte Kontakte – keine Zeitverschwendung.'
  },
  {
    id: 5,
    name: 'OPTIMIZE',
    lordIcons: {
      primary: 'yxyampao', // Lightning/Speed - Perfect for performance optimization (TESTED - EXISTS)
      secondary: 'sbrtyqxj' // Dashboard/Analytics (TESTED - EXISTS)
    },
    color: '#00CED1',
    timeframe: '∞ Laufend',
    headline: 'Laufende Betreuung',
    whatWeDo: [
      'Kontinuierliche Kampagnen-Optimierung',
      'A/B-Testing von Messaging & Betreffzeilen',
      'Regelmässiges Reporting & Insights',
      'Monatliches Online-Meeting',
      'Anpassung an Marktveränderungen'
    ],
    whyItMatters: 'Unternehmen mit kontinuierlichem A/B-Testing erreichen über 80% höheren ROI. Wir testen ständig, was funktioniert – dein Vertrieb wird jeden Monat besser.',
    result: 'Dein Vertrieb wird mit der Zeit immer besser.',
    special: 'infinity'
  }
]

export interface Channel {
  name: string
  lordIconId: string
  color: string
}

export const channels: Channel[] = [
  {
    name: 'E-Mail',
    lordIconId: 'rhvddzym', // Email envelope (WORKING)
    color: '#6366F1'
  },
  {
    name: 'LinkedIn',
    lordIconId: 'wxnxiano', // Target/professional (RELIABLE)
    color: '#0A66C2'
  },
  {
    name: 'Landing Page',
    lordIconId: 'zpxybbhl', // Browser/webpage (WORKING)
    color: '#10B981'
  },
  {
    name: 'Ads',
    lordIconId: 'kndkiwmf', // Megaphone (WORKING)
    color: '#F59E0B'
  }
]
