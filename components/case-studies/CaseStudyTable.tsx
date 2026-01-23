'use client'

import { Card } from '@/components/Card'

export interface CaseStudyTableProps {
  headers: string[]
  rows: Record<string, string | number>[]
  highlightColumn?: number
  variant?: 'enterprise' | 'smb' | 'science' | 'pricing'
}

export function CaseStudyTable({
  headers,
  rows,
  highlightColumn,
  variant = 'enterprise'
}: CaseStudyTableProps) {
  // Get variant-specific styling
  const getVariantStyles = () => {
    switch (variant) {
      case 'enterprise':
        return 'border-accent-gold/20'
      case 'smb':
        return 'border-accent-cyan/20'
      case 'science':
        return 'border-white/20'
      case 'pricing':
        return 'border-accent-gold/30'
      default:
        return 'border-white/10'
    }
  }

  return (
    <>
      {/* Desktop Table (lg and above) */}
      <div className="hidden lg:block">
        <div className={`bg-bg-elevated border ${getVariantStyles()} rounded-2xl overflow-hidden`}>
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                {headers.map((header, i) => (
                  <th
                    key={i}
                    className={`p-4 text-left text-sm font-semibold ${
                      i === highlightColumn ? 'text-accent-gold' : 'text-white/70'
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors"
                >
                  {headers.map((header, colIndex) => (
                    <td
                      key={colIndex}
                      className={`p-4 text-sm ${
                        colIndex === 0
                          ? 'font-semibold text-white'
                          : colIndex === highlightColumn
                          ? 'text-accent-gold font-semibold'
                          : 'text-white/80'
                      }`}
                    >
                      {row[header]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards (below lg) */}
      <div className="lg:hidden space-y-4">
        {rows.map((row, rowIndex) => (
          <Card key={rowIndex} padding="md">
            <div className="space-y-3">
              {headers.map((header, colIndex) => (
                <div
                  key={colIndex}
                  className="flex justify-between items-start py-2 border-b border-white/10 last:border-0"
                >
                  <span className="text-white/70 text-sm font-medium flex-shrink-0 pr-4">
                    {header}
                  </span>
                  <span
                    className={`text-sm text-right ${
                      colIndex === 0
                        ? 'font-semibold text-white'
                        : colIndex === highlightColumn
                        ? 'text-accent-gold font-semibold'
                        : 'text-white font-medium'
                    }`}
                  >
                    {row[header]}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}
