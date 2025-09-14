import { AboutHero } from "@/components/sections/about/hero"
import { Mission } from "@/components/sections/about/mission"
import { Approach } from "@/components/sections/about/approach"
import { Difference } from "@/components/sections/about/difference"
import { Proof } from "@/components/sections/about/proof"
import { Team } from "@/components/sections/about/team"
import { Careers } from "@/components/sections/about/careers"
import { CTA } from "@/components/sections/cta"

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Mission />
      <Approach />
      <Difference />
      <Proof />
      <Team />
      <Careers />
      <CTA />
    </main>
  )
}