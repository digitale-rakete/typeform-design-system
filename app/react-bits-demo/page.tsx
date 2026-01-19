'use client'

import BlurText from '@/components/react-bits/BlurText'

export default function ReactBitsDemoPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            React Bits Demo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Beispiele der integrierten React Bits Komponenten
          </p>
        </div>

        {/* BlurText Examples */}
        <section className="space-y-8">
          <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              BlurText Animation
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Text mit Blur-In Effekt - scrolle nach unten um die Animation zu sehen
            </p>
          </div>

          {/* Example 1: Standard BlurText */}
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wide">
              Standard (Words)
            </h3>
            <BlurText
              text="Willkommen beim KI-Kompass - Dein Wegweiser für smarte Business-Entscheidungen"
              delay={100}
              className="text-3xl font-bold text-purple-600 dark:text-purple-400"
            />
          </div>

          {/* Example 2: Character by Character */}
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wide">
              Character by Character
            </h3>
            <BlurText
              text="Jeder Buchstabe einzeln animiert"
              delay={50}
              animateBy="characters"
              className="text-3xl font-bold text-gray-900 dark:text-white"
            />
          </div>

          {/* Example 3: From Bottom */}
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wide">
              From Bottom Direction
            </h3>
            <BlurText
              text="Diese Animation kommt von unten nach oben"
              delay={150}
              direction="bottom"
              className="text-3xl font-bold text-green-600 dark:text-green-400"
            />
          </div>

          {/* Example 4: Slower Animation */}
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wide">
              Slower Duration
            </h3>
            <BlurText
              text="Langsame und dramatische Animation"
              delay={200}
              stepDuration={0.8}
              className="text-3xl font-bold text-blue-600 dark:text-blue-400"
            />
          </div>
        </section>

        {/* Usage Instructions */}
        <section className="bg-purple-50 dark:bg-purple-950/20 p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold text-purple-900 dark:text-purple-100 mb-4">
            Verwendung
          </h2>
          <pre className="bg-white dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-gray-800 dark:text-gray-200">
{`import BlurText from '@/components/react-bits/BlurText'

<BlurText
  text="Dein Text hier"
  delay={100}              // Verzögerung zwischen Wörtern/Buchstaben (ms)
  animateBy="words"        // "words" oder "characters"
  direction="top"          // "top" oder "bottom"
  stepDuration={0.35}      // Dauer der Animation
  className="..."          // Tailwind Klassen
/>`}
            </code>
          </pre>
        </section>

        {/* More Components Coming */}
        <section className="text-center py-16 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Mehr Komponenten verfügbar
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            110+ weitere Komponenten in der React Bits Bibliothek:<br />
            Text Animationen · UI Komponenten · Backgrounds · Animationen
          </p>
          <a
            href="/REACT-BITS-INTEGRATION.md"
            className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
          >
            Dokumentation ansehen
          </a>
        </section>
      </div>
    </div>
  )
}
