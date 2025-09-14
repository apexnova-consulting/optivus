"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const team = [
  {
    name: "Alex Thompson",
    role: "Founder & CEO",
    bio: "Former Head of Enterprise Adoption at leading SaaS companies. 15+ years experience in change management and digital transformation.",
    image: "/placeholder-avatar.png",
  },
  {
    name: "Sarah Kim",
    role: "Head of Product",
    bio: "Product leader with deep expertise in analytics and user behavior. Previously led product teams at major enterprise software companies.",
    image: "/placeholder-avatar.png",
  },
  {
    name: "Michael Chen",
    role: "Head of Consulting",
    bio: "Enterprise change management expert with track record of successful digital transformations at Fortune 500 companies.",
    image: "/placeholder-avatar.png",
  },
]

export function Team() {
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
            Leadership & Team
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 blur-xl" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-4">{member.role}</div>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
