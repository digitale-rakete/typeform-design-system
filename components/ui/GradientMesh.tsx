'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

/**
 * GradientMesh - Animated background gradient
 * Creates a subtle, moving gradient mesh with gold/cyan accents
 * Now with interactive Anti-Gravity parallax effect
 */
export function GradientMesh() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring physics for mouse movement
  const springConfig = { damping: 20, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      // Calculate position relative to center
      mouseX.set(e.clientX - innerWidth / 2)
      mouseY.set(e.clientY - innerHeight / 2)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // Parallax transforms - divded by factor to control speed (Inverse for "Anti-Gravity")
  const x1 = useTransform(x, (val) => val / -10)
  const y1 = useTransform(y, (val) => val / -10)

  const x2 = useTransform(x, (val) => val / 15)
  const y2 = useTransform(y, (val) => val / 15)

  const x3 = useTransform(x, (val) => val / -20)
  const y3 = useTransform(y, (val) => val / -20)

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
          x: x1,
          y: y1,
        }}
        animate={{
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
          x: x2,
          y: y2,
        }}
        animate={{
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
          x: x3,
          y: y3,
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
