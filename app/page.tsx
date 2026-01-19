import { Navbar } from '@/components/Navbar'
import { GradientMesh } from '@/components/ui/GradientMesh'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { CustomerJourney } from '@/components/CustomerJourney/CustomerJourney'
import { MultiChannel } from '@/components/sections/MultiChannel'
import { SocialProof } from '@/components/sections/SocialProof'
import { Comparison } from '@/components/sections/Comparison'
import { FAQ } from '@/components/sections/FAQ'
import { Packages } from '@/components/sections/Packages'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Animated background gradient */}
      <GradientMesh />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Problem Section - Pain Points */}
      <Problem />

      {/* Customer Journey - THE CENTERPIECE */}
      <CustomerJourney />

      {/* Multi-Channel Orchestration */}
      <MultiChannel />

      {/* Social Proof - Testimonials & Trust */}
      <SocialProof />

      {/* Comparison Table */}
      <Comparison />

      {/* FAQ Section */}
      <FAQ />

      {/* Packages & Pricing */}
      <Packages />

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-white/50 text-sm">
          <p>© 2026 Salesbrain | digitale rakete GmbH | Kilchberg/Zug, Schweiz</p>
          <p className="mt-2">100% DSG-konform · Made in Switzerland 🇨🇭</p>
        </div>
      </footer>
    </main>
  )
}
