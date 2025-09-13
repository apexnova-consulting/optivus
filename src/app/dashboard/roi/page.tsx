import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card } from "@/components/ui/card"
import { RoiCalculator } from "./roi-calculator"

export default function RoiPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">ROI Calculator</h2>
          <p className="text-muted-foreground mt-2">
            Calculate and visualize the return on investment for your technology implementation.
          </p>
        </div>

        <Card className="p-6">
          <RoiCalculator />
        </Card>
      </div>
    </DashboardLayout>
  )
}
