import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card } from "@/components/ui/card"
import { NudgeForm } from "./nudge-form"

export default function CreateNudgePage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Create Nudge</h2>
          <p className="text-muted-foreground mt-2">
            Create a new behavioral nudge to drive adoption.
          </p>
        </div>

        <Card className="p-6">
          <NudgeForm />
        </Card>
      </div>
    </DashboardLayout>
  )
}
