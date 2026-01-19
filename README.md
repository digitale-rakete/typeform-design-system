# Typeform-Inspired Design System

> **Vollständige Dokumentation des KI-Kompass Design Systems**
> Erstellt: 2025-11-26
> Version: 1.0.0

---

## 📋 Übersicht

Dieses Design System ist inspiriert von **Typeform's minimalistischem, benutzerfreundlichem Design** und wurde für interaktive Fragebogen-Apps und Landing Pages entwickelt.

### Kernprinzipien

- **Minimalismus**: Klares, aufgeräumtes Design ohne Ablenkungen
- **Smooth Animations**: 300ms ease-out Transitions für ein flüssiges Erlebnis
- **Typography-First**: Große, lesbare Schriften mit Serif-Display-Font
- **Purple Accent**: Auffällige lila Akzentfarbe für CTAs
- **Mobile-First**: Responsive Design für alle Bildschirmgrößen

---

## 🎨 Tech Stack

### Core Framework
```json
{
  "framework": "Next.js 16",
  "react": "19.2.0",
  "typescript": "5.x"
}
```

### Styling & UI
```json
{
  "css": "TailwindCSS 4.0",
  "animations": "Framer Motion 12.x",
  "icons": "Lucide React 0.554",
  "utilities": "clsx + tailwind-merge"
}
```

### Forms & State
```json
{
  "forms": "React Hook Form 7.x",
  "state": "Zustand 5.x"
}
```

---

## 🎭 Farbpalette

### Primary Colors

```css
:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --off-white: #f9f9f9;
}
```

### Purple Accent Scale

```css
--purple-400: #c084fc;  /* Lighter */
--purple-500: #a855f7;
--purple-600: #9333ea;  /* Primary CTA */
--purple-700: #7e22ce;  /* Hover */
--purple-800: #6b21a8;  /* Active */
```

### Functional Colors

```css
--success: #10b981;   /* Green */
--error: #ef4444;     /* Red */
--warning: #f59e0b;   /* Orange */
--info: #3b82f6;      /* Blue */
```

### Dark Mode

```css
@media (prefers-color-scheme: dark) {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

---

## ✍️ Typography

### Font Stack

**Display Font (Headlines):**
```typescript
Playfair Display (Google Fonts)
font-family: var(--font-playfair)
```

**Body Font (UI & Text):**
```typescript
Inter (Google Fonts)
font-family: var(--font-inter)
```

### Font Sizes (Responsive)

```css
/* Headlines */
h1: text-5xl sm:text-6xl lg:text-7xl
h2: text-4xl sm:text-5xl lg:text-6xl
h3: text-3xl sm:text-4xl lg:text-5xl

/* Body Text */
Large: text-xl sm:text-2xl
Medium: text-base sm:text-lg
Small: text-sm
```

---

## 🧩 UI Komponenten

### Button Component

**3 Variants:**

1. **Primary** - Purple CTA Button
   ```tsx
   <Button variant="primary">Click Me</Button>
   ```
   - Background: `bg-purple-600`
   - Hover: `hover:bg-purple-700 hover:scale-[1.02]`
   - Active: `active:bg-purple-800 active:scale-[0.98]`

2. **Secondary** - Outlined Button
   ```tsx
   <Button variant="secondary">Learn More</Button>
   ```
   - Border: `border-2 border-gray-300`
   - Hover: `hover:border-purple-600 hover:text-purple-600`

3. **Ghost** - Transparent Button
   ```tsx
   <Button variant="ghost">Cancel</Button>
   ```
   - Background: `bg-transparent`
   - Hover: `hover:text-purple-600 hover:bg-purple-50`

**3 Sizes:**
- `sm`: `px-6 py-2 text-sm`
- `md`: `px-8 py-4 text-base` (default)
- `lg`: `px-10 py-5 text-lg`

### Card Component

**Features:**
- Clean white background
- Subtle border and shadow
- Smooth hover animations (if interactive)
- Responsive padding

```tsx
<Card interactive padding="md">
  Content here
</Card>
```

**Props:**
- `interactive?: boolean` - Adds hover lift effect
- `padding?: 'sm' | 'md' | 'lg'`

**Styles:**
```css
Base: bg-white border border-gray-200 rounded-2xl shadow-sm
Interactive: hover:border-purple-300 hover:shadow-xl hover:-translate-y-1
```

### Input Component

```tsx
<Input
  placeholder="Enter your name"
  error="This field is required"
/>
```

**Features:**
- Focus ring with purple accent
- Error states
- Smooth transitions

---

## 🎬 Animations

### Framer Motion Settings

**Container Variants (for lists):**
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}
```

**Item Variants (fade + slide up):**
```typescript
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94], // ease-out
    },
  },
}
```

**Usage:**
```tsx
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  <motion.h1 variants={itemVariants}>Headline</motion.h1>
  <motion.p variants={itemVariants}>Text</motion.p>
</motion.div>
```

### Transition Timings

```css
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;

--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

---

## 📐 Layout Structure

### Landing Page Sections

1. **Hero Section**
   - Full viewport height
   - Centered content
   - Large display font headline
   - Dual CTAs (primary + secondary)
   - Trust badges

2. **Problem/Solution Section**
   - 4 challenge cards in grid
   - Icons + descriptions

3. **How It Works Section**
   - 3-step process
   - Numbered timeline

4. **Feature Highlights**
   - 6 benefit cards
   - Grid layout (2x3 on desktop)

5. **Pricing Section**
   - 3 pricing tiers
   - Card-based layout

6. **Final CTA Section**
   - Purple gradient background
   - Strong call-to-action

### Navbar (Fixed)

```tsx
<nav className="fixed top-0 left-0 right-0 z-50
                bg-white/80 backdrop-blur-md
                border-b border-gray-200/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Logo + Buttons */}
  </div>
</nav>
```

### Footer

- Company branding
- Contact info
- Legal links (Impressum, Datenschutz, AGB)

---

## 📱 Responsive Design

### Breakpoints (TailwindCSS)

```css
sm: 640px   /* Tablet */
md: 768px   /* Small Desktop */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large Desktop */
2xl: 1536px /* Extra Large */
```

### Mobile-First Approach

```tsx
{/* Mobile: Full width, Desktop: Max width */}
<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

---

## 🛠️ Utilities

### cn() Function

Merges Tailwind classes with conflict resolution:

```typescript
import { cn } from '@/lib/utils'

cn('px-4 py-2', condition && 'bg-blue-500', { 'text-white': isActive })
```

**Implementation:**
```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## 📦 Component Examples

### Hero Section Pattern

```tsx
<section className="relative min-h-screen flex items-center justify-center
                    bg-gradient-to-b from-off-white to-white
                    px-4 py-24 pt-32 lg:py-32 lg:pt-40">
  {/* Background Decoration */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 right-1/4 w-96 h-96
                    bg-purple-100 rounded-full blur-3xl opacity-20" />
  </div>

  {/* Content */}
  <motion.div variants={containerVariants} initial="hidden" animate="visible">
    <motion.h1 variants={itemVariants}
               className="font-display text-5xl sm:text-6xl lg:text-7xl">
      Your Headline
    </motion.h1>
  </motion.div>
</section>
```

### Trust Badge Pattern

```tsx
<span className="inline-flex items-center gap-2
                 px-5 py-3
                 bg-gradient-to-r from-green-50 to-purple-50
                 text-green-800 rounded-full text-base font-bold
                 border-2 border-green-400 shadow-lg">
  <CheckIcon />
  100% KOSTENLOS · Keine Anmeldung
</span>
```

---

## 🎯 Best Practices

### 1. Accessibility

```css
/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 2. Focus States

All interactive elements have purple focus rings:
```css
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-offset-2
focus-visible:ring-purple-600
```

### 3. Smooth Scrolling

```css
html {
  scroll-behavior: smooth;
}
```

### 4. Button Hover Patterns

```css
/* Scale on hover, scale down on active */
hover:scale-[1.02]
active:scale-[0.98]
transition-all duration-[300ms] ease-out
```

---

## ⚠️ Wichtige Hinweise

### B2B vs B2C Unterscheidung

**Für Fragebogen-Apps sollte IMMER gefragt werden:**
- Im **Sales-Bereich**: B2B vs B2C macht großen Unterschied für:
  - Lead-Generierung
  - Datenbeschaffung
  - Verkaufsprozess
  - Preisgestaltung

- Im **Marketing-Bereich**: Ebenfalls wichtig für:
  - Zielgruppenansprache
  - Kanal-Auswahl
  - Content-Strategie

**Empfehlung:** Früh im Fragebogen nach Business-Typ fragen!

---

## 📚 Dateistruktur

```
ki-kompass-app/
├── app/
│   ├── globals.css          # Design System Tokens
│   ├── layout.tsx            # Root Layout mit Fonts
│   └── page.tsx              # Landing Page
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx        # Button Component
│   │   ├── Card.tsx          # Card Component
│   │   └── Input.tsx         # Input Component
│   │
│   ├── landing/
│   │   ├── HeroSection.tsx
│   │   ├── ProblemSolutionSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── FeatureHighlightsSection.tsx
│   │   ├── PricingSection.tsx
│   │   └── FinalCTASection.tsx
│   │
│   └── layout/
│       ├── Navbar.tsx
│       └── Footer.tsx
│
└── lib/
    └── utils/
        ├── cn.ts             # Class merge utility
        └── index.ts
```

---

## 🚀 Quick Start für neue App

### 1. Installation

```bash
npx create-next-app@latest my-app --typescript --tailwind --app
cd my-app
npm install framer-motion lucide-react clsx tailwind-merge
npm install react-hook-form zustand
```

### 2. TailwindCSS 4 Setup

```bash
npm install -D @tailwindcss/postcss tailwindcss@next
```

### 3. Copy Design System

- Copy `app/globals.css`
- Copy `components/ui/*`
- Copy `lib/utils/*`
- Copy `app/layout.tsx` (Font setup)

### 4. Anpassen

- Farben anpassen (lila → deine Markenfarbe)
- Logo austauschen
- Texte anpassen

---

## 📖 Weitere Ressourcen

- **TailwindCSS Docs**: https://tailwindcss.com/docs
- **Framer Motion Docs**: https://www.framer.com/motion/
- **Next.js Docs**: https://nextjs.org/docs
- **Lucide Icons**: https://lucide.dev

---

**Erstellt von:** digitale rakete gmbh
**Lizenz:** Interne Verwendung
**Version:** 1.0.0