"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowUp, LucideIcon } from "lucide-react"

interface KPICardProps {
  title: string
  value: string | number
  change?: {
    value: number
    trend: "up" | "down"
  }
  icon: LucideIcon
  description?: string
}

export function KPICard({ title, value, change, icon: Icon, description }: KPICardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 blur-xl" />
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          {change && (
            <div className={`flex items-center text-sm font-medium ${
              change.trend === "up" ? "text-green-600" : "text-red-600"
            }`}>
              {change.trend === "up" ? (
                <ArrowUp className="w-4 h-4 mr-1" />
              ) : (
                <ArrowDown className="w-4 h-4 mr-1" />
              )}
              {Math.abs(change.value)}%
            </div>
          )}
        </div>
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </h3>
        <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
          {value}
        </p>
        {description && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  )
}
