import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { FloatingCaseStudiesButton } from '@/components/FloatingCaseStudiesButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Salesbrain | Dein KI-Verkäufer',
  description: 'Aktiv in 30 Tagen. Verkauft 24/7. Der einzige KI-Agent mit 20 Jahren Schweizer Vertriebserfahrung.',
  keywords: ['Salesbrain', 'KI-Verkäufer', 'B2B-Vertrieb', 'AI Sales', 'Chancen-Generierung', 'Schweiz'],
  authors: [{ name: 'digitale rakete GmbH' }],
  openGraph: {
    title: 'Salesbrain | Dein KI-Verkäufer',
    description: 'Aktiv in 30 Tagen. Verkauft 24/7. Der einzige KI-Agent mit 20 Jahren Schweizer Vertriebserfahrung.',
    url: 'https://salesbrain.ch',
    siteName: 'Salesbrain',
    locale: 'de_CH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salesbrain | Dein KI-Verkäufer',
    description: 'Aktiv in 30 Tagen. Verkauft 24/7.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 0.5,
  maximumScale: 2,
  themeColor: '#1a1025',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <FloatingCaseStudiesButton />
      </body>
    </html>
  )
}
