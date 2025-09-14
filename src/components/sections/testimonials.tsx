"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Optivus transformed how we measure and optimize our technology investments. The ROI insights are invaluable.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechCorp",
  },
  {
    quote: "The adoption tracking and behavioral nudges have significantly improved our technology rollouts.",
    author: "Michael Rodriguez",
    role: "Head of Digital Transformation",
    company: "Enterprise Co",
  },
  {
    quote: "Finally, a platform that makes technology ROI measurable and actionable. Highly recommended.",
    author: "Emily Thompson",
    role: "VP of Innovation",
    company: "Future Inc",
  },
]

export function Testimonials() {
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
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See how organizations are transforming their technology adoption
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 blur-xl" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <Quote className="w-8 h-8 text-blue-600 mb-6" />
                <blockquote className="text-gray-900 text-lg mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <cite className="not-italic font-semibold text-gray-900">
                    {testimonial.author}
                  </cite>
                  <div className="text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center text-sm text-gray-500">
          *Results vary by customer. Testimonials represent anonymized customer experiences.
        </div>
      </div>
    </section>
  )
}
