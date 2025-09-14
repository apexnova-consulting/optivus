"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { team: "Engineering", adoption: 92 },
  { team: "Sales", adoption: 78 },
  { team: "Marketing", adoption: 85 },
  { team: "Support", adoption: 88 },
  { team: "Product", adoption: 82 },
]

export function TeamBreakdown() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="team"
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
          <Bar
            dataKey="adoption"
            fill="#2563EB"
            radius={[4, 4, 0, 0]}
            maxBarSize={50}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}