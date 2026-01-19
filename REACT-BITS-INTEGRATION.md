# React Bits Integration

> Direct access to 110+ animated React components from React Bits
> Repository: https://github.com/DavidHDev/react-bits

## Setup

Das React Bits Repository wurde als lokale Referenz geklont in `.react-bits-reference/`.

## Verfügbare Komponenten Kategorien

### 📝 Text Animations (25 Komponenten)
- **ASCIIText** - ASCII art text animations
- **BlurText** - Blur in/out effects
- **CircularText** - Text arranged in circles
- **CountUp** - Animated number counting
- **CurvedLoop** - Text following curved paths
- **DecryptedText** - Matrix-style decryption effect
- **FallingText** - Text falling animation
- **FuzzyText** - Fuzzy/glitch text effect
- **GlitchText** - Glitch effects
- **GradientText** - Animated gradient text
- **RotatingText** - Rotating text animations
- **ScrambledText** - Scramble and reveal text
- **ScrollFloat** - Text floating on scroll
- **ScrollReveal** - Reveal text on scroll
- **ScrollVelocity** - Velocity-based scroll animations
- **ShinyText** - Shiny/metallic text effect
- **Shuffle** - Text shuffling animation
- **SplitText** - Split and animate text
- **TextCursor** - Typing cursor effects
- **TextPressure** - Pressure-sensitive text
- **TextType** - Typewriter effect
- **TrueFocus** - Focus-based text animations
- **VariableProximity** - Proximity-based text effects

### 🧩 UI Components (35 Komponenten)
- **AnimatedList** - Animated list transitions
- **BounceCards** - Cards with bounce effect
- **BubbleMenu** - Bubble-style menu
- **CardNav** - Card-based navigation
- **CardSwap** - Card swapping animation
- **Carousel** - Image carousel
- **ChromaGrid** - Chromatic grid layout
- **CircularGallery** - Circular image gallery
- **Counter** - Animated counter
- **DecayCard** - Cards with decay effect
- **Dock** - macOS-style dock
- **DomeGallery** - Dome-shaped gallery
- **ElasticSlider** - Elastic slider component
- **FlowingMenu** - Flowing menu animation
- **FluidGlass** - Glassmorphism effects
- **FlyingPosters** - Flying poster animations
- **Folder** - Folder-style component
- **GlassIcons** - Glass-style icons
- **GlassSurface** - Glass surface effect
- **GooeyNav** - Gooey navigation effect
- **InfiniteMenu** - Infinite scrolling menu
- **Lanyard** - Lanyard-style component
- **MagicBento** - Bento grid layout
- **Masonry** - Masonry layout
- **ModelViewer** - 3D model viewer
- **PillNav** - Pill-style navigation
- **PixelCard** - Pixelated card effect
- **ProfileCard** - Profile card component
- **ReflectiveCard** - Reflective card effect
- **ScrollStack** - Stacked scroll animation
- **SpotlightCard** - Card with spotlight effect
- **Stack** - Stack component
- **StaggeredMenu** - Staggered menu animation
- **Stepper** - Step indicator component
- **TiltedCard** - 3D tilted card

### 🎬 Animations
- Verschiedene generische Animationen und Effekte

### 🖼️ Backgrounds
- Animierte Hintergründe und Effekte

## Wie verwende ich React Bits Komponenten?

### Methode 1: Manuelle Kopie (empfohlen für dieses Projekt)

1. **Komponente finden:**
   - Schaue in `.react-bits-reference/src/content/[Kategorie]/[Komponenten-Name]/`

2. **Code anzeigen:**
   - Jede Komponente hat mehrere Varianten:
     - `JS-CSS.jsx` - JavaScript with CSS
     - `JS-TW.jsx` - JavaScript with Tailwind
     - `TS-CSS.tsx` - TypeScript with CSS
     - `TS-TW.tsx` - TypeScript with Tailwind (✅ Nutze diese für unser Projekt)

3. **Dependencies prüfen:**
   - Schaue in die Komponenten-Datei für benötigte Dependencies
   - Installiere sie bei Bedarf: `npm install [dependency]`

4. **Code kopieren:**
   - Kopiere den Code aus der `TS-TW.tsx` Datei
   - Füge ihn in `components/react-bits/[KomponentenName].tsx` ein
   - Passe Imports und Styling nach Bedarf an

### Methode 2: CLI (Alternative)

```bash
# Installation via shadcn
npx shadcn@latest add @react-bits/[ComponentName]-TS-TW

# Beispiel:
npx shadcn@latest add @react-bits/BlurText-TS-TW
```

## Beispiel Integration

### 1. BlurText Komponente hinzufügen

```bash
# Datei: components/react-bits/BlurText.tsx
# Kopiert von: .react-bits-reference/src/content/TextAnimations/BlurText/TS-TW.tsx
```

### 2. Verwendung in deiner App

```tsx
import BlurText from '@/components/react-bits/BlurText'

export default function Page() {
  return (
    <BlurText
      text="Willkommen beim KI-Kompass"
      delay={100}
      duration={0.6}
    />
  )
}
```

## Dependencies Management

Häufig benötigte React Bits Dependencies:

```bash
# Animation Libraries
npm install framer-motion      # ✅ Bereits installiert

# Utility Libraries
npm install gsap              # Für GSAP-basierte Animationen (bei Bedarf)
```

## Best Practices

1. **TypeScript + Tailwind verwenden:** Nutze immer die `TS-TW.tsx` Variante für Konsistenz
2. **Komponenten anpassen:** Passe Farben an dein lila Design-Theme an
3. **Performance beachten:** Nicht zu viele animierte Komponenten auf einer Seite
4. **Mobile optimieren:** Teste Animationen auf Mobile Devices

## Troubleshooting

### Import Fehler
- Prüfe ob alle Dependencies installiert sind
- Passe Import-Pfade an deine Projektstruktur an

### Styling Konflikte
- Stelle sicher dass Tailwind korrekt konfiguriert ist
- Prüfe globale CSS für Konflikte

## Weitere Ressourcen

- **React Bits Dokumentation:** https://reactbits.dev
- **Installation Guide:** https://reactbits.dev/get-started/installation
- **Tools:** https://reactbits.dev/tools

---

**Status:** ✅ Setup abgeschlossen - Bereit zur Nutzung
