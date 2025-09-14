import { ROICalculator } from "@/components/dashboard/roi/calculator"
import { ReportGenerator } from "@/components/dashboard/roi/report-generator"

export default function ROIPage() {
  return (
    <div className="p-6 space-y-8">
      <ROICalculator />
      <ReportGenerator />
    </div>
  )
}