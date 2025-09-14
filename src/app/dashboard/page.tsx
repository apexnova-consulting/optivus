"use client"

import { useEffect, useState } from "react"
import { Users, Clock, TrendingUp, DollarSign } from "lucide-react"
import { KPICard } from "@/components/dashboard/kpi-card"
import { AdoptionChart } from "@/components/dashboard/adoption-chart"
import { TeamBreakdown } from "@/components/dashboard/team-breakdown"
import { UserTable } from "@/components/dashboard/user-table"
import { supabase } from "@/lib/auth"

// Mock data - replace with real data from Supabase
const mockData = {
  kpis: {
    adoptionRate: {
      value: "85%",
      change: { value: 12, trend: "up" as const },
    },
    hoursSaved: {
      value: "324",
      change: { value: 8, trend: "up" as const },
    },
    estimatedRoi: {
      value: "$45,200",
      change: { value: 15, trend: "up" as const },
    },
    commScore: {
      value: "4.2/5",
      change: { value: 5, trend: "up" as const },
    },
  },
  adoptionTrend: [
    { date: "Week 1", adoption: 20, target: 30 },
    { date: "Week 2", adoption: 35, target: 40 },
    { date: "Week 3", adoption: 45, target: 50 },
    { date: "Week 4", adoption: 60, target: 60 },
    { date: "Week 5", adoption: 75, target: 70 },
    { date: "Week 6", adoption: 85, target: 80 },
  ],
  teamBreakdown: [
    { team: "Engineering", adoption: 92 },
    { team: "Sales", adoption: 78 },
    { team: "Marketing", adoption: 85 },
    { team: "Support", adoption: 88 },
  ],
  users: [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      team: "Engineering",
      lastActive: "2 hours ago",
      usedTool: true,
      hoursSaved: 12,
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      team: "Sales",
      lastActive: "1 day ago",
      usedTool: true,
      hoursSaved: 8,
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      team: "Marketing",
      lastActive: "3 days ago",
      usedTool: false,
      hoursSaved: 0,
    },
  ],
}

export default function DashboardPage() {
  const [data, setData] = useState(mockData)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return

        // Fetch real data from Supabase here
        // For now, using mock data
        setData(mockData)
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="p-6 space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Adoption Rate"
          value={data.kpis.adoptionRate.value}
          change={data.kpis.adoptionRate.change}
          icon={Users}
        />
        <KPICard
          title="Hours Saved"
          value={data.kpis.hoursSaved.value}
          change={data.kpis.hoursSaved.change}
          icon={Clock}
        />
        <KPICard
          title="Estimated ROI"
          value={data.kpis.estimatedRoi.value}
          change={data.kpis.estimatedRoi.change}
          icon={DollarSign}
        />
        <KPICard
          title="Communication Score"
          value={data.kpis.commScore.value}
          change={data.kpis.commScore.change}
          icon={TrendingUp}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AdoptionChart data={data.adoptionTrend} />
        <TeamBreakdown data={data.teamBreakdown} />
      </div>

      {/* User Table */}
      <UserTable users={data.users} />
    </div>
  )
}