"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface KPICardProps {
  title: string
  value: string | number
  icon: LucideIcon
  description?: string
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
}

export function KPICard({
  title,
  value,
  icon: Icon,
  description,
  trend,
  className,
}: KPICardProps) {
  return (
    <Card className={cn("relative overflow-hidden group", className)}>
      <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 translate-y-[-50%] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl group-hover:translate-x-12 transition-transform duration-500" />
      
      <div className="relative p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          {trend && (
            <div className={cn(
              "flex items-center text-sm font-medium",
              trend.isPositive ? "text-green-600" : "text-red-600"
            )}>
              <span>{trend.isPositive ? "+" : "-"}{Math.abs(trend.value)}%</span>
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">
            {title}
          </h3>
          <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {value}
          </p>
          {description && (
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/0 via-blue-600/40 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Card>
  )
}
