"use client"

import { motion } from "framer-motion"

const faqs = [
  {
    question: "What is considered an active user?",
    answer: "An active user is someone who has logged into and used the platform at least once during the billing period. Users who are invited but haven't activated their accounts are not counted as active users."
  },
  {
    question: "How does the Sprint differ from the Audit?",
    answer: "The Audit is a 2-week diagnostic that provides baseline metrics and recommendations. The Sprint is a full 30-day engagement that includes implementation support, manager coaching, and a complete ROI report."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Yes, you can upgrade your plan at any time. When you upgrade, we'll prorate the difference and adjust your billing accordingly."
  },
  {
    question: "Do you offer custom enterprise features?",
    answer: "Yes, our Enterprise plan includes custom integrations, SSO, dedicated customer success manager, and other features tailored to your organization's needs."
  },
  {
    question: "What kind of support is included?",
    answer: "All plans include email support. Growth plans and above include priority email support with faster response times. Enterprise plans include a dedicated customer success manager."
  },
  {
    question: "Can I combine consulting services with a software subscription?",
    answer: "Yes, many customers combine our software with consulting services for faster results. We offer special bundled pricing for combined engagements."
  }
]

export function FAQ() {
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
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
