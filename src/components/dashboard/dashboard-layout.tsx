"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  BarChart3,
  Brain,
  FileText,
  Home,
  LineChart,
  LogOut,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"

const navigation = [
  { name: "Overview", href: "/dashboard", icon: Home },
  { name: "Adoption", href: "/dashboard/adoption", icon: Users },
  { name: "ROI", href: "/dashboard/roi", icon: LineChart },
  { name: "Nudges", href: "/dashboard/nudges", icon: Brain },
  { name: "Communication", href: "/dashboard/communication", icon: MessageSquare },
  { name: "Reports", href: "/dashboard/reports", icon: FileText },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
]

const secondaryNavigation = [
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4 dark:border-gray-800 dark:bg-gray-900">
          <div className="flex h-16 shrink-0 items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-optivus-blue/10 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-optivus-blue" />
              </div>
              <span className="text-xl font-extrabold">Optivus</span>
            </Link>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          pathname === item.href
                            ? "bg-gray-50 text-optivus-blue dark:bg-gray-800"
                            : "text-gray-700 hover:bg-gray-50 hover:text-optivus-blue dark:text-gray-300 dark:hover:bg-gray-800",
                          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                        )}
                      >
                        <item.icon
                          className={cn(
                            pathname === item.href
                              ? "text-optivus-blue"
                              : "text-gray-400 group-hover:text-optivus-blue dark:text-gray-500",
                            "h-6 w-6 shrink-0"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="text-xs font-semibold leading-6 text-gray-400">
                  Settings
                </div>
                <ul role="list" className="-mx-2 mt-2 space-y-1">
                  {secondaryNavigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          pathname === item.href
                            ? "bg-gray-50 text-optivus-blue dark:bg-gray-800"
                            : "text-gray-700 hover:bg-gray-50 hover:text-optivus-blue dark:text-gray-300 dark:hover:bg-gray-800",
                          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                        )}
                      >
                        <item.icon
                          className={cn(
                            pathname === item.href
                              ? "text-optivus-blue"
                              : "text-gray-400 group-hover:text-optivus-blue dark:text-gray-500",
                            "h-6 w-6 shrink-0"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => signOut()}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-72">
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  )
}