"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const proofs = [
  {
    description: "A mid-market SaaS org reduced manual processing time by 400 hours/year and increased lead response rates after a 30-day sprint led by ApexNova.",
  },
  {
    description: "An enterprise operations team achieved 85% active user adoption of a new tool within six weeks, verified via Optivus metrics.",
  },
  {
    description: "Clients see an average first-year ROI of 312% from combined consulting + Optivus adoption tracking.",
  },
]

export function Proof() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4"
          >
            Proof & Outcomes
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {proofs.map((proof, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 blur-xl" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <CheckCircle className="w-8 h-8 text-green-500 mb-6" />
                <p className="text-gray-600 leading-relaxed">{proof.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          *Results vary by client. Numbers represent anonymized benchmark examples.
        </div>
      </div>
    </section>
  )
}
