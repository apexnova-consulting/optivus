"use client"

import { BarChart3, Target, Users, Zap } from "lucide-react"

const stats = [
  {
    name: "Average ROI",
    value: "312%",
    change: "+28%",
    icon: Zap,
  },
  {
    name: "Time to Value",
    value: "30 Days",
    change: "+15%",
    icon: Target,
  },
  {
    name: "User Adoption",
    value: "85%",
    change: "+12%",
    icon: Users,
  },
  {
    name: "Customer Success",
    value: "96%",
    change: "+8%",
    icon: BarChart3,
  },
]

export function Stats() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.name}
                className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <dt className="flex items-center gap-3 text-sm font-medium text-gray-600">
                  <Icon className="h-5 w-5 text-blue-600" />
                  {stat.name}
                </dt>
                <dd className="mt-3">
                  <div className="text-3xl font-semibold tracking-tight text-blue-600">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-emerald-600">
                    {stat.change}
                  </div>
                </dd>

                {/* Decorative gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/0 via-blue-600/30 to-blue-600/0"></div>
              </div>
            )
          })}
        </dl>
      </div>
    </div>
  )
}