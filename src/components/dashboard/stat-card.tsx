import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string | number
  description?: string
  icon?: React.ComponentType<{ className?: string }>
  trend?: {
    value: number
    label: string
    positive?: boolean
  }
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
}: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className="h-4 w-4 text-gray-500" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
        )}
        {trend && (
          <div className="mt-2 flex items-center text-sm">
            <span
              className={cn(
                "font-medium",
                trend.positive
                  ? "text-optivus-success"
                  : "text-optivus-error"
              )}
            >
              {trend.value > 0 ? "+" : ""}
              {trend.value}%
            </span>
            <span className="ml-2 text-gray-500 dark:text-gray-400">
              {trend.label}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
