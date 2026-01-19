import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

/**
 * Button Component - Salesbrain Dark Mode
 *
 * Variants:
 * - primary: Gold CTA button (main action)
 * - secondary: Outlined transparent button
 * - ghost: Text-only button
 *
 * Sizes:
 * - sm: Smaller padding
 * - md: Standard (default)
 * - lg: Larger padding
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center
      font-semibold rounded-lg
      transition-all duration-[300ms] ease-out
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1025]
      disabled:opacity-50 disabled:cursor-not-allowed
    `

    const variants = {
      primary: `
        bg-accent-gold text-[#1a1025]
        hover:bg-[#ffbf00] hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-gold/20
        active:scale-[0.98]
        focus-visible:ring-accent-gold
      `,
      secondary: `
        bg-transparent border-2 border-white/20 text-white
        hover:border-accent-gold hover:text-accent-gold hover:bg-accent-gold/5
        active:border-accent-gold/80 active:bg-accent-gold/10
        focus-visible:ring-accent-gold
      `,
      ghost: `
        bg-transparent text-white/80
        hover:text-white hover:bg-white/5
        active:bg-white/10
        focus-visible:ring-accent-cyan
      `,
    }

    const sizes = {
      sm: 'px-6 py-2.5 text-sm',
      md: 'px-8 py-4 text-base',
      lg: 'px-10 py-5 text-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
