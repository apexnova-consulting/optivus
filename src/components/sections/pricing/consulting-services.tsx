"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Check, Clock, Users, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PRICING } from "@/lib/constants"

const icons = {
  AUDIT: Clock,
  SPRINT: Users,
  COACHING: Brain,
}

export function ConsultingServices() {
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
            Consulting Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Accelerate your results with hands-on expertise
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(PRICING.CONSULTING).map(([key, service], index) => {
            const Icon = icons[key as keyof typeof icons]
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 blur-xl" />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full flex flex-col">
                  <div className="mb-8">
                    <div className="p-3 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl inline-block mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">
                        ${service.price.toLocaleString()}
                      </span>
                      {service.period ? (
                        <span className="text-gray-600 ml-2">/{service.period}</span>
                      ) : (
                        <span className="text-gray-600 ml-2">/{service.duration}</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={`/contact?service=${key.toLowerCase()}`}>
                    <Button className="w-full">
                      Book {key === "AUDIT" ? "Audit" : "Consultation"}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
