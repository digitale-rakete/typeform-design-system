'use client'

import { Card } from '@/components/Card'
import { StatCounter } from './StatCounter'

export interface ResultMetric {
  metric: string
  value: string
}

export interface CaseStudyCardProps {
  company: string
  logo?: string
  logoClassName?: string
  size?: string
  challenge: string
  solution: string
  results: ResultMetric[]
  highlight?: boolean
  compact?: boolean
  source?: string
}

// Helper function to parse numeric value from strings like "6.25x", "287%", "CHF 270'000"
function parseValue(value: string): number {
  // Remove all non-numeric characters except . and , and apostrophe
  const cleaned = value.replace(/[^\d.,'-]/g, '')
  // Replace comma with dot for decimal parsing
  const normalized = cleaned.replace(/[,']/g, '')
  const parsed = parseFloat(normalized)
  return isNaN(parsed) ? 0 : parsed
}

// Helper function to extract suffix from value string
function getSuffix(value: string): string {
  const match = value.match(/[%xX+]|M|Mio|Tage|h|Min/)
  return match ? match[0] : ''
}

// Helper function to extract prefix from value string
function getPrefix(value: string): string {
  if (value.startsWith('CHF')) return 'CHF '
  if (value.startsWith('+')) return '+'
  return ''
}

// Helper function to determine decimals based on value
function getDecimals(value: string): number {
  const numericPart = value.match(/\d+\.(\d+)/)
  return numericPart ? numericPart[1].length : 0
}

export function CaseStudyCard({
  company,
  logo,
  logoClassName,
  size,
  challenge,
  solution,
  results,
  highlight = false,
  compact = false,
  source
}: CaseStudyCardProps) {
  return (
    <Card
      padding={compact ? 'md' : 'lg'}
      className={`h-full ${highlight ? 'border-2 border-accent-cyan/40' : ''}`}
    >
      <div className={`space-y-${compact ? '4' : '6'}`}>
        {/* Logo + Header */}
        <div>
          {logo && (
            <div className="mb-4">
              <img
                src={logo}
                alt={`${company} logo`}
                className={logoClassName || "h-24 w-auto max-w-[280px] object-contain opacity-90"}
              />
            </div>
          )}
          <h3 className={`${compact ? 'text-xl' : 'text-2xl'} font-bold text-white mb-1`}>
            {company}
          </h3>
          {size && (
            <span className="inline-block px-2 py-1 text-xs font-semibold text-white/60 bg-white/5 rounded-md">
              {size}
            </span>
          )}
        </div>

        {/* Challenge */}
        <div>
          <h4 className="text-xs xs:text-sm font-semibold text-accent-gold mb-2">
            Herausforderung
          </h4>
          <p className={`text-white/70 ${compact ? 'text-xs' : 'text-sm'} leading-relaxed`}>
            {challenge}
          </p>
        </div>

        {/* Solution */}
        <div>
          <h4 className="text-xs xs:text-sm font-semibold text-accent-gold mb-2">
            Lösung
          </h4>
          <p className={`text-white/90 ${compact ? 'text-xs' : 'text-sm'} leading-relaxed`}>
            {solution}
          </p>
        </div>

        {/* Results */}
        <div className={`grid ${results.length === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'} gap-4 pt-4 border-t border-white/10`}>
          {results.map((result, index) => (
            <div key={index}>
              <div className={`${compact ? 'text-xl' : 'text-2xl'} font-bold text-accent-gold mb-1`}>
                <StatCounter
                  end={parseValue(result.value)}
                  prefix={getPrefix(result.value)}
                  suffix={getSuffix(result.value)}
                  decimals={getDecimals(result.value)}
                />
              </div>
              <p className="text-xs text-white/60 leading-tight">
                {result.metric}
              </p>
            </div>
          ))}
        </div>

        {/* Optional Source */}
        {source && (
          <div className="text-xs text-white/50 border-t border-white/5 pt-3">
            <span className="font-semibold">Quelle:</span> {source}
          </div>
        )}
      </div>
    </Card>
  )
}
