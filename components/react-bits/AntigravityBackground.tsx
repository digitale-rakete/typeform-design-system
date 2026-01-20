'use client'

import { useEffect, useState, useRef } from 'react'
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
  const [canRender, setCanRender] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    // Clear any existing WebGL contexts before mounting
    if (containerRef.current) {
      const existingCanvas = containerRef.current.querySelector('canvas')
      if (existingCanvas) {
        const gl = existingCanvas.getContext('webgl') || existingCanvas.getContext('webgl2')
        if (gl) {
          const ext = gl.getExtension('WEBGL_lose_context')
          if (ext) {
            ext.loseContext()
          }
        }
      }
    }

    // Small delay to ensure context is fully released
    const timer = setTimeout(() => setCanRender(true), 100)

    return () => {
      clearTimeout(timer)
      setCanRender(false)
    }
  }, [])

  // Don't render if user prefers reduced motion
  if (prefersReducedMotion) {
    return null
  }

  // Don't render until context is ready
  if (!canRender) {
    return <div ref={containerRef} className="absolute inset-0 w-full h-full" />
  }

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
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
