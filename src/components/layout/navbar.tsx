"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const navigation = [
  { name: "Product", href: "/product" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] opacity-70 blur group-hover:opacity-100 transition-opacity"></div>
                <ArrowUpRight className="relative h-8 w-8 text-[#2563EB]" />
              </div>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Optivus
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:gap-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-semibold leading-6 transition-colors duration-200 ${
                    pathname === item.href 
                      ? "text-[#2563EB]" 
                      : "text-gray-600 hover:text-[#2563EB]"
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <span className="absolute -bottom-[22px] left-0 h-0.5 w-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4]" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-6">
            <Link href="/login" className="text-sm font-semibold leading-6 text-gray-600 hover:text-[#2563EB] transition-colors">
              Log in
            </Link>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:from-[#1D4ED8] hover:to-[#0891B2] text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25">
                Book Your ROI Demo
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                    pathname === item.href 
                      ? "text-[#2563EB]" 
                      : "text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="py-6">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
                <Link
                  href="/contact"
                  className="mt-4 block rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] px-3 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:from-[#1D4ED8] hover:to-[#0891B2]"
                >
                  Book Your ROI Demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}