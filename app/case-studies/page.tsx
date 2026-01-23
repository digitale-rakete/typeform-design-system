import { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { GradientMesh } from '@/components/ui/GradientMesh'
import { CaseStudiesHero } from '@/components/case-studies/CaseStudiesHero'
import { MethodologySection } from '@/components/case-studies/MethodologySection'
import { EnterpriseCases } from '@/components/case-studies/EnterpriseCases'
import { SMBCases } from '@/components/case-studies/SMBCases'
import { ScienceSection } from '@/components/case-studies/ScienceSection'
import { BenefitsSection } from '@/components/case-studies/BenefitsSection'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Case Studies | Salesbrain - Enterprise-Methoden für KMU',
  description: 'Bewiesene Resultate von Enterprise bis KMU. Multi-Channel Orchestrierung mit 287% höheren Conversions. Verifizierte Daten aus 10\'000+ analysierten Kampagnen.',
  keywords: [
    'Case Studies',
    'Erfolgsgeschichten',
    'B2B Marketing',
    'Multi-Channel',
    'Salesbrain',
    'Schweiz',
    'KMU',
    'Lead Generation',
    'Sales Automation'
  ],
  openGraph: {
    title: 'Case Studies - Bewiesene Resultate | Salesbrain',
    description: 'Enterprise-Methoden. KMU-Preise. Bewiesene Resultate. Die Strategien von Zoom, SAP und Snowflake für Schweizer KMUs.',
    url: 'https://salesbrain.ch/case-studies',
    type: 'website',
    locale: 'de_CH',
    siteName: 'Salesbrain'
  },
  alternates: {
    canonical: 'https://salesbrain.ch/case-studies'
  }
}

export default function CaseStudiesPage() {
  return (
    <main className="relative min-h-screen bg-bg-primary">
      <GradientMesh />
      <Navbar />

      <CaseStudiesHero />
      <MethodologySection />
      <EnterpriseCases />
      <SMBCases />
      <ScienceSection />
      <BenefitsSection />
      <FinalCTA />

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-white/50 text-sm">
          <p>© 2026 Salesbrain | digitale rakete GmbH | Kilchberg/Zug, Schweiz</p>
          <p className="mt-2">Made in Switzerland</p>
        </div>
      </footer>
    </main>
  )
}
