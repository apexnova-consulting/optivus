"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProductHero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-8">
            Adoption intelligence for modern enterprises
          </h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-12">
            Get real-time insights into your technology adoption, measure ROI, and drive meaningful change across your organization.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="default" className="text-lg">
              Start a Free Pilot
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
