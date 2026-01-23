'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '../Button'

export function DashboardShowcase() {
  return (
    <section className="relative py-3 xs:py-4 sm:py-6 md:py-8 px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 overflow-hidden">
      {/* Background Glow - BEHIND the image - Hidden on mobile for seamless transitions */}
      <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Outer Glow - Much subtler */}
        <div
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '70%',
            background: 'radial-gradient(ellipse 800px 400px, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
            filter: 'blur(120px)',
          }}
        />
        {/* Layer 2: Mid Glow - Very subtle purple hint */}
        <div
          className="absolute"
          style={{
            top: '55%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '65%',
            height: '60%',
            background: 'radial-gradient(ellipse 600px 300px, rgba(200, 190, 255, 0.06) 0%, rgba(180, 170, 255, 0.03) 40%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />
        {/* Layer 3: Inner Core - Minimal brightness */}
        <div
          className="absolute"
          style={{
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            height: '45%',
            background: 'radial-gradient(ellipse 450px 220px, rgba(255, 255, 255, 0.08) 0%, rgba(220, 210, 255, 0.05) 50%, transparent 80%)',
            filter: 'blur(70px)',
          }}
        />
      </div>

      {/* Headline Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="inline-flex items-center px-3 xs:px-4 sm:px-4 py-1.5 xs:py-2 sm:py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-6">
          <span className="text-xs xs:text-sm sm:text-sm text-accent-cyan font-semibold">
            Dashboard
          </span>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Ihr Vertriebserfolg visualisiert
        </h2>
      </motion.div>

      {/* Dashboard Image - Above the glow with floating animation */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/dashboard-hero.png"
            alt="Salesbrain Dashboard Interface"
            width={2400}
            height={1500}
            className="w-full h-auto"
            priority={true}
            quality={95}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          />
        </motion.div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a href="https://calendly.com/eduard-mirdita-digitalerakete/30min" target="_blank" rel="noopener noreferrer">
          <Button size="lg">Demo buchen</Button>
        </a>
      </motion.div>
    </section>
  )
}
