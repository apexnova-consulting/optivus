"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative min-h-[80vh] bg-blue-600 flex items-center justify-center">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-500"></div>
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Turn AI Adoption Into ROI
        </h1>
        <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
          Optivus tracks adoption, measures communication, and proves business impact — in 30 days or less.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button variant="default" size="lg" className="w-full sm:w-auto">
              Book Your ROI Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/product">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Learn more
            </Button>
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  )
}