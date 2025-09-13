import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card } from "@/components/ui/card"
import { ReportGenerator } from "./report-generator"

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Reports</h2>
          <p className="text-muted-foreground mt-2">
            Generate and export adoption and ROI reports.
          </p>
        </div>

        <Card className="p-6">
          <ReportGenerator />
        </Card>
      </div>
    </DashboardLayout>
  )
}
