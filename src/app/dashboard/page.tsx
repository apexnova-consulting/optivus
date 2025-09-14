"use client"

import { ProductTour } from "@/components/onboarding/product-tour"
import { KPICard } from "@/components/dashboard/kpi-card"
import { AdoptionChart } from "@/components/dashboard/adoption-chart"
import { TeamBreakdown } from "@/components/dashboard/team-breakdown"
import { UserTable } from "@/components/dashboard/user-table"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <ProductTour />

      {/* KPI Cards */}
      <div
        data-tour="dashboard-kpis"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <KPICard
          title="Adoption Rate"
          value="85%"
          change="+12%"
          trend="up"
          description="Average across all tools"
        />
        <KPICard
          title="Hours Saved"
          value="324"
          change="+18"
          trend="up"
          description="This month"
        />
        <KPICard
          title="Estimated ROI"
          value="$45,200"
          change="+$5,200"
          trend="up"
          description="Monthly savings"
        />
        <KPICard
          title="Communication Score"
          value="4.2/5"
          change="+0.3"
          trend="up"
          description="Team feedback"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div data-tour="roi-calculator" className="rounded-lg border bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-900">Adoption Trend</h3>
          <div className="mt-6">
            <AdoptionChart />
          </div>
        </div>

        <div data-tour="team-analytics" className="rounded-lg border bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-900">Team Breakdown</h3>
          <div className="mt-6">
            <TeamBreakdown />
          </div>
        </div>
      </div>

      {/* User Table */}
      <div data-tour="nudge-engine" className="rounded-lg border bg-white">
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-900">User Activity</h3>
        </div>
        <UserTable />
      </div>
    </div>
  )
}