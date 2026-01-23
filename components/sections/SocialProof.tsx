'use client'

import { motion } from 'framer-motion'

const customerLogos = [
  {
    src: '/LOGO-COBAX-color.png',
    alt: 'COBAX',
    name: 'COBAX'
  },
  {
    src: '/AXA_Climate_Blue_Horizontal_RVB.png',
    alt: 'AXA',
    name: 'AXA'
  },
  {
    src: '/BNI_logo_Red-1.png',
    alt: 'BNI',
    name: 'BNI'
  },
  {
    src: '/GTP-Sekundaerlogo-Verlauf-scaled.png',
    alt: 'GTP',
    name: 'GTP'
  },
  {
    src: '/logo-1.png',
    alt: 'Frontscheibe.ch',
    name: 'Frontscheibe'
  },
  {
    src: '/treecycle-logo.svg',
    alt: 'TreeCycle',
    name: 'TreeCycle'
  }
]

const trustBadges = [
  'Transparente Preise',
  'Setup in 3-4 Wochen',
  'Persönliche Beratung',
]

export function SocialProof() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-3 xs:px-4 sm:px-4 py-1.5 xs:py-2 sm:py-2 rounded-full bg-success/10 border border-success/20 mb-6">
            <span className="text-xs xs:text-sm sm:text-sm text-success font-semibold">
              Vertrauenswürdig
            </span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
            Vertraut von führenden Unternehmen
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-lg text-white/60 max-w-3xl mx-auto">
            Partnering mit innovativen B2B-Unternehmen.
          </p>
        </motion.div>

        {/* Customer Logos Infinite Scroll */}
        <motion.div
          className="mb-20 overflow-hidden relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-16 md:gap-20 lg:gap-24"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate logos 2 times for seamless infinite scroll */}
            {[...customerLogos, ...customerLogos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0 w-[140px] md:w-[160px] h-[60px] md:h-[70px]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-[50px] md:max-h-[60px] w-auto max-w-[130px] md:max-w-[150px] object-contain transition-all duration-300"
                  style={{
                    filter: 'grayscale(100%) brightness(0) invert(1)',
                    opacity: 0.6
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.6'
                  }}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 xs:gap-6 sm:gap-8 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="text-xs xs:text-sm sm:text-base text-white/70 font-medium"
            >
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
