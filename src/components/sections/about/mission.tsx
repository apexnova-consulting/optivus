"use client"

import { motion } from "framer-motion"
import { Target } from "lucide-react"

export function Mission() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-2xl mb-8">
            <Target className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600">
            To make every enterprise software dollar work harder. We believe that the real return on technology 
            comes from people adopting new ways of working — and that adoption can be measured, improved, and scaled.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
