"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BRAND } from "@/lib/constants"

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb33,#06b6d433)] mix-blend-multiply" />
            <div className="absolute right-0 top-0 -mt-96 -mr-96 w-[800px] h-[800px] rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute left-0 bottom-0 -mb-96 -ml-96 w-[800px] h-[800px] rounded-full bg-cyan-500/20 blur-3xl" />
          </div>

          <div className="relative py-24 px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Ready to see ROI in 30 days?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Join leading organizations using {BRAND.COMPANY.PRODUCT} to track, measure, and optimize their technology investments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" variant="default" className="w-full sm:w-auto text-lg">
                  {BRAND.PRIMARY_CTA}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg border-2 border-white text-white hover:bg-white/10">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
