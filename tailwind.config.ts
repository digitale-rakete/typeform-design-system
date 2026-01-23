import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './templates/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
      },
      colors: {
        // Backgrounds - Warm Violet/Aubergine
        background: 'var(--bg-primary)',
        foreground: 'var(--text-primary)',
        'bg-elevated': 'var(--bg-elevated)',
        'bg-hover': 'var(--bg-hover)',

        // Accents
        'accent-gold': 'var(--accent-gold)',
        'accent-cyan': 'var(--accent-cyan)',

        // Text
        'text-primary': 'var(--text-primary)',
        'text-muted': 'var(--text-muted)',

        // Semantic
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        warning: 'var(--color-warning)',
        info: 'var(--color-info)',

        // Phase Colors
        'phase-research': 'var(--phase-research)',
        'phase-setup': 'var(--phase-setup)',
        'phase-golive': 'var(--phase-golive)',
        'phase-qualify': 'var(--phase-qualify)',
        'phase-optimize': 'var(--phase-optimize)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'], // Inter for display headlines
      },
      borderColor: {
        DEFAULT: 'var(--border)',
        hover: 'var(--border-hover)',
      },
      animation: {
        'fade-in': 'fadeIn var(--duration-normal) var(--ease-out)',
        'slide-up': 'slideUp var(--duration-normal) var(--ease-out)',
        'shimmer': 'shimmer 2s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
