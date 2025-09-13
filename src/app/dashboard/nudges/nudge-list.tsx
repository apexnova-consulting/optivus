"use client"

import * as React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit2, MoreVertical, Pause, Play, Trash2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

interface Nudge {
  id: number
  title: string
  type: string
  status: string
  engagement: number
  sentCount: number
  clickRate: number
}

interface NudgeListProps {
  nudges: Nudge[]
}

export function NudgeList({ nudges }: NudgeListProps) {
  return (
    <div className="relative overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Engagement</TableHead>
            <TableHead className="text-right">Sent</TableHead>
            <TableHead className="text-right">Click Rate</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {nudges.map((nudge) => (
            <TableRow key={nudge.id}>
              <TableCell className="font-medium">{nudge.title}</TableCell>
              <TableCell>
                <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset">
                  {nudge.type}
                </span>
              </TableCell>
              <TableCell>
                <span
                  className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                    nudge.status === "active"
                      ? "bg-optivus-success/10 text-optivus-success ring-optivus-success/30"
                      : "bg-gray-100 text-gray-600 ring-gray-500/30 dark:bg-gray-800 dark:text-gray-400"
                  } ring-1 ring-inset`}
                >
                  {nudge.status}
                </span>
              </TableCell>
              <TableCell className="text-right">{nudge.engagement}%</TableCell>
              <TableCell className="text-right">{nudge.sentCount}</TableCell>
              <TableCell className="text-right">{nudge.clickRate}%</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="h-8 w-8 p-0"
                    >
                      <span className="sr-only">Open menu</span>
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/nudges/${nudge.id}`}>
                        <Edit2 className="mr-2 h-4 w-4" />
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {nudge.status === "active" ? (
                        <>
                          <Pause className="mr-2 h-4 w-4" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="mr-2 h-4 w-4" />
                          Activate
                        </>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600 dark:text-red-400">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
