import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
}

/**
 * Input Component - Typeform Style
 *
 * Features:
 * - Clean, minimal design
 * - Focus ring with purple accent
 * - Error states
 * - Optional label
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            `w-full px-4 py-3
             text-base text-foreground
             bg-white border border-gray-300 rounded-lg
             transition-all duration-[300ms] ease-out
             focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent
             disabled:opacity-50 disabled:cursor-not-allowed`,
            error && 'border-error focus:ring-error',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-error">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
