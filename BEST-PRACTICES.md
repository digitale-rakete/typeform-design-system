# Best Practices & Design Decisions

> Wichtige Erkenntnisse und Empfehlungen für ähnliche Apps

---

## 🎯 Fragebogen-Design

### B2B vs B2C Unterscheidung

**WICHTIG:** Bei Sales- und Marketing-Fragebogen IMMER nach Business-Typ fragen!

#### Warum das wichtig ist:

**Im Sales-Bereich:**
- **Lead-Qualifizierung:** B2B-Leads brauchen andere Qualifizierungskriterien
- **Datenbeschaffung:** B2B benötigt Firmendaten, B2C persönliche Daten
- **Verkaufsprozess:** Längere Cycles bei B2B (3-12 Monate) vs. kurze bei B2C (Minuten-Stunden)
- **Preisgestaltung:** Unterschiedliche Preismodelle und Verhandlungsspielräume
- **Entscheidungsträger:** Einzelpersonen (B2C) vs. Buying Committees (B2B)

**Im Marketing-Bereich:**
- **Zielgruppenansprache:** Rationale (B2B) vs. emotionale (B2C) Messaging
- **Kanal-Auswahl:** LinkedIn/Trade Shows (B2B) vs. Instagram/TikTok (B2C)
- **Content-Strategie:** Whitepapers/Case Studies (B2B) vs. User-Generated-Content (B2C)
- **Metriken:** MQL/SQL (B2B) vs. Impressions/Engagement (B2C)

#### Implementierung:

```tsx
// Beispiel Frage früh im Flow
{
  id: 'business-type',
  type: 'single-select',
  question: 'Verkaufst du an Unternehmen oder Endkunden?',
  options: [
    {
      value: 'b2b',
      label: 'B2B (Business-to-Business)',
      description: 'Ich verkaufe an andere Unternehmen'
    },
    {
      value: 'b2c',
      label: 'B2C (Business-to-Consumer)',
      description: 'Ich verkaufe direkt an Endkunden'
    },
    {
      value: 'both',
      label: 'Beide',
      description: 'Ich verkaufe an B2B und B2C'
    }
  ],
  required: true
}
```

---

## 🎨 Design Principles

### 1. One Question at a Time (Typeform-Style)

**Vorteile:**
- Höhere Completion Rate (50-70% vs. 10-20% bei langen Forms)
- Weniger kognitiver Overload
- Mobil-freundlich
- Progressives Disclosure

**Implementierung:**
```tsx
// Nicht: Alle Fragen auf einer Seite
// Sondern: Eine Frage pro View

<WizardStep currentStep={currentStep}>
  <Question question={questions[currentStep]} />
  <Navigation onNext={handleNext} onPrev={handlePrev} />
</WizardStep>
```

### 2. Progressive Disclosure

**Prinzip:** Zeige nur relevante Fragen basierend auf vorherigen Antworten

```typescript
// Conditional Logic
if (answers['business-type'] === 'b2b') {
  // B2B-spezifische Fragen
  nextQuestion = 'company-size'
} else if (answers['business-type'] === 'b2c') {
  // B2C-spezifische Fragen
  nextQuestion = 'target-demographic'
}
```

### 3. Visual Hierarchy

**Typeform's Approach:**
1. **Frage** = Größte Element (Display Font, 2-3rem)
2. **Antwortoptionen** = Mittlere Größe (Sans-Serif, 1.25rem)
3. **Hilfstext** = Kleinste Größe (0.875rem, Gray-600)

```tsx
<div className="max-w-3xl mx-auto">
  {/* Frage */}
  <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8">
    {question.text}
  </h2>

  {/* Hilfstext */}
  {question.helpText && (
    <p className="text-sm text-gray-600 mb-8">
      {question.helpText}
    </p>
  )}

  {/* Antworten */}
  <div className="space-y-4">
    {question.options.map(option => (
      <AnswerCard key={option.value} option={option} />
    ))}
  </div>
</div>
```

---

## 🚀 Performance

### 1. Lazy Loading

```tsx
// Landing Page Sections lazy loaden
import dynamic from 'next/dynamic'

const PricingSection = dynamic(() => import('@/components/landing/PricingSection'))
const TestimonialsSection = dynamic(() => import('@/components/landing/TestimonialsSection'))
```

### 2. Image Optimization

```tsx
// Next.js Image Component nutzen
import Image from 'next/image'

<Image
  src="/hero-image.png"
  alt="Description"
  width={800}
  height={600}
  priority // für above-the-fold Bilder
  loading="lazy" // für below-the-fold Bilder
/>
```

### 3. Font Loading

```tsx
// Font Display Swap
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Verhindert FOIT (Flash of Invisible Text)
});
```

---

## ♿ Accessibility

### 1. Keyboard Navigation

```tsx
// Fokus-Management bei Navigation
useEffect(() => {
  // Fokussiere erste Option bei neuem Step
  if (inputRef.current) {
    inputRef.current.focus()
  }
}, [currentStep])
```

### 2. ARIA Labels

```tsx
<div role="group" aria-labelledby="question-heading">
  <h2 id="question-heading">{question.text}</h2>
  {/* Antwortoptionen */}
</div>
```

### 3. Error Handling

```tsx
<Input
  aria-invalid={!!error}
  aria-describedby={error ? "input-error" : undefined}
  error={error}
/>
{error && (
  <p id="input-error" role="alert" className="text-error">
    {error}
  </p>
)}
```

---

## 📊 Analytics & Tracking

### Wichtige Metriken

1. **Completion Rate:** % der User die den Fragebogen abschließen
2. **Drop-off Points:** Wo brechen User ab?
3. **Time per Question:** Durchschnittliche Zeit pro Frage
4. **Total Time:** Gesamtzeit für Fragebogen

### Implementierung

```tsx
// Track Step Changes
useEffect(() => {
  analytics.track('wizard_step_viewed', {
    step: currentStep,
    question_id: questions[currentStep].id,
    timestamp: new Date()
  })
}, [currentStep])

// Track Completion
const handleSubmit = () => {
  analytics.track('wizard_completed', {
    total_time: calculateTotalTime(),
    answers_count: Object.keys(answers).length,
    timestamp: new Date()
  })
}
```

---

## 🔒 Privacy & DSGVO

### 1. Datenminimierung

**Prinzip:** Nur notwendige Daten erheben

```tsx
// Nicht erforderlich für Basic Report
❌ Telefonnummer
❌ Adresse
❌ Geburtsdatum

// Notwendig für personalisierte Recommendations
✅ Email (optional, für Zusendung)
✅ Unternehmensbereich
✅ Unternehmensgröße
```

### 2. Transparenz

```tsx
<div className="text-sm text-gray-600 mt-8">
  <p>
    Deine Daten werden ausschließlich zur Erstellung deines
    persönlichen Reports verwendet und nicht an Dritte weitergegeben.
  </p>
  <Link href="/datenschutz" className="text-purple-600 underline">
    Mehr zum Datenschutz
  </Link>
</div>
```

---

## 💡 UX Patterns

### 1. Progress Indication

```tsx
// Zeige Fortschritt
<ProgressBar
  current={currentStep}
  total={totalSteps}
  showPercentage
/>
```

### 2. Save & Resume (Optional)

```tsx
// Speichere Zwischenstand im LocalStorage
useEffect(() => {
  localStorage.setItem('wizard_answers', JSON.stringify(answers))
}, [answers])

// Lade beim nächsten Besuch
useEffect(() => {
  const saved = localStorage.getItem('wizard_answers')
  if (saved) {
    setAnswers(JSON.parse(saved))
    // Frage ob User fortfahren möchte
  }
}, [])
```

### 3. Validation Feedback

```tsx
// Instant Validation (nicht bei jedem Keystroke)
const [error, setError] = useState('')

const validateInput = useDebouncedCallback((value) => {
  if (!value) {
    setError('Dieses Feld ist erforderlich')
  } else if (!isValid(value)) {
    setError('Bitte gib einen gültigen Wert ein')
  } else {
    setError('')
  }
}, 500)
```

---

## 🎨 Color Psychology

### Typeform's Purple

**Warum Lila?**
- **Kreativität:** Assoziiert mit Innovation
- **Vertrauen:** Nicht zu aggressiv wie Rot
- **Premium:** Luxus-Gefühl
- **Gender-neutral:** Funktioniert für alle Zielgruppen

### Alternative Farben

**Blau (#2563eb):** Vertrauen, Stabilität (Finance, Healthcare)
**Grün (#10b981):** Wachstum, Nachhaltigkeit (Eco, Wellness)
**Orange (#f97316):** Energie, Optimismus (Events, Community)
**Rot (#ef4444):** Dringlichkeit, Leidenschaft (Sales, Marketing)

---

## 📱 Mobile Optimization

### Touch Targets

```css
/* Minimum 44x44px für Touch Targets */
.answer-button {
  min-height: 44px;
  padding: 12px 20px;
}
```

### Viewport Units

```tsx
// Fullscreen auf Mobile
<section className="min-h-[100dvh] flex items-center">
  {/* dvh = dynamic viewport height, respektiert Mobile Browser UI */}
</section>
```

---

## 🧪 A/B Testing Ideas

### 1. CTA Text

- Variant A: "KI-Kompass starten"
- Variant B: "Jetzt kostenlos testen"
- Variant C: "Report erstellen"

### 2. Question Order

- Variant A: Allgemeine Fragen → Spezifische Fragen
- Variant B: Spezifische Fragen → Allgemeine Fragen

### 3. Progress Indicator

- Variant A: Prozent-basiert (25%)
- Variant B: Step-basiert (3 von 12)
- Variant C: Zeit-basiert (~ 2 Min verbleibend)

---

## 🚨 Common Pitfalls

### ❌ Zu viele Fragen

**Problem:** User brechen ab
**Lösung:** Limit auf 8-12 Kernfragen, Rest optional

### ❌ Unklare Fragen

**Problem:** User verstehen Frage nicht
**Lösung:** Nutze Hilfstext, Beispiele, Tooltips

### ❌ Zu lange Ladezeiten

**Problem:** User verlieren Geduld
**Lösung:** Optimize Images, Lazy Load, Server-Side Rendering

### ❌ Fehlende Mobile Optimization

**Problem:** 60%+ Traffic ist mobil
**Lösung:** Mobile-First Design, Test auf echten Geräten

---

**Last Updated:** 2025-11-26
**Version:** 1.0.0
