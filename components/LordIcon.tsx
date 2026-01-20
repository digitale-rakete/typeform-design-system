'use client'

import React, { useEffect, useRef } from 'react'

interface LordIconProps {
  icon: string
  size?: number
  loop?: boolean
  colorize?: string
  delay?: number
  speed?: number
}

export function LordIcon({
  icon,
  size = 96,
  loop = true,
  colorize,
  delay = 0,
  speed = 1
}: LordIconProps) {
  const iconRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Load lord-icon script if not already loaded
    if (typeof window !== 'undefined' && !window.customElements.get('lord-icon')) {
      const script = document.createElement('script')
      script.src = 'https://cdn.lordicon.com/lordicon.js'
      script.async = true
      document.body.appendChild(script)

      return () => {
        // Cleanup if needed
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      }
    }
  }, [])

  useEffect(() => {
    if (loop && iconRef.current && delay > 0) {
      const timer = setTimeout(() => {
        // Trigger animation after delay
        const lordIcon = iconRef.current as any
        if (lordIcon && typeof lordIcon.playFromBeginning === 'function') {
          lordIcon.playFromBeginning()
        }
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [loop, delay])

  if (!icon) {
    return null
  }

  const colors = colorize
    ? `primary:${colorize},secondary:${colorize}`
    : undefined

  // Use React.createElement to bypass JSX type checking for custom element
  return React.createElement('lord-icon', {
    ref: iconRef,
    src: `https://cdn.lordicon.com/${icon}.json`,
    trigger: loop ? 'loop' : 'hover',
    colors: colors,
    speed: speed,
    style: {
      width: `${size}px`,
      height: `${size}px`
    }
  })
}
