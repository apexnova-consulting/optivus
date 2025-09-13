"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function NudgeForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Redirect to nudges list
    router.push("/dashboard/nudges")
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Title</label>
            <Input
              type="text"
              placeholder="Complete your profile"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Delivery Type</label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select delivery type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="in-app">In-app</SelectItem>
                <SelectItem value="slack">Slack</SelectItem>
                <SelectItem value="teams">Microsoft Teams</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium">Target Audience</label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select target audience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Users</SelectItem>
                <SelectItem value="inactive">Inactive Users</SelectItem>
                <SelectItem value="new">New Users</SelectItem>
                <SelectItem value="power">Power Users</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              className="min-h-[150px] w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-optivus-blue focus:ring-optivus-blue dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              placeholder="Enter your nudge message..."
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Schedule</label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select schedule type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate">Send Immediately</SelectItem>
                <SelectItem value="scheduled">Schedule for Later</SelectItem>
                <SelectItem value="trigger">Trigger-based</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Success Criteria</label>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Input
                type="number"
                placeholder="Target engagement rate (%)"
                min="0"
                max="100"
              />
            </div>
            <div>
              <Input
                type="number"
                placeholder="Target completion rate (%)"
                min="0"
                max="100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/dashboard/nudges")}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Nudge"}
        </Button>
      </div>
    </form>
  )
}
