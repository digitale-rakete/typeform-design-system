# 🚀 START HIER

## Willkommen zum Typeform Design System!

### 📝 Was ist das?

Dies ist ein vollständig eigenständiges Next.js Projekt mit einem kompletten Design System, inspiriert von Typeform's minimalistischem Design.

### ⚡ Schnellstart (3 Schritte)

#### 1. Dependencies installieren

```bash
npm install
```

#### 2. Development Server starten

```bash
npm run dev
```

#### 3. Browser öffnen

Öffne: [http://localhost:3000](http://localhost:3000)

Du siehst jetzt eine Demo-Seite mit allen Komponenten! 🎉

---

## 📚 Nächste Schritte

### Option A: Demo anschauen

Der Development Server zeigt dir eine interaktive Demo mit:
- ✅ Button Varianten
- ✅ Interactive Cards
- ✅ Input Components
- ✅ Smooth Animations
- ✅ Responsive Layout

### Option B: Eigenes Projekt starten

1. **Bearbeite `app/page.tsx`** - Das ist deine Hauptseite
2. **Nutze die Komponenten** aus dem `components/` Ordner
3. **Kopiere Templates** aus `templates/` für Landing Page Sections

### Option C: Als Komponenten-Bibliothek nutzen

Kopiere einzelne Komponenten in dein existierendes Projekt:

```bash
# Button kopieren
cp components/Button.tsx /path/to/your/project/components/

# Card kopieren
cp components/Card.tsx /path/to/your/project/components/

# Utils kopieren (wichtig für cn() function)
cp lib/utils.ts /path/to/your/project/lib/
```

---

## 📖 Dokumentation

Alle wichtigen Infos findest du hier:

1. **README.md** - Vollständige Design System Dokumentation
   - Farbpalette
   - Typography
   - Alle Komponenten erklärt
   - Animation Patterns

2. **QUICK-START.md** - Schnelleinstieg für neue Projekte

3. **BEST-PRACTICES.md** - Code-Richtlinien

4. **ANIMATION-PATTERNS.md** - Framer Motion Recipes

5. **README-STANDALONE.md** - Diese eigenständige Version nutzen

---

## 🎨 Farben anpassen

Öffne `app/globals.css` und ändere die Farben:

```css
:root {
  --purple-600: #9333ea; /* ← Deine Primary Color */
  --purple-700: #7e22ce; /* ← Hover State */
}
```

Speichern → Browser aktualisiert automatisch! ✨

---

## 🆘 Probleme?

### "npm: command not found"

Node.js ist nicht installiert:
→ Download: https://nodejs.org/

### Port 3000 schon belegt

Anderer Development Server läuft noch:

```bash
# Anderen Port nutzen
npm run dev -- -p 3001
```

### Andere Fehler

1. Lösche `node_modules/` und `.next/`
2. Installiere neu: `npm install`
3. Starte neu: `npm run dev`

---

## 💡 Tipps

- **Hot Reload**: Speichere Dateien → Browser aktualisiert automatisch
- **Komponenten**: Alle in `components/` - einfach importieren
- **Styling**: TailwindCSS - keine extra CSS-Dateien nötig
- **Icons**: Lucide React - [Alle Icons hier](https://lucide.dev)

---

## 📧 Support

**Email:** support@digitalerakete.de

---

**Viel Erfolg! 🎉**
