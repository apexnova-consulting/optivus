"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BRAND, STATS } from "@/lib/constants"

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-700 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb33,#06b6d433)] mix-blend-multiply" />
        <div className="absolute right-0 top-0 -mt-96 -mr-96 w-[800px] h-[800px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute left-0 bottom-0 -mb-96 -ml-96 w-[800px] h-[800px] rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8">
            {BRAND.TAGLINE}
          </h1>
          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-blue-100 mb-12">
            Turn software spend into measurable business results. Optivus tracks adoption, measures communication, and proves ROI — in 30 days or less.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-20">
            <Link href="/contact">
              <Button size="lg" variant="default" className="w-full sm:w-auto text-lg">
                {BRAND.PRIMARY_CTA}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/product">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg border-2 border-white text-white hover:bg-white/10">
                Explore Features
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Avg ROI", value: STATS.AVG_ROI },
              { label: "Time to Value", value: STATS.TIME_TO_VALUE },
              { label: "Avg Adoption Rate", value: STATS.ADOPTION_RATE },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-white/10 rounded-2xl blur-lg transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                  <div className="text-xs text-blue-200 mt-2">*Results vary by customer.</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}