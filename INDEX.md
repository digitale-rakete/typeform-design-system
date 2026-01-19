# Design System - Dokumentations-Übersicht

> Vollständige Dokumentation des Typeform-inspirierten Design Systems

---

## 📚 Dokumentation

### 1. [README.md](./README.md)
**Hauptdokument - Start hier!**
- Vollständige Design System Übersicht
- Tech Stack Details
- Farbpalette & Typography
- UI Komponenten
- Animations
- Layout Patterns
- Responsive Design
- Best Practices

### 2. [QUICK-START.md](./QUICK-START.md)
**Schnellstart für neue Projekte**
- Installation Steps
- Component Usage
- Farben anpassen
- Responsive Patterns
- Common Issues & Fixes

### 3. [BEST-PRACTICES.md](./BEST-PRACTICES.md)
**Wichtige Erkenntnisse & Empfehlungen**
- B2B vs B2C Unterscheidung ⚠️
- Fragebogen-Design Principles
- Performance Optimization
- Accessibility
- Analytics & Tracking
- Privacy & DSGVO
- UX Patterns
- A/B Testing Ideas

### 4. [ANIMATION-PATTERNS.md](./ANIMATION-PATTERNS.md)
**Framer Motion Animation Library**
- Core Animation Principles
- Reusable Variants
- Stagger Animations
- Page Transitions
- Interactive Animations
- Scroll-Triggered Animations
- Performance Tips

---

## 📦 Code-Dateien

### Components

- **[components/Button.tsx](./components/Button.tsx)** - Button Component (3 Variants, 3 Sizes)
- **[components/Card.tsx](./components/Card.tsx)** - Card Component (Interactive)
- **[components/Input.tsx](./components/Input.tsx)** - Input Component (with Error States)

### Templates

- **[templates/layout.tsx](./templates/layout.tsx)** - Root Layout mit Font Setup
- **[templates/HeroSection.tsx](./templates/HeroSection.tsx)** - Hero Section Template
- **[templates/Navbar.tsx](./templates/Navbar.tsx)** - Fixed Navbar Template

### Styles

- **[globals.css](./globals.css)** - Design System Tokens & Global Styles

### Utilities

- **[lib/utils.ts](./lib/utils.ts)** - cn() Utility Function

### Config

- **[package.json](./package.json)** - Dependencies & Scripts

---

## 🎯 Workflow für neue App

1. **Planung**
   - Lies [BEST-PRACTICES.md](./BEST-PRACTICES.md) für wichtige Hinweise
   - Prüfe B2B/B2C Unterscheidung
   - Definiere Fragen & Flow

2. **Setup**
   - Folge [QUICK-START.md](./QUICK-START.md)
   - Installiere Dependencies
   - Kopiere Design System Files

3. **Anpassung**
   - Ändere Farben in [globals.css](./globals.css)
   - Passe Logo & Branding an
   - Customise Templates

4. **Development**
   - Nutze Components aus `components/`
   - Verwende Animation Patterns aus [ANIMATION-PATTERNS.md](./ANIMATION-PATTERNS.md)
   - Folge Layout Patterns aus [README.md](./README.md)

5. **Testing**
   - Mobile Testing
   - Accessibility Check
   - Performance Audit

---

## 🔍 Suche nach spezifischen Topics

### Farben ändern?
→ [QUICK-START.md](./QUICK-START.md#-farben-anpassen) + [globals.css](./globals.css)

### Animations hinzufügen?
→ [ANIMATION-PATTERNS.md](./ANIMATION-PATTERNS.md)

### B2B/B2C Fragebogen?
→ [BEST-PRACTICES.md](./BEST-PRACTICES.md#-fragebogen-design)

### Performance optimieren?
→ [BEST-PRACTICES.md](./BEST-PRACTICES.md#-performance)

### Accessibility verbessern?
→ [BEST-PRACTICES.md](./BEST-PRACTICES.md#-accessibility)

### Responsive Design?
→ [README.md](./README.md#-responsive-design)

### UI Komponenten?
→ [README.md](./README.md#-ui-komponenten) + `components/`

### Landing Page Structure?
→ [README.md](./README.md#-layout-structure) + `templates/`

---

## ⚠️ Wichtige Hinweise

### Für Sales & Marketing Apps

**IMMER nach B2B vs B2C fragen!** Das macht einen enormen Unterschied für:
- Lead-Qualifizierung
- Datenbeschaffung
- Verkaufsprozess
- Marketing-Strategie

Details: [BEST-PRACTICES.md#b2b-vs-b2c](./BEST-PRACTICES.md#b2b-vs-b2c-unterscheidung)

### Performance

- Lazy Load Components
- Optimize Images (Next.js Image)
- Font Display Swap
- Respect `prefers-reduced-motion`

Details: [BEST-PRACTICES.md#performance](./BEST-PRACTICES.md#-performance)

### Accessibility

- Keyboard Navigation
- ARIA Labels
- Focus States
- Error Handling

Details: [BEST-PRACTICES.md#accessibility](./BEST-PRACTICES.md#-accessibility)

---

## 📖 Externe Ressourcen

- **TailwindCSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Next.js:** https://nextjs.org/docs
- **Lucide Icons:** https://lucide.dev
- **React Hook Form:** https://react-hook-form.com
- **Zustand:** https://zustand-demo.pmnd.rs

---

## 📝 Version History

- **v1.0.0** (2025-11-26) - Initial Design System Documentation
  - Complete component library
  - Animation patterns
  - Best practices & recommendations
  - Quick start guide

---

## 💼 Credits

**Created by:** digitale rakete gmbh
**Based on:** Typeform's Design Principles
**License:** Internal Use

---

## 🚀 Quick Links

- 📖 [Vollständige Dokumentation](./README.md)
- ⚡ [Quick Start](./QUICK-START.md)
- 💡 [Best Practices](./BEST-PRACTICES.md)
- 🎬 [Animations](./ANIMATION-PATTERNS.md)

---

**Tipp:** Bookmark diese Datei für schnellen Zugriff auf alle Ressourcen!
