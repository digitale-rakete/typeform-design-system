# Quick Start Guide

> Schnellstart für eine neue App mit diesem Design System

---

## 🚀 Neue App erstellen

### 1. Next.js App initialisieren

```bash
npx create-next-app@latest my-app --typescript --tailwind --app
cd my-app
```

### 2. Dependencies installieren

```bash
npm install framer-motion lucide-react clsx tailwind-merge
npm install react-hook-form zustand @tanstack/react-query
npm install -D @tailwindcss/postcss tailwindcss@next
```

### 3. Design System kopieren

#### A) CSS & Config
- Copy `globals.css` → `app/globals.css`
- Copy `lib/utils.ts` → `lib/utils/cn.ts`

#### B) UI Components
- Copy `components/Button.tsx` → `components/ui/Button.tsx`
- Copy `components/Card.tsx` → `components/ui/Card.tsx`
- Copy `components/Input.tsx` → `components/ui/Input.tsx`

#### C) Layout Setup
- Copy `templates/layout.tsx` → `app/layout.tsx`
- Passe Metadata an (Title, Description, Icons)

#### D) Templates (Optional)
- Copy `templates/HeroSection.tsx` → `components/landing/HeroSection.tsx`
- Copy `templates/Navbar.tsx` → `components/layout/Navbar.tsx`

---

## 🎨 Farben anpassen

### 1. Öffne `app/globals.css`

### 2. Ändere die Primary Color

```css
/* Von Lila */
--purple-600: #9333ea;

/* Zu deiner Markenfarbe, z.B. Blau */
--primary-600: #2563eb;
```

### 3. Suche & Ersetze in allen Komponenten

```
bg-purple-600 → bg-primary-600
text-purple-600 → text-primary-600
border-purple-600 → border-primary-600
... etc
```

**Tipp:** Nutze VS Code's "Find & Replace" (`Ctrl+Shift+H`)

---

## 📦 Component Usage

### Button

```tsx
import { Button } from '@/components/ui/Button'

<Button variant="primary" size="lg">
  Click Me
</Button>
```

**Variants:** `primary` | `secondary` | `ghost`
**Sizes:** `sm` | `md` | `lg`

### Card

```tsx
import { Card } from '@/components/ui/Card'

<Card interactive padding="md">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

### Input

```tsx
import { Input } from '@/components/ui/Input'

<Input
  label="Your Name"
  placeholder="Enter your name"
  error="This field is required"
/>
```

---

## 🎬 Animations

### Basic Fade + Slide

```tsx
'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function MySection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants}>Title</motion.h1>
      <motion.p variants={itemVariants}>Text</motion.p>
    </motion.div>
  )
}
```

---

## 📱 Responsive Design

### Breakpoints

```
sm: 640px   (Tablet)
md: 768px   (Small Desktop)
lg: 1024px  (Desktop)
xl: 1280px  (Large Desktop)
```

### Mobile-First Approach

```tsx
<div className="text-xl sm:text-2xl lg:text-3xl">
  Responsive Text
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>
```

---

## 🛠️ Utility Functions

### cn() - Class Merge

```tsx
import { cn } from '@/lib/utils'

<div className={cn(
  'base-class',
  isActive && 'active-class',
  { 'optional-class': condition }
)}>
  Content
</div>
```

---

## 📐 Layout Pattern

### Standard Page Layout

```tsx
export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Content */}
        </section>
      </main>
      <Footer />
    </>
  )
}
```

---

## 🎯 Landing Page Sections

### Hero Section

```tsx
<section className="min-h-screen flex items-center justify-center
                    bg-gradient-to-b from-off-white to-white
                    px-4 py-24">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="font-display text-7xl font-bold mb-6">
      Your Headline
    </h1>
    <p className="text-2xl text-gray-600 mb-12">
      Your subheadline
    </p>
    <Button size="lg">Get Started</Button>
  </div>
</section>
```

### Features Grid

```tsx
<section className="py-24 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map(feature => (
        <Card key={feature.id} interactive padding="lg">
          <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </Card>
      ))}
    </div>
  </div>
</section>
```

---

## ⚙️ Wichtige Konfigurationen

### tsconfig.json

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Font Setup (app/layout.tsx)

```tsx
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});
```

---

## 🐛 Common Issues

### 1. Tailwind classes not working

**Problem:** Classes are not applied
**Solution:** Check if `@import "tailwindcss"` is in `globals.css`

### 2. Fonts not loading

**Problem:** Fonts showing default
**Solution:** Verify font variables in `app/layout.tsx` and `globals.css`

### 3. cn() function not found

**Problem:** Import error
**Solution:**
```bash
npm install clsx tailwind-merge
```

Then create `lib/utils/cn.ts` with the utility function

---

## 📚 Next Steps

1. ✅ Copy Design System files
2. ✅ Anpassen der Farben
3. ✅ Logo austauschen
4. ✅ Metadata anpassen
5. ✅ Erste Komponenten bauen
6. ✅ Landing Page erstellen

---

## 💡 Pro Tips

1. **Farben konsistent halten**: Nutze CSS Custom Properties
2. **Animations sparsam einsetzen**: Nicht zu viel bewegen
3. **Mobile-First denken**: Immer zuerst mobile testen
4. **Accessibility beachten**: Focus states, ARIA labels
5. **Performance**: Lazy load Bilder mit Next.js Image

---

**Need Help?** Check the full README.md for detailed documentation.
