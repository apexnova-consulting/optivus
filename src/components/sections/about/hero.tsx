"use client"

import { motion } from "framer-motion"
import { BRAND } from "@/lib/constants"

export function AboutHero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-8">
            {BRAND.COMPANY.CONSULTING} — Your partner for measurable software adoption
          </h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            {BRAND.COMPANY.CONSULTING} helps companies close the gap between purchasing software and actually realizing its value. 
            We combine change management, communication coaching, and technical adoption engineering to ensure that new tools are 
            not just installed — they're used, adopted, and produce measurable ROI.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
