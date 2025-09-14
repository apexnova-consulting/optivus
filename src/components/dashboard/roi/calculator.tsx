"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { DollarSign, Users, Clock, Calculator } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

interface ROIInputs {
  employeeCount: number
  avgHourlyRate: number
  softwareCost: number
  adoptionRate: number
  hoursPerWeek: number
}

interface ROIResults {
  weeklyROI: number
  monthlyROI: number
  yearlyROI: number
  breakEvenWeeks: number
  projectedData: Array<{
    week: number
    value: number
    cost: number
  }>
}

const calculateROI = (inputs: ROIInputs): ROIResults => {
  const {
    employeeCount,
    avgHourlyRate,
    softwareCost,
    adoptionRate,
    hoursPerWeek,
  } = inputs

  const weeklyValue = employeeCount * (adoptionRate / 100) * hoursPerWeek * avgHourlyRate
  const weeklyCost = softwareCost / 52 // Assuming yearly cost
  const weeklyROI = weeklyValue - weeklyCost
  const monthlyROI = weeklyROI * 4.333
  const yearlyROI = weeklyROI * 52
  const breakEvenWeeks = Math.ceil(softwareCost / weeklyROI)

  // Generate 52 weeks of projected data
  const projectedData = Array.from({ length: 52 }, (_, i) => ({
    week: i + 1,
    value: weeklyValue * (i + 1),
    cost: weeklyCost * (i + 1),
  }))

  return {
    weeklyROI,
    monthlyROI,
    yearlyROI,
    breakEvenWeeks,
    projectedData,
  }
}

export function ROICalculator() {
  const [inputs, setInputs] = useState<ROIInputs>({
    employeeCount: 100,
    avgHourlyRate: 50,
    softwareCost: 10000,
    adoptionRate: 85,
    hoursPerWeek: 2,
  })

  const [results, setResults] = useState<ROIResults | null>(null)

  const handleCalculate = () => {
    const results = calculateROI(inputs)
    setResults(results)
  }

  return (
    <div className="space-y-8">
      {/* Input Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 blur-xl" />
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
            ROI Calculator
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Number of Employees
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="number"
                  value={inputs.employeeCount}
                  onChange={(e) => setInputs({ ...inputs, employeeCount: Number(e.target.value) })}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Average Hourly Rate
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="number"
                  value={inputs.avgHourlyRate}
                  onChange={(e) => setInputs({ ...inputs, avgHourlyRate: Number(e.target.value) })}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Software Cost (Annual)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="number"
                  value={inputs.softwareCost}
                  onChange={(e) => setInputs({ ...inputs, softwareCost: Number(e.target.value) })}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Expected Adoption Rate (%)
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="number"
                  value={inputs.adoptionRate}
                  onChange={(e) => setInputs({ ...inputs, adoptionRate: Number(e.target.value) })}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Hours Saved Per Week
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="number"
                  value={inputs.hoursPerWeek}
                  onChange={(e) => setInputs({ ...inputs, hoursPerWeek: Number(e.target.value) })}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex items-end">
              <Button
                onClick={handleCalculate}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calculate ROI
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Results */}
      {results && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* ROI Summary */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 blur-xl" />
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
                ROI Summary
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Weekly ROI
                  </div>
                  <div className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                    ${results.weeklyROI.toLocaleString()}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Monthly ROI
                  </div>
                  <div className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                    ${results.monthlyROI.toLocaleString()}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Yearly ROI
                  </div>
                  <div className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                    ${results.yearlyROI.toLocaleString()}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Break-even Point
                  </div>
                  <div className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                    {results.breakEvenWeeks} weeks
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Chart */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 blur-xl" />
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
                Projected ROI Over Time
              </h3>

              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={results.projectedData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis
                      dataKey="week"
                      stroke="#6B7280"
                      tick={{ fill: "#6B7280" }}
                      label={{ value: "Weeks", position: "insideBottom", offset: -5 }}
                    />
                    <YAxis
                      stroke="#6B7280"
                      tick={{ fill: "#6B7280" }}
                      label={{ value: "Value ($)", angle: -90, position: "insideLeft" }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1F2937",
                        border: "none",
                        borderRadius: "0.5rem",
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      }}
                      itemStyle={{ color: "#E5E7EB" }}
                      labelStyle={{ color: "#E5E7EB" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      name="Value Generated"
                      stroke="#2563EB"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="cost"
                      name="Cost"
                      stroke="#DC2626"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
