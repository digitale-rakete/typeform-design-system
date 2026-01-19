'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from './Button'

export function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
      style={{
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(26, 16, 37, 0.8)',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/salesbrain-logo.png"
              alt="Salesbrain Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-white">
              Salesbr
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-accent-cyan to-accent-gold">
                AI
              </span>
              n
            </span>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#journey"
              className="text-white/80 hover:text-white transition-colors"
            >
              Customer Journey
            </a>
            <a
              href="#multi-channel"
              className="text-white/80 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#packages"
              className="text-white/80 hover:text-white transition-colors"
            >
              Packages
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a href="https://cal.com/salesbrain/30min" target="_blank" rel="noopener noreferrer">
              <Button size="sm">
                Erstgespräch buchen
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Cyan accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-50" />
    </motion.nav>
  )
}
