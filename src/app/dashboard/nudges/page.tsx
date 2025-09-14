"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NudgeList } from "@/components/dashboard/nudges/nudge-list"

// Mock data - replace with real data from Supabase
const mockNudges = [
  {
    id: "1",
    title: "Weekly Check-in",
    type: "reminder",
    content: "Don't forget to log your activities in the system!",
    schedule: "weekly",
    targetTeam: "All Teams",
    deliveryChannel: "slack",
    status: "active" as const,
    stats: {
      sent: 150,
      opened: 120,
      clicked: 85,
      adoptionLift: 12,
    },
  },
  {
    id: "2",
    title: "Success Story: Time Savings",
    type: "success_story",
    content: "Sarah from Sales saved 5 hours this week using our new automation!",
    schedule: "biweekly",
    targetTeam: "Sales",
    deliveryChannel: "slack",
    status: "active" as const,
    stats: {
      sent: 75,
      opened: 65,
      clicked: 45,
      adoptionLift: 8,
    },
  },
  {
    id: "3",
    title: "Quick Tip: Shortcuts",
    type: "tip",
    content: "Use Cmd+K to quickly access any feature!",
    schedule: "monthly",
    targetTeam: "Engineering",
    deliveryChannel: "inapp",
    status: "paused" as const,
    stats: {
      sent: 200,
      opened: 180,
      clicked: 150,
      adoptionLift: 15,
    },
  },
]

export default function NudgesPage() {
  const [nudges, setNudges] = useState(mockNudges)

  const handleEdit = (nudge: any) => {
    // Navigate to edit page
    window.location.href = `/dashboard/nudges/edit/${nudge.id}`
  }

  const handleDelete = async (id: string) => {
    // Add confirmation dialog
    if (!confirm("Are you sure you want to delete this nudge?")) return

    try {
      // Delete from Supabase
      // await supabase.from("nudges").delete().eq("id", id)
      
      // Update local state
      setNudges(nudges.filter((nudge) => nudge.id !== id))
    } catch (error) {
      console.error("Error deleting nudge:", error)
    }
  }

  const handleToggleStatus = async (id: string) => {
    try {
      // Update local state
      setNudges(nudges.map((nudge) =>
        nudge.id === id
          ? { ...nudge, status: nudge.status === "active" ? "paused" : "active" }
          : nudge
      ))

      // Update in Supabase
      // await supabase
      //   .from("nudges")
      //   .update({ status: nudge.status === "active" ? "paused" : "active" })
      //   .eq("id", id)
    } catch (error) {
      console.error("Error toggling nudge status:", error)
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Nudge Engine
        </h2>
        <Link href="/dashboard/nudges/create">
          <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
            <Plus className="h-5 w-5 mr-2" />
            Create New Nudge
          </Button>
        </Link>
      </div>

      <NudgeList
        nudges={nudges}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggleStatus={handleToggleStatus}
      />
    </div>
  )
}