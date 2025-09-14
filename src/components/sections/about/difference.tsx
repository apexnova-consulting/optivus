"use client"

import { motion } from "framer-motion"
import { Brain, ChartBar, Zap } from "lucide-react"

const differences = [
  {
    title: "Behavioral Science + Technical Enablement",
    description: "We combine behavioral science (communication & nudge design) with technical enablement (workflows, integrations, dashboards).",
    icon: Brain,
  },
  {
    title: "Rigorous Measurement",
    description: "We guarantee a rigorous measurement framework — baseline → deliver → measure → report.",
    icon: ChartBar,
  },
  {
    title: "Productized Delivery",
    description: "We productize what we deliver: Optivus is the measurable outcome and platform for long-term tracking.",
    icon: Zap,
  },
]

export function Difference() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4"
          >
            Why We're Different
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differences.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 blur-xl" />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                  <div className="p-3 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl inline-block mb-6">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
