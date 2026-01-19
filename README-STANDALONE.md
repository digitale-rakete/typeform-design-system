# Typeform-Inspired Design System

> Ein eigenständiges, minimalistisches Design System für interaktive Web-Apps

## 🚀 Quick Start

### Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) in deinem Browser.

## 📦 Was ist enthalten?

### ✅ Fertige UI Komponenten

- **Button** - 3 Varianten (Primary, Secondary, Ghost) × 3 Größen (sm, md, lg)
- **Card** - Mit/ohne Interaktivität, verschiedene Padding-Optionen
- **Input** - Mit Error-States und Focus-Styles

### 🎨 Design Tokens

- **Farben**: Purple Accent Scale, Functional Colors, Dark Mode Support
- **Typography**: Playfair Display (Headlines) + Inter (Body)
- **Animations**: Framer Motion Presets (300ms ease-out)
- **Spacing**: Responsive Padding & Margins

### 📄 Templates & Patterns

Im `templates/` Ordner findest du fertige Sections:
- Hero Section
- Feature Highlights
- Navbar Pattern
- Layout Wrapper

### 📚 Dokumentation

- **README.md** - Vollständige Design System Dokumentation
- **QUICK-START.md** - Schnelleinstieg für neue Projekte
- **BEST-PRACTICES.md** - Code-Richtlinien und Patterns
- **ANIMATION-PATTERNS.md** - Framer Motion Recipes

## 🛠️ Tech Stack

```json
{
  "framework": "Next.js 16",
  "react": "19.2.0",
  "styling": "TailwindCSS 4.0",
  "animations": "Framer Motion 12.x",
  "icons": "Lucide React",
  "forms": "React Hook Form",
  "state": "Zustand"
}
```

## 📖 Verwendung in neuen Projekten

### Option 1: Als Referenz

Kopiere einzelne Komponenten aus dem `components/` Ordner in dein Projekt:

```bash
# Beispiel: Button kopieren
cp components/Button.tsx /path/to/your/project/components/
```

### Option 2: Als npm Package (lokal)

```bash
# In diesem Verzeichnis
npm link

# In deinem Projekt
npm link typeform-design-system

# Dann in deinem Code
import { Button } from 'typeform-design-system'
```

### Option 3: Direkter Fork

```bash
# Dieses Repo als Basis für dein neues Projekt nutzen
cp -r typeform-design-system/ my-new-project/
cd my-new-project
npm install
```

## 🎯 Beispiel-Code

### Button verwenden

```tsx
import { Button } from '@/components/Button'

export default function MyComponent() {
  return (
    <div>
      <Button variant="primary" size="lg" onClick={() => alert('Clicked!')}>
        Get Started
      </Button>
      <Button variant="secondary">Learn More</Button>
      <Button variant="ghost" size="sm">
        Cancel
      </Button>
    </div>
  )
}
```

### Card mit Animation

```tsx
'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/Card'

export default function MyComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card interactive padding="lg">
        <h3 className="text-2xl font-bold mb-4">Interactive Card</h3>
        <p className="text-gray-600">Hover mich an!</p>
      </Card>
    </motion.div>
  )
}
```

### Input mit Validation

```tsx
import { Input } from '@/components/Input'
import { useState } from 'react'

export default function MyForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const validate = (value: string) => {
    if (!value.includes('@')) {
      setError('Please enter a valid email')
    } else {
      setError('')
    }
  }

  return (
    <Input
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => {
        setEmail(e.target.value)
        validate(e.target.value)
      }}
      error={error}
    />
  )
}
```

## 🎨 Farben anpassen

Um die Akzentfarbe zu ändern, editiere `app/globals.css`:

```css
:root {
  /* Ändere Purple zu deiner Markenfarbe */
  --purple-600: #9333ea; /* Deine Primary Color */
  --purple-700: #7e22ce; /* Hover State */
  --purple-800: #6b21a8; /* Active State */
}
```

## 📱 Responsive Design

Alle Komponenten sind Mobile-First designed:

```tsx
<div className="text-base sm:text-lg md:text-xl lg:text-2xl">
  Responsive Text
</div>
```

### Breakpoints

```css
sm: 640px   /* Tablet */
md: 768px   /* Small Desktop */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large Desktop */
2xl: 1536px /* Extra Large */
```

## 🔧 Scripts

```bash
npm run dev       # Development Server (Port 3000)
npm run build     # Production Build
npm run start     # Production Server
npm run lint      # ESLint Check
```

## 📄 Projektstruktur

```
typeform-design-system/
├── app/
│   ├── globals.css          # Design Tokens & Tailwind
│   ├── layout.tsx            # Root Layout mit Fonts
│   └── page.tsx              # Demo Homepage
│
├── components/
│   ├── Button.tsx            # Button Component
│   ├── Card.tsx              # Card Component
│   └── Input.tsx             # Input Component
│
├── templates/
│   ├── HeroSection.tsx       # Landing Page Hero
│   ├── Navbar.tsx            # Navbar Pattern
│   └── layout.tsx            # Layout Wrapper
│
├── lib/
│   └── utils.ts              # cn() Utility
│
├── public/                   # Static Assets
│
└── docs/
    ├── README.md             # Vollständige Doku
    ├── QUICK-START.md        # Quick Start Guide
    ├── BEST-PRACTICES.md     # Best Practices
    └── ANIMATION-PATTERNS.md # Animation Recipes
```

## 🚢 Deployment

### Vercel (empfohlen)

```bash
npm install -g vercel
vercel
```

### Andere Plattformen

Das ist eine Standard Next.js App - funktioniert auf allen Plattformen:
- Vercel
- Netlify
- Railway
- AWS Amplify
- Digital Ocean App Platform

## 🤝 Support

Für Fragen und Support:
- 📧 Email: support@digitalerakete.de
- 📖 Docs: Siehe README.md und andere .md Files

## 📝 Lizenz

© 2025 digitale rakete gmbh - Interne Verwendung

---

**Happy Coding! 🚀**
