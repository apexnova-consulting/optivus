import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatCard } from "@/components/dashboard/stat-card"
import { Card } from "@/components/ui/card"
import { adoptionData } from "@/lib/mock-data"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { Brain, TrendingUp, Users } from "lucide-react"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground mt-2">
            Welcome back! Here's an overview of your adoption metrics.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Adoption Rate"
            value={`${adoptionData.currentRate}%`}
            icon={Users}
            trend={{
              value: adoptionData.currentRate - adoptionData.previousRate,
              label: "vs last month",
              positive: true,
            }}
          />
          <StatCard
            title="Active Users"
            value={adoptionData.activeUsers}
            description={`out of ${adoptionData.totalUsers} total users`}
            icon={Users}
          />
          <StatCard
            title="Time to Adoption"
            value={`${adoptionData.timeToAdoption} days`}
            icon={Brain}
          />
          <StatCard
            title="ROI Impact"
            value={`$${(adoptionData.roiImpact / 1000).toFixed(1)}k`}
            icon={TrendingUp}
            trend={{
              value: 23,
              label: "vs target",
              positive: true,
            }}
          />
        </div>

        {/* Charts */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Adoption Over Time */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Adoption Over Time</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={adoptionData.adoptionOverTime}>
                  <defs>
                    <linearGradient id="adoption" x1="0" y1="0" x2="0" y2="1">
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
                    dataKey="date"
                    tickFormatter={(value) =>
                      new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })
                    }
                  />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="rate"
                    stroke="#2563EB"
                    fillOpacity={1}
                    fill="url(#adoption)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* ROI Projection */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">ROI Projection</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={adoptionData.roiProjection}>
                  <XAxis dataKey="month" />
                  <YAxis
                    tickFormatter={(value) =>
                      `$${(value / 1000).toFixed(0)}k`
                    }
                  />
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="actual"
                    stroke="#2563EB"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="projected"
                    stroke="#06B6D4"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Department Adoption */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Department Adoption</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={adoptionData.departmentAdoption}>
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `${value}%`} />
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <Tooltip />
                <Bar
                  dataKey="rate"
                  fill="#2563EB"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {adoptionData.recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between border-b border-gray-100 pb-4 dark:border-gray-800"
              >
                <div>
                  <p className="font-medium">{activity.user}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {activity.action} • {activity.department}
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
