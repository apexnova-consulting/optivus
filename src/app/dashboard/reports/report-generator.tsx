"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { adoptionData } from "@/lib/mock-data"
import { FileDown, FileText, Table } from "lucide-react"
import { jsPDF } from "jspdf"
import "jspdf-autotable"

declare module "jspdf" {
  interface jsPDF {
    autoTable: (options: any) => jsPDF
  }
}

const reportTypes = [
  {
    id: "adoption",
    name: "Adoption Report",
    description: "Overview of user adoption metrics and trends",
  },
  {
    id: "roi",
    name: "ROI Report",
    description: "Financial impact and return on investment analysis",
  },
  {
    id: "engagement",
    name: "Engagement Report",
    description: "Detailed user engagement and activity metrics",
  },
  {
    id: "nudge",
    name: "Nudge Performance",
    description: "Analysis of behavioral nudge effectiveness",
  },
]

const dateRanges = [
  { id: "7d", name: "Last 7 Days" },
  { id: "30d", name: "Last 30 Days" },
  { id: "90d", name: "Last 90 Days" },
  { id: "ytd", name: "Year to Date" },
  { id: "all", name: "All Time" },
]

export function ReportGenerator() {
  const [selectedReport, setSelectedReport] = React.useState("")
  const [dateRange, setDateRange] = React.useState("")
  const [isGenerating, setIsGenerating] = React.useState(false)

  const generatePDF = async () => {
    setIsGenerating(true)

    // Create PDF document
    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.width
    
    // Add logo and header
    doc.setFontSize(24)
    doc.setTextColor(37, 99, 235) // Optivus Blue
    doc.text("Optivus", 20, 20)
    
    doc.setFontSize(16)
    doc.setTextColor(0, 0, 0)
    doc.text(reportTypes.find(r => r.id === selectedReport)?.name || "", 20, 35)

    // Add date range
    doc.setFontSize(12)
    doc.setTextColor(100, 100, 100)
    doc.text(`Date Range: ${dateRanges.find(d => d.id === dateRange)?.name}`, 20, 45)

    // Add KPI summary
    doc.setFontSize(14)
    doc.setTextColor(0, 0, 0)
    doc.text("Key Metrics", 20, 60)

    const metrics = [
      ["Adoption Rate", `${adoptionData.currentRate}%`],
      ["Active Users", adoptionData.activeUsers.toString()],
      ["Time to Adoption", `${adoptionData.timeToAdoption} days`],
      ["ROI Impact", `$${adoptionData.roiImpact.toLocaleString()}`],
    ]

    doc.autoTable({
      startY: 65,
      head: [["Metric", "Value"]],
      body: metrics,
      theme: "grid",
      styles: { fontSize: 12 },
      headStyles: { fillColor: [37, 99, 235] },
    })

    // Add department adoption
    doc.text("Department Adoption", 20, 120)
    
    const departmentData = adoptionData.departmentAdoption.map(d => [
      d.name,
      `${d.rate}%`,
    ])

    doc.autoTable({
      startY: 125,
      head: [["Department", "Adoption Rate"]],
      body: departmentData,
      theme: "grid",
      styles: { fontSize: 12 },
      headStyles: { fillColor: [37, 99, 235] },
    })

    // Add footer
    const today = new Date().toLocaleDateString()
    doc.setFontSize(10)
    doc.setTextColor(100, 100, 100)
    doc.text(`Generated on ${today}`, 20, doc.internal.pageSize.height - 20)
    doc.text("Optivus Analytics", pageWidth - 60, doc.internal.pageSize.height - 20)

    // Save the PDF
    doc.save(`optivus-${selectedReport}-report.pdf`)

    setIsGenerating(false)
  }

  const generateCSV = () => {
    // Create CSV content based on report type
    let csvContent = "data:text/csv;charset=utf-8,"

    if (selectedReport === "adoption") {
      // Add headers
      csvContent += "Date,Adoption Rate\n"
      // Add data
      adoptionData.adoptionOverTime.forEach(d => {
        csvContent += `${d.date},${d.rate}\n`
      })
    } else if (selectedReport === "roi") {
      // Add headers
      csvContent += "Month,Actual,Projected\n"
      // Add data
      adoptionData.roiProjection.forEach(d => {
        csvContent += `${d.month},${d.actual || ""},${d.projected}\n`
      })
    }

    // Create download link
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", `optivus-${selectedReport}-report.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium">Report Type</label>
          <Select
            value={selectedReport}
            onValueChange={setSelectedReport}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select report type" />
            </SelectTrigger>
            <SelectContent>
              {reportTypes.map((type) => (
                <SelectItem key={type.id} value={type.id}>
                  <div>
                    <div className="font-medium">{type.name}</div>
                    <div className="text-xs text-gray-500">
                      {type.description}
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium">Date Range</label>
          <Select
            value={dateRange}
            onValueChange={setDateRange}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              {dateRanges.map((range) => (
                <SelectItem key={range.id} value={range.id}>
                  {range.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button
          onClick={generatePDF}
          disabled={!selectedReport || !dateRange || isGenerating}
        >
          <FileText className="mr-2 h-4 w-4" />
          {isGenerating ? "Generating PDF..." : "Generate PDF"}
        </Button>
        <Button
          variant="outline"
          onClick={generateCSV}
          disabled={!selectedReport || !dateRange}
        >
          <Table className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </div>

      {/* Preview Section */}
      {selectedReport && dateRange && (
        <div className="mt-8 rounded-lg border border-gray-200 p-6 dark:border-gray-800">
          <h3 className="text-lg font-semibold">Report Preview</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium">Key Metrics</h4>
              <dl className="mt-2 space-y-2">
                <div className="flex justify-between">
                  <dt className="text-gray-600 dark:text-gray-400">Adoption Rate</dt>
                  <dd className="font-medium">{adoptionData.currentRate}%</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600 dark:text-gray-400">Active Users</dt>
                  <dd className="font-medium">{adoptionData.activeUsers}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600 dark:text-gray-400">Time to Adoption</dt>
                  <dd className="font-medium">{adoptionData.timeToAdoption} days</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600 dark:text-gray-400">ROI Impact</dt>
                  <dd className="font-medium">${adoptionData.roiImpact.toLocaleString()}</dd>
                </div>
              </dl>
            </div>
            <div>
              <h4 className="font-medium">Department Adoption</h4>
              <dl className="mt-2 space-y-2">
                {adoptionData.departmentAdoption.map((dept) => (
                  <div key={dept.name} className="flex justify-between">
                    <dt className="text-gray-600 dark:text-gray-400">{dept.name}</dt>
                    <dd className="font-medium">{dept.rate}%</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
