"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bell, Calendar, Users, MessageSquare, Edit, Trash2, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Nudge {
  id: string
  title: string
  type: string
  content: string
  schedule: string
  targetTeam: string
  deliveryChannel: string
  status: "active" | "paused"
  stats: {
    sent: number
    opened: number
    clicked: number
    adoptionLift: number
  }
}

interface NudgeListProps {
  nudges: Nudge[]
  onEdit: (nudge: Nudge) => void
  onDelete: (id: string) => void
  onToggleStatus: (id: string) => void
}

export function NudgeList({ nudges, onEdit, onDelete, onToggleStatus }: NudgeListProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 blur-xl" />
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
          Active Nudges
        </h3>

        <div className="space-y-6">
          {nudges.map((nudge) => (
            <div
              key={nudge.id}
              className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 relative group"
            >
              {/* Status Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                nudge.status === "active"
                  ? "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-400"
              }`}>
                {nudge.status === "active" ? "Active" : "Paused"}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg">
                    {nudge.type === "reminder" && <Bell className="h-5 w-5 text-blue-600" />}
                    {nudge.type === "success_story" && <MessageSquare className="h-5 w-5 text-blue-600" />}
                    {nudge.type === "tip" && <MessageSquare className="h-5 w-5 text-blue-600" />}
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {nudge.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      {nudge.content}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Schedule
                    </div>
                    <div className="mt-1 flex items-center text-sm text-gray-900 dark:text-white">
                      <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                      {nudge.schedule}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Target Team
                    </div>
                    <div className="mt-1 flex items-center text-sm text-gray-900 dark:text-white">
                      <Users className="h-4 w-4 mr-1 text-gray-400" />
                      {nudge.targetTeam}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Channel
                    </div>
                    <div className="mt-1 flex items-center text-sm text-gray-900 dark:text-white">
                      <Bell className="h-4 w-4 mr-1 text-gray-400" />
                      {nudge.deliveryChannel}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Adoption Lift
                    </div>
                    <div className="mt-1 text-sm font-medium text-green-600">
                      +{nudge.stats.adoptionLift}%
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Sent
                    </div>
                    <div className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                      {nudge.stats.sent}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Opened
                    </div>
                    <div className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                      {nudge.stats.opened}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Clicked
                    </div>
                    <div className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                      {nudge.stats.clicked}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end space-x-2 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onToggleStatus(nudge.id)}
                  >
                    {nudge.status === "active" ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEdit(nudge)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onDelete(nudge.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
