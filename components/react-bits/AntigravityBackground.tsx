'use client'

import { useEffect, useState } from 'react'
import Antigravity from './Antigravity'

interface AntigravityBackgroundProps {
  count?: number
  magnetRadius?: number
  ringRadius?: number
  waveSpeed?: number
  waveAmplitude?: number
  particleSize?: number
  lerpSpeed?: number
  color?: string
  autoAnimate?: boolean
  particleVariance?: number
  rotationSpeed?: number
  depthFactor?: number
  pulseSpeed?: number
  particleShape?: 'capsule' | 'sphere' | 'box' | 'tetrahedron'
  fieldStrength?: number
}

export function AntigravityBackground({
  count = 150,
  magnetRadius = 15,
  ringRadius = 12,
  waveSpeed = 0.4,
  waveAmplitude = 1,
  particleSize = 1.5,
  lerpSpeed = 0.1,
  color = '#FF9FFC',
  autoAnimate = true,
  particleVariance = 1,
  rotationSpeed = 0,
  depthFactor = 1,
  pulseSpeed = 3,
  particleShape = 'capsule',
  fieldStrength = 10
}: AntigravityBackgroundProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Don't render if user prefers reduced motion
  if (prefersReducedMotion) {
    return null
  }

  return (
    <div className="absolute inset-0 w-full h-full">
      <Antigravity
        count={count}
        magnetRadius={magnetRadius}
        ringRadius={ringRadius}
        waveSpeed={waveSpeed}
        waveAmplitude={waveAmplitude}
        particleSize={particleSize}
        lerpSpeed={lerpSpeed}
        color={color}
        autoAnimate={autoAnimate}
        particleVariance={particleVariance}
        rotationSpeed={rotationSpeed}
        depthFactor={depthFactor}
        pulseSpeed={pulseSpeed}
        particleShape={particleShape}
        fieldStrength={fieldStrength}
      />
    </div>
  )
}
