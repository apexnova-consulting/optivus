"use client"

import { motion } from "framer-motion"
import { MessageSquare, FileText, Users, Lock } from "lucide-react"

const integrations = [
  {
    title: "Slack",
    description: "Send nudges and collect feedback directly through Slack.",
    icon: MessageSquare,
    status: "Available",
  },
  {
    title: "CSV Import",
    description: "Import user data and usage metrics via CSV upload.",
    icon: FileText,
    status: "Available",
  },
  {
    title: "Microsoft Teams",
    description: "Integration with Microsoft Teams for enterprise communication.",
    icon: Users,
    status: "Coming Soon",
  },
  {
    title: "SSO",
    description: "Single Sign-On for enterprise security and convenience.",
    icon: Lock,
    status: "Coming Soon",
  },
]

export function Integrations() {
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
            Integrations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Connect with your existing tools and workflows
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrations.map((integration, index) => {
            const Icon = integration.icon
            return (
              <motion.div
                key={integration.title}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{integration.title}</h3>
                  <div className={`text-sm mb-4 ${
                    integration.status === "Available" ? "text-green-600" : "text-orange-600"
                  }`}>
                    {integration.status}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{integration.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
