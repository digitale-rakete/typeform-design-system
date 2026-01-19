'use client'

import { motion } from 'framer-motion'

/**
 * GradientMesh - Animated background gradient
 * Creates a subtle, moving gradient mesh with gold/cyan accents
 */
export function GradientMesh() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1025] via-[#1a1025] to-[#2a1f3d]" />

      {/* Animated gold glow - top right */}
      <motion.div
        className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #E6B500 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Animated cyan glow - bottom left */}
      <motion.div
        className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, #00CED1 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Purple accent - center */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #C084FC 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
