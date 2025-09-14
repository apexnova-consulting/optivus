"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { month: "Jan", adoption: 45 },
  { month: "Feb", adoption: 52 },
  { month: "Mar", adoption: 58 },
  { month: "Apr", adoption: 65 },
  { month: "May", adoption: 72 },
  { month: "Jun", adoption: 78 },
  { month: "Jul", adoption: 85 },
]

export function AdoptionChart() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="month"
            stroke="#6B7280"
            tick={{ fill: "#6B7280" }}
            tickLine={{ stroke: "#6B7280" }}
          />
          <YAxis
            stroke="#6B7280"
            tick={{ fill: "#6B7280" }}
            tickLine={{ stroke: "#6B7280" }}
            tickFormatter={(value) => `${value}%`}
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
            formatter={(value: number) => [`${value}%`, "Adoption Rate"]}
          />
          <Line
            type="monotone"
            dataKey="adoption"
            stroke="#2563EB"
            strokeWidth={2}
            dot={{ fill: "#2563EB", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}