"use client"

import { useState } from "react"
import { Check, X, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

const users = [
  {
    name: "Sarah Chen",
    email: "sarah@example.com",
    team: "Engineering",
    toolsUsed: ["ChatGPT", "GitHub Copilot"],
    hoursSaved: 12,
    lastActive: "2 hours ago",
  },
  {
    name: "Michael Johnson",
    email: "michael@example.com",
    team: "Sales",
    toolsUsed: ["ChatGPT"],
    hoursSaved: 8,
    lastActive: "1 day ago",
  },
  {
    name: "Emily Davis",
    email: "emily@example.com",
    team: "Marketing",
    toolsUsed: ["ChatGPT", "Claude"],
    hoursSaved: 15,
    lastActive: "3 hours ago",
  },
  {
    name: "David Wilson",
    email: "david@example.com",
    team: "Support",
    toolsUsed: ["ChatGPT", "Claude"],
    hoursSaved: 10,
    lastActive: "5 hours ago",
  },
  {
    name: "Lisa Brown",
    email: "lisa@example.com",
    team: "Product",
    toolsUsed: ["GitHub Copilot"],
    hoursSaved: 6,
    lastActive: "1 hour ago",
  },
]

export function UserTable() {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])

  const toggleUser = (email: string) => {
    setSelectedUsers((current) =>
      current.includes(email)
        ? current.filter((e) => e !== email)
        : [...current, email]
    )
  }

  const toggleAll = () => {
    setSelectedUsers((current) =>
      current.length === users.length ? [] : users.map((user) => user.email)
    )
  }

  return (
    <div className="flow-root">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                    <input
                      type="checkbox"
                      className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                      checked={selectedUsers.length === users.length}
                      onChange={toggleAll}
                    />
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Team
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Tools Used
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Hours Saved
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Last Active
                  </th>
                  <th
                    scope="col"
                    className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                  >
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {users.map((user) => (
                  <tr key={user.email}>
                    <td className="relative px-7 sm:w-12 sm:px-6">
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                        checked={selectedUsers.includes(user.email)}
                        onChange={() => toggleUser(user.email)}
                      />
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold">
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">
                            {user.name}
                          </div>
                          <div className="text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {user.team}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="flex gap-1">
                        {user.toolsUsed.map((tool) => (
                          <span
                            key={tool}
                            className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {user.hoursSaved}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {user.lastActive}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}