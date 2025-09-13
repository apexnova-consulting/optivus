"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  className?: string
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  className,
}: FeatureCardProps) {
  return (
    <Card 
      variant="interactive" 
      className={cn(
        "relative overflow-hidden group border border-gray-200 dark:border-gray-800",
        className
      )}
    >
      <div className="absolute top-0 right-0 w-[200px] h-[200px] transform translate-x-20 -translate-y-20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl group-hover:translate-x-16 transition-transform duration-500" />
      
      <div className="relative p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
            <Icon className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/0 via-blue-600/40 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Card>
  )
}
