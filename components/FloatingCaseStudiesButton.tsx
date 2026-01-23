'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText } from 'lucide-react'

export function FloatingCaseStudiesButton() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 md:hidden"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Link href="/case-studies">
        <motion.div
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-accent-gold text-[#1a1025] font-semibold shadow-lg hover:scale-105 transition-transform"
          animate={{ y: [0, -8, 0] }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <FileText size={20} />
          <span className="text-sm">Case Studies</span>
        </motion.div>
      </Link>
    </motion.div>
  )
}
