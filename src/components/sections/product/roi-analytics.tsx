"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calculator, DollarSign, Clock, TrendingUp } from "lucide-react"

const features = [
  {
    title: "Automated Calculations",
    description: "Automatically calculate ROI based on your organization's data.",
    icon: Calculator,
  },
  {
    title: "Cost Savings",
    description: "Track and measure cost savings from improved adoption.",
    icon: DollarSign,
  },
  {
    title: "Time Savings",
    description: "Measure time saved through improved processes.",
    icon: Clock,
  },
  {
    title: "Trend Analysis",
    description: "Track ROI trends over time and identify opportunities.",
    icon: TrendingUp,
  },
]

export function ROIAnalytics() {
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
            ROI Analytics
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Automated ROI calculations using your payroll and usage data.
          </motion.p>
        </div>

        {/* ROI Calculator Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl mb-20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
          <div className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="h-12 bg-gray-100 border-b border-gray-200 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="aspect-[16/9] relative">
              <Image
                src="/roi-calculator-preview.png"
                alt="ROI Calculator Preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
