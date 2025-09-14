import { PricingHero } from "@/components/sections/pricing/hero"
import { ProductPlans } from "@/components/sections/pricing/product-plans"
import { ConsultingServices } from "@/components/sections/pricing/consulting-services"
import { FAQ } from "@/components/sections/pricing/faq"
import { CTA } from "@/components/sections/cta"

export default function PricingPage() {
  return (
    <main>
      <PricingHero />
      <ProductPlans />
      <ConsultingServices />
      <FAQ />
      <CTA />
    </main>
  )
}