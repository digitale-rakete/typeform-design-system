# React Bits Components

> Dieser Ordner enthält React Bits Komponenten aus der lokalen Referenz

## Quick Start

### Komponente hinzufügen

1. **Finde die Komponente in der Referenz:**
   ```
   .react-bits-reference/src/content/[Kategorie]/[KomponentenName]/TS-TW.tsx
   ```

2. **Kopiere den Code hierher:**
   ```
   components/react-bits/[KomponentenName].tsx
   ```

3. **Passe Imports an:**
   - Stelle sicher, dass alle Imports korrekt sind
   - Füge fehlende Dependencies hinzu

## Beispiele

### Text Animations

```tsx
// BlurText
import BlurText from '@/components/react-bits/BlurText'

<BlurText
  text="Dein Text hier"
  delay={100}
  duration={0.6}
/>
```

### UI Components

```tsx
// SpotlightCard
import SpotlightCard from '@/components/react-bits/SpotlightCard'

<SpotlightCard>
  <h3>Card Title</h3>
  <p>Card content</p>
</SpotlightCard>
```

## Styling Anpassungen

Alle Komponenten nutzen Tailwind CSS und können einfach angepasst werden:

```tsx
// Beispiel: Purple Theme anpassen
<BlurText
  text="Text"
  className="text-purple-600"  // Unsere Accent Color
/>
```

## Tipps

- Nutze immer die TypeScript + Tailwind Version (`TS-TW.tsx`)
- Teste Animationen auf Performance (besonders Mobile)
- Passe Farben an unser lila Design-Theme an
- Beachte prefers-reduced-motion für Accessibility

## Referenz

Alle Komponenten sind dokumentiert auf: https://reactbits.dev
