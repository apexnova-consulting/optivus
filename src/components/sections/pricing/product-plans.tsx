"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PRICING } from "@/lib/constants"

export function ProductPlans() {
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
            Optivus SaaS Plans
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Start with the plan that matches your organization's size and needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(PRICING.SAAS).map(([key, plan], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`relative group ${
                key === "GROWTH" ? "transform scale-105 md:-translate-y-4" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 blur-xl" />
              <div className={`relative bg-white rounded-2xl p-8 shadow-lg border ${
                key === "GROWTH" ? "border-blue-500" : "border-gray-100"
              } h-full flex flex-col`}>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">
                      ${plan.price || "Custom"}
                    </span>
                    {plan.price && (
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={plan.price ? "/contact?plan=" + key.toLowerCase() : "/contact"}>
                  <Button
                    className={`w-full ${
                      key === "GROWTH"
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                        : ""
                    }`}
                  >
                    {plan.price ? "Start Free Trial" : "Contact Sales"}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
