"use client"

import { motion } from "framer-motion"

export function PricingHero() {
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
            Simple pricing for product + optional hands-on consulting engagements
          </h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Choose the plan that best fits your organization's needs, and optionally add consulting services for accelerated results.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
