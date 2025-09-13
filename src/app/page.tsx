import { ClientLayout } from "@/components/layout/client-layout"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import Link from "next/link"
import { ArrowRight, Brain, TrendingUp, Users } from "lucide-react"

export default function HomePage() {
  return (
    <ClientLayout>
      {/* Hero Section */}
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Turn AI Adoption Into Measurable ROI
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Optivus tracks adoption, measures communication, and proves business impact — in 30 days or less.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/contact">Book Your ROI Demo</Link>
            </Button>
            <Button variant="ghost" size="lg" className="group" asChild>
              <Link href="/product" className="flex items-center">
                Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>

      {/* Features Section */}
      <div className="bg-optivus-light dark:bg-optivus-dark/50">
        <Container className="py-24 sm:py-32">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-optivus-blue">Maximize Impact</h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Everything you need to drive and measure adoption
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Our comprehensive platform helps you track, optimize, and prove the value of your technology investments.
            </p>
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Ready to optimize your technology ROI?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Join leading organizations using Optivus to track, measure, and optimize their technology investments.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/contact">Book Your ROI Demo</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </Container>
    </ClientLayout>
  )
}