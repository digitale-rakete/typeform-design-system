'use client'

import { Player } from '@lordicon/react'
import { useEffect, useRef } from 'react'

interface LordIconProps {
  icon: string
  size?: number
  loop?: boolean
  colorize?: string
  delay?: number
}

export function LordIcon({
  icon,
  size = 96,
  loop = true,
  colorize,
  delay = 0
}: LordIconProps) {
  const playerRef = useRef<Player>(null)

  useEffect(() => {
    if (loop) {
      const startAnimation = () => {
        playerRef.current?.playFromBeginning()
      }

      const timer = setTimeout(startAnimation, delay)
      return () => clearTimeout(timer)
    }
  }, [loop, delay])

  const handleComplete = () => {
    if (loop) {
      setTimeout(() => {
        playerRef.current?.playFromBeginning()
      }, 1000)
    }
  }

  return (
    <Player
      ref={playerRef}
      icon={`https://cdn.lordicon.com/${icon}.json`}
      size={size}
      onComplete={handleComplete}
      colorize={colorize}
    />
  )
}
