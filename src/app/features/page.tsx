"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const features = [
  {
    name: "Real-time Dashboard",
    description:
      "Get a comprehensive view of your AI tool adoption with real-time metrics, usage patterns, and ROI calculations.",
    image: "/screenshots/dashboard.png",
    stats: [
      { name: "Adoption Rate", value: "85%" },
      { name: "Hours Saved", value: "324" },
      { name: "Monthly ROI", value: "$45,200" },
    ],
  },
  {
    name: "ROI Calculator",
    description:
      "Calculate and visualize the return on investment for your AI tools based on actual usage data and time savings.",
    image: "/screenshots/roi-calculator.png",
    stats: [
      { name: "Break-even Point", value: "4.2 weeks" },
      { name: "Cost Savings", value: "$12,500/mo" },
      { name: "Productivity Gain", value: "23%" },
    ],
  },
  {
    name: "Nudge Engine",
    description:
      "Drive adoption with intelligent nudges, success stories, and personalized tips delivered through Slack or email.",
    image: "/screenshots/nudge-engine.png",
    stats: [
      { name: "Engagement Rate", value: "78%" },
      { name: "Active Users", value: "142" },
      { name: "Weekly Nudges", value: "5" },
    ],
  },
  {
    name: "Team Analytics",
    description:
      "Track adoption and usage patterns across teams, identify champions, and uncover opportunities for improvement.",
    image: "/screenshots/team-analytics.png",
    stats: [
      { name: "Teams Tracked", value: "8" },
      { name: "Top Performers", value: "15" },
      { name: "Improvement Areas", value: "3" },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-base font-semibold leading-7 text-blue-600">
            Features
          </h1>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to maximize AI ROI
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive platform helps you measure, optimize, and accelerate
            AI tool adoption across your organization.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col">
                  <p className="flex-auto text-base leading-7 text-gray-600">
                    {feature.description}
                  </p>

                  {/* Feature screenshot */}
                  <div className="mt-8 rounded-xl bg-gray-50 p-4">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={feature.image}
                        alt={feature.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Feature stats */}
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {feature.stats.map((stat) => (
                      <div key={stat.name}>
                        <p className="text-2xl font-semibold text-gray-900">
                          {stat.value}
                        </p>
                        <p className="text-sm text-gray-600">{stat.name}</p>
                      </div>
                    ))}
                  </div>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        {/* CTA section */}
        <div className="mt-24">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to maximize your AI ROI?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Start measuring and optimizing your AI tool adoption today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Book Demo
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-semibold leading-6 text-white"
              >
                View pricing <ChevronRight className="inline h-4 w-4" />
              </Link>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#3b82f6" />
                  <stop offset={1} stopColor="#06b6d4" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
