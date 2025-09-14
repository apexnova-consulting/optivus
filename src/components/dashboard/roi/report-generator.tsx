"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, Download, Share } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"

interface ReportData {
  adoptionRate: number
  hoursSaved: number
  costSavings: number
  commScore: number
  teamBreakdown: Array<{
    team: string
    adoption: number
    hoursSaved: number
  }>
}

const mockReportData: ReportData = {
  adoptionRate: 85,
  hoursSaved: 324,
  costSavings: 45200,
  commScore: 4.2,
  teamBreakdown: [
    { team: "Engineering", adoption: 92, hoursSaved: 120 },
    { team: "Sales", adoption: 78, hoursSaved: 84 },
    { team: "Marketing", adoption: 85, hoursSaved: 72 },
    { team: "Support", adoption: 88, hoursSaved: 48 },
  ],
}

export function ReportGenerator() {
  const [reportType, setReportType] = useState("pdf")
  const [customTitle, setCustomTitle] = useState("")
  const [loading, setLoading] = useState(false)

  const generatePDF = async () => {
    setLoading(true)
    try {
      const doc = new jsPDF()
      const title = customTitle || "ROI Report"

      // Add header with logo placeholder
      doc.setFontSize(20)
      doc.setTextColor(37, 99, 235) // Blue
      doc.text("Optivus", 20, 20)
      
      // Add title
      doc.setFontSize(24)
      doc.setTextColor(0, 0, 0)
      doc.text(title, 20, 40)

      // Add date
      doc.setFontSize(12)
      doc.setTextColor(107, 114, 128) // Gray
      doc.text(new Date().toLocaleDateString(), 20, 50)

      // Add summary section
      doc.setFontSize(16)
      doc.setTextColor(0, 0, 0)
      doc.text("Summary", 20, 70)

      const summaryData = [
        ["Adoption Rate", `${mockReportData.adoptionRate}%`],
        ["Hours Saved", mockReportData.hoursSaved.toString()],
        ["Cost Savings", `$${mockReportData.costSavings.toLocaleString()}`],
        ["Communication Score", `${mockReportData.commScore}/5`],
      ]

      autoTable(doc, {
        startY: 80,
        head: [["Metric", "Value"]],
        body: summaryData,
        theme: "grid",
        styles: { fontSize: 12 },
        headStyles: { fillColor: [37, 99, 235] },
      })

      // Add team breakdown section
      doc.setFontSize(16)
      doc.text("Team Breakdown", 20, doc.lastAutoTable.finalY + 20)

      const teamData = mockReportData.teamBreakdown.map((team) => [
        team.team,
        `${team.adoption}%`,
        team.hoursSaved.toString(),
      ])

      autoTable(doc, {
        startY: doc.lastAutoTable.finalY + 30,
        head: [["Team", "Adoption", "Hours Saved"]],
        body: teamData,
        theme: "grid",
        styles: { fontSize: 12 },
        headStyles: { fillColor: [37, 99, 235] },
      })

      // Save the PDF
      doc.save(`${title.toLowerCase().replace(/\s+/g, "-")}.pdf`)
    } catch (error) {
      console.error("Error generating PDF:", error)
    } finally {
      setLoading(false)
    }
  }

  const generateCSV = () => {
    setLoading(true)
    try {
      // Create CSV content
      const headers = ["Metric", "Value"]
      const summaryRows = [
        ["Adoption Rate", `${mockReportData.adoptionRate}%`],
        ["Hours Saved", mockReportData.hoursSaved],
        ["Cost Savings", `$${mockReportData.costSavings}`],
        ["Communication Score", `${mockReportData.commScore}/5`],
      ]
      const teamHeaders = ["Team", "Adoption", "Hours Saved"]
      const teamRows = mockReportData.teamBreakdown.map((team) => [
        team.team,
        `${team.adoption}%`,
        team.hoursSaved,
      ])

      const csvContent = [
        headers.join(","),
        ...summaryRows.map((row) => row.join(",")),
        "",
        teamHeaders.join(","),
        ...teamRows.map((row) => row.join(",")),
      ].join("\n")

      // Create and download CSV file
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
      const link = document.createElement("a")
      const url = URL.createObjectURL(blob)
      link.setAttribute("href", url)
      link.setAttribute("download", `${customTitle || "roi-report"}.csv`)
      link.style.visibility = "hidden"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Error generating CSV:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleGenerate = () => {
    if (reportType === "pdf") {
      generatePDF()
    } else {
      generateCSV()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 blur-xl" />
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
          Generate Report
        </h3>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Report Format
            </label>
            <Select
              value={reportType}
              onChange={(value) => setReportType(value)}
              options={[
                { label: "PDF Report", value: "pdf" },
                { label: "CSV Export", value: "csv" },
              ]}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Custom Title (Optional)
            </label>
            <Input
              value={customTitle}
              onChange={(e) => setCustomTitle(e.target.value)}
              placeholder="Enter report title"
            />
          </div>

          <div className="flex gap-4">
            <Button
              onClick={handleGenerate}
              className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
              disabled={loading}
            >
              <Download className="mr-2 h-5 w-5" />
              {loading ? "Generating..." : "Generate Report"}
            </Button>

            <Button variant="outline">
              <Share className="mr-2 h-5 w-5" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
