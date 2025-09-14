import { ProductHero } from "@/components/sections/product/hero"
import { Dashboard } from "@/components/sections/product/dashboard"
import { ROIAnalytics } from "@/components/sections/product/roi-analytics"
import { NudgeEngine } from "@/components/sections/product/nudge-engine"
import { Integrations } from "@/components/sections/product/integrations"
import { CTA } from "@/components/sections/cta"

export default function ProductPage() {
  return (
    <main>
      <ProductHero />
      <Dashboard />
      <ROIAnalytics />
      <NudgeEngine />
      <Integrations />
      <CTA />
    </main>
  )
}