"use client"

import { BarChart3, Target, Users, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

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
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card
              key={stat.name}
              className="relative overflow-hidden px-6 py-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Decorative gradient blob */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-r from-[#2563EB]/10 to-[#06B6D4]/10 blur-2xl transform rotate-45" />
              
              <div className="relative">
                <dt className="flex items-center gap-2 text-sm font-medium text-gray-500">
                  <Icon className="h-5 w-5 text-[#2563EB]" />
                  {stat.name}
                </dt>
                <dd className="mt-2">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-emerald-600">
                    {stat.change}
                  </div>
                </dd>
              </div>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB]/0 via-[#2563EB]/30 to-[#2563EB]/0" />
            </Card>
          )
        })}
      </dl>
    </div>
  )
}
