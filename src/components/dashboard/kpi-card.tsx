import { ArrowUpIcon, ArrowDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface KPICardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  description: string
}

export function KPICard({
  title,
  value,
  change,
  trend,
  description,
}: KPICardProps) {
  return (
    <div className="rounded-lg border bg-white p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        <div
          className={cn(
            "flex items-center rounded-full px-2 py-1 text-xs font-medium",
            trend === "up"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          )}
        >
          {trend === "up" ? (
            <ArrowUpIcon className="mr-1 h-3 w-3" />
          ) : (
            <ArrowDownIcon className="mr-1 h-3 w-3" />
          )}
          {change}
        </div>
      </div>
      <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
  )
}