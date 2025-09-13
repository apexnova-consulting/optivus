import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatCard } from "@/components/dashboard/stat-card"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { nudgeData } from "@/lib/mock-data"
import { Brain, Mail, MessageSquare, Plus } from "lucide-react"
import Link from "next/link"
import { NudgeList } from "./nudge-list"

export default function NudgesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Nudge Engine</h2>
            <p className="text-muted-foreground mt-2">
              Create and manage behavioral nudges to drive adoption.
            </p>
          </div>
          <Button asChild>
            <Link href="/dashboard/nudges/create">
              <Plus className="mr-2 h-4 w-4" />
              Create Nudge
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="Active Nudges"
            value={nudgeData.activeNudges}
            description={`out of ${nudgeData.totalNudges} total nudges`}
            icon={Brain}
          />
          <StatCard
            title="Average Engagement"
            value={`${nudgeData.averageEngagement}%`}
            icon={MessageSquare}
            trend={{
              value: 12,
              label: "vs last month",
              positive: true,
            }}
          />
          <StatCard
            title="Delivery Success"
            value="98.5%"
            icon={Mail}
            trend={{
              value: 2,
              label: "vs last month",
              positive: true,
            }}
          />
        </div>

        {/* Nudge List */}
        <Card>
          <NudgeList nudges={nudgeData.nudges} />
        </Card>
      </div>
    </DashboardLayout>
  )
}
