"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import {
  BarChart,
  Calculator,
  Bell,
  Settings,
  Home,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart },
  { name: "ROI Calculator", href: "/dashboard/roi", icon: Calculator },
  { name: "Nudges", href: "/dashboard/nudges", icon: Bell },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export function AppNav() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const supabase = createClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    window.location.href = "/"
  }

  return (
    <>
      {/* Desktop navigation */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Optivus
              </span>
            </Link>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  <li>
                    <Link
                      href="/"
                      className={cn(
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                        pathname === "/"
                          ? "bg-gray-50 text-blue-600"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      )}
                    >
                      <Home
                        className={cn(
                          "h-6 w-6 shrink-0",
                          pathname === "/"
                            ? "text-blue-600"
                            : "text-gray-400 group-hover:text-blue-600"
                        )}
                        aria-hidden="true"
                      />
                      Home
                    </Link>
                  </li>
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                          pathname === item.href
                            ? "bg-gray-50 text-blue-600"
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        )}
                      >
                        <item.icon
                          className={cn(
                            "h-6 w-6 shrink-0",
                            pathname === item.href
                              ? "text-blue-600"
                              : "text-gray-400 group-hover:text-blue-600"
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
                  onClick={handleSignOut}
                  variant="ghost"
                  className="group -mx-2 flex w-full gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                >
                  <LogOut
                    className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-blue-600"
                    aria-hidden="true"
                  />
                  Sign out
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="lg:hidden">
        <div className="flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Optivus
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu dialog */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-900/80"
        />

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          className="fixed inset-0 flex"
        >
          <div className="relative mr-16 flex w-full max-w-xs flex-1">
            <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
              <button
                type="button"
                className="-m-2.5 p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
                <X className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>

            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
              <div className="flex h-16 shrink-0 items-center">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Optivus
                  </span>
                </Link>
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      <li>
                        <Link
                          href="/"
                          className={cn(
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                            pathname === "/"
                              ? "bg-gray-50 text-blue-600"
                              : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <Home
                            className={cn(
                              "h-6 w-6 shrink-0",
                              pathname === "/"
                                ? "text-blue-600"
                                : "text-gray-400 group-hover:text-blue-600"
                            )}
                            aria-hidden="true"
                          />
                          Home
                        </Link>
                      </li>
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className={cn(
                              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                              pathname === item.href
                                ? "bg-gray-50 text-blue-600"
                                : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <item.icon
                              className={cn(
                                "h-6 w-6 shrink-0",
                                pathname === item.href
                                  ? "text-blue-600"
                                  : "text-gray-400 group-hover:text-blue-600"
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
                      onClick={handleSignOut}
                      variant="ghost"
                      className="group -mx-2 flex w-full gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      <LogOut
                        className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-blue-600"
                        aria-hidden="true"
                      />
                      Sign out
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
