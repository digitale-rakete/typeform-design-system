'use client'

import { motion } from 'framer-motion'
import { Button } from '../Button'
import { AntigravityBackground } from '../react-bits/AntigravityBackground'
import ShinyText from '../react-bits/ShinyText'
import { GradientMesh } from '../ui/GradientMesh'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 pt-20 pointer-events-none">
      {/* Desktop: Antigravity 3D Background */}
      <div className="hidden md:block absolute top-0 left-0 right-0 bottom-0 -z-10 max-h-screen overflow-hidden pointer-events-auto">
        <AntigravityBackground
          count={300}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#E6B500"
          autoAnimate={true}
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      {/* Mobile: Simple Gradient Background */}
      <div className="md:hidden absolute inset-0 -z-10">
        <GradientMesh />
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10 pointer-events-none">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center space-x-2 px-3 xs:px-4 sm:px-4 py-1.5 xs:py-2 sm:py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-xs xs:text-sm sm:text-sm text-white/80">
            Der einzige KI-Agent mit 20 Jahren Schweizer Vertriebserfahrung
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Dein Vertrieb.
          <br />
          <span className="block text-center">
            <ShinyText
              text="Auf Autopilot."
              speed={3}
              color="#FFFFFF"
              shineColor="#E6B500"
              spread={120}
              yoyo={true}
              delay={1}
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold"
            />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl text-white/70 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Aktiv in 3-4 Wochen. Verkauft 24/7. Keine IT-Kenntnisse nötig.
          <br />
          <span className="text-white/50">
            Entwickelt in der Schweiz, für die Schweiz.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="https://calendly.com/eduard-mirdita-digitalerakete/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              Demo buchen
            </Button>
          </a>

          <a href="/case-studies">
            <Button size="lg" variant="secondary">
              Case Studies
            </Button>
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-4 xs:gap-6 sm:gap-8 md:gap-8 text-xs xs:text-sm sm:text-sm text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span>Transparente Preise</span>
          <span>Setup in 3-4 Wochen</span>
          <span>Persönliche Beratung</span>
        </motion.div>
      </div>
    </section>
  )
}
