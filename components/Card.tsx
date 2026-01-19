import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

/**
 * Card Component - Salesbrain Dark Mode
 *
 * Features:
 * - Dark violet elevated background
 * - Subtle border with glassmorphism effect
 * - Smooth hover animations (if interactive)
 * - Responsive padding
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, interactive = false, padding = 'md', children, ...props }, ref) => {
    const baseStyles = `
      bg-bg-elevated border border-white/10 rounded-2xl
      shadow-lg shadow-black/20
      transition-all duration-[300ms] ease-out
      backdrop-blur-sm
    `

    const interactiveStyles = interactive
      ? `
        cursor-pointer
        hover:border-accent-gold/50 hover:shadow-2xl hover:shadow-accent-gold/10 hover:-translate-y-1
      `
      : ''

    const paddingSizes = {
      sm: 'p-4',
      md: 'p-6 lg:p-8',
      lg: 'p-8 lg:p-10',
    }

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          interactiveStyles,
          paddingSizes[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
