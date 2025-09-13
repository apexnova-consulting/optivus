"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { roiCalculatorDefaults } from "@/lib/mock-data"
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { Download } from "lucide-react"

interface RoiInputs {
  employeeCount: number
  averageSalary: number
  softwareCost: number
  productivityGain: number
  adoptionRate: number
  implementationCost: number
  trainingCost: number
}

interface RoiResults {
  totalCost: number
  annualBenefit: number
  netBenefit: number
  roi: number
  breakEvenMonths: number
  projectedReturns: Array<{
    month: number
    value: number
  }>
}

function calculateRoi(inputs: RoiInputs): RoiResults {
  const {
    employeeCount,
    averageSalary,
    softwareCost,
    productivityGain,
    adoptionRate,
    implementationCost,
    trainingCost,
  } = inputs

  // Calculate total cost
  const totalCost = softwareCost + implementationCost + trainingCost

  // Calculate annual benefit
  const productivityGainDecimal = productivityGain / 100
  const adoptionRateDecimal = adoptionRate / 100
  const affectedEmployees = employeeCount * adoptionRateDecimal
  const annualBenefit =
    affectedEmployees * averageSalary * productivityGainDecimal

  // Calculate net benefit
  const netBenefit = annualBenefit - totalCost

  // Calculate ROI percentage
  const roi = (netBenefit / totalCost) * 100

  // Calculate break-even point in months
  const breakEvenMonths = (totalCost / annualBenefit) * 12

  // Generate projected returns for chart
  const projectedReturns = Array.from({ length: 12 }, (_, i) => ({
    month: i + 1,
    value: (annualBenefit / 12) * (i + 1) - totalCost,
  }))

  return {
    totalCost,
    annualBenefit,
    netBenefit,
    roi,
    breakEvenMonths,
    projectedReturns,
  }
}

export function RoiCalculator() {
  const [inputs, setInputs] = React.useState<RoiInputs>(roiCalculatorDefaults)
  const [results, setResults] = React.useState<RoiResults | null>(null)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof RoiInputs
  ) => {
    const value = parseFloat(e.target.value) || 0
    setInputs((prev) => ({ ...prev, [field]: value }))
  }

  const handleCalculate = () => {
    const results = calculateRoi(inputs)
    setResults(results)
  }

  const handleExport = () => {
    if (!results) return

    const data = {
      inputs,
      results: {
        ...results,
        projectedReturns: undefined, // Exclude chart data from export
      },
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "roi-calculation.json"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-8">
      {/* Input Form */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Number of Employees</label>
            <Input
              type="number"
              value={inputs.employeeCount}
              onChange={(e) => handleInputChange(e, "employeeCount")}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Average Salary ($)</label>
            <Input
              type="number"
              value={inputs.averageSalary}
              onChange={(e) => handleInputChange(e, "averageSalary")}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Software Cost ($)</label>
            <Input
              type="number"
              value={inputs.softwareCost}
              onChange={(e) => handleInputChange(e, "softwareCost")}
            />
          </div>
          <div>
            <label className="text-sm font-medium">
              Expected Productivity Gain (%)
            </label>
            <Input
              type="number"
              value={inputs.productivityGain}
              onChange={(e) => handleInputChange(e, "productivityGain")}
            />
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Expected Adoption Rate (%)</label>
            <Input
              type="number"
              value={inputs.adoptionRate}
              onChange={(e) => handleInputChange(e, "adoptionRate")}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Implementation Cost ($)</label>
            <Input
              type="number"
              value={inputs.implementationCost}
              onChange={(e) => handleInputChange(e, "implementationCost")}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Training Cost ($)</label>
            <Input
              type="number"
              value={inputs.trainingCost}
              onChange={(e) => handleInputChange(e, "trainingCost")}
            />
          </div>
          <div className="pt-6">
            <Button onClick={handleCalculate} className="w-full">
              Calculate ROI
            </Button>
          </div>
        </div>
      </div>

      {/* Results */}
      {results && (
        <div className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Total Cost
              </h4>
              <p className="mt-2 text-2xl font-bold">
                ${results.totalCost.toLocaleString()}
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Annual Benefit
              </h4>
              <p className="mt-2 text-2xl font-bold">
                ${results.annualBenefit.toLocaleString()}
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                ROI
              </h4>
              <p className="mt-2 text-2xl font-bold">
                {results.roi.toFixed(1)}%
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Break-even
              </h4>
              <p className="mt-2 text-2xl font-bold">
                {results.breakEvenMonths.toFixed(1)} months
              </p>
            </div>
          </div>

          {/* ROI Chart */}
          <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Projected Returns</h3>
              <Button variant="outline" size="sm" onClick={handleExport}>
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
            <div className="h-[300px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={results.projectedReturns}>
                  <defs>
                    <linearGradient id="roi" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="#2563EB"
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="95%"
                        stopColor="#2563EB"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="month"
                    tickFormatter={(value) => `Month ${value}`}
                  />
                  <YAxis
                    tickFormatter={(value) =>
                      `$${(value / 1000).toFixed(0)}k`
                    }
                  />
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <Tooltip
                    formatter={(value: number) =>
                      `$${value.toLocaleString()}`
                    }
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#2563EB"
                    fillOpacity={1}
                    fill="url(#roi)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
