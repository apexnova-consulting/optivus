"use client"

import { motion } from "framer-motion"
import { ClipboardCheck, LineChart, TrendingUp } from "lucide-react"

const steps = [
  {
    title: "Audit",
    description: "We baseline your environment and usage.",
    icon: ClipboardCheck,
  },
  {
    title: "Sprint",
    description: "30-day adoption sprint to deliver measurable gains.",
    icon: TrendingUp,
  },
  {
    title: "Scale",
    description: "Ongoing coaching or subscription for continuous improvement.",
    icon: LineChart,
  },
]

export function HowItWorks() {
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
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A proven process to optimize your technology investments
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
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
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
