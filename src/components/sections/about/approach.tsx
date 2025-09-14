"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, Rocket, Scale } from "lucide-react"

const steps = [
  {
    title: "Discover",
    description: "Run an AI ROI Audit to baseline usage, costs, and barriers. We collect license counts, tool telemetry (if available), and stakeholder interviews.",
    icon: Search,
  },
  {
    title: "Design",
    description: "Prioritize 1–3 use cases that unlock the most value. Build playbooks, manager scripts, and communication plans.",
    icon: Lightbulb,
  },
  {
    title: "Deploy",
    description: "Execute a 30-day Rapid Adoption Sprint: measure baseline, drive adoption with nudges and training, and instrument ROI tracking.",
    icon: Rocket,
  },
  {
    title: "Scale",
    description: "Transition to product (Optivus) and/or Fractional Coaching to keep adoption momentum and continuously measure impact.",
    icon: Scale,
  },
]

export function Approach() {
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
            Our Approach (The ApexNova Method)
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 blur-xl" />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl inline-block">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
