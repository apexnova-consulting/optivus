"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bell, Calendar, Users, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface NudgeFormProps {
  onSubmit: (data: any) => void
  initialData?: any
}

export function NudgeForm({ onSubmit, initialData }: NudgeFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    type: initialData?.type || "reminder",
    content: initialData?.content || "",
    schedule: initialData?.schedule || "weekly",
    targetTeam: initialData?.targetTeam || "",
    deliveryChannel: initialData?.deliveryChannel || "slack",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
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
          {initialData ? "Edit Nudge" : "Create New Nudge"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Title
            </label>
            <div className="relative">
              <Bell className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter nudge title"
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Type
            </label>
            <Select
              value={formData.type}
              onChange={(value) => setFormData({ ...formData, type: value })}
              options={[
                { label: "Reminder", value: "reminder" },
                { label: "Success Story", value: "success_story" },
                { label: "Quick Tip", value: "tip" },
              ]}
              icon={MessageSquare}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Content
            </label>
            <Textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Enter nudge content"
              rows={4}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Schedule
            </label>
            <Select
              value={formData.schedule}
              onChange={(value) => setFormData({ ...formData, schedule: value })}
              options={[
                { label: "Weekly", value: "weekly" },
                { label: "Bi-weekly", value: "biweekly" },
                { label: "Monthly", value: "monthly" },
                { label: "One-time", value: "once" },
              ]}
              icon={Calendar}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Target Team
            </label>
            <Select
              value={formData.targetTeam}
              onChange={(value) => setFormData({ ...formData, targetTeam: value })}
              options={[
                { label: "All Teams", value: "all" },
                { label: "Engineering", value: "engineering" },
                { label: "Sales", value: "sales" },
                { label: "Marketing", value: "marketing" },
                { label: "Support", value: "support" },
              ]}
              icon={Users}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Delivery Channel
            </label>
            <Select
              value={formData.deliveryChannel}
              onChange={(value) => setFormData({ ...formData, deliveryChannel: value })}
              options={[
                { label: "Slack", value: "slack" },
                { label: "Email", value: "email" },
                { label: "In-app", value: "inapp" },
              ]}
              icon={Bell}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
            >
              {initialData ? "Update Nudge" : "Create Nudge"}
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  )
}
