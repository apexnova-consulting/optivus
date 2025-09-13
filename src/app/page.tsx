import { MainLayout } from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, BarChart3, Brain, LineChart, MessageSquare, TrendingUp, Users } from "lucide-react"

const features = [
  {
    name: "Adoption Tracking",
    description: "Monitor user engagement and adoption rates in real-time with intuitive dashboards and metrics.",
    icon: Users,
  },
  {
    name: "ROI Measurement",
    description: "Calculate and visualize the return on investment from your technology implementations.",
    icon: TrendingUp,
  },
  {
    name: "Behavioral Nudges",
    description: "Drive adoption through personalized, automated nudges that encourage user engagement.",
    icon: Brain,
  },
  {
    name: "Communication Analytics",
    description: "Track the effectiveness of your change management and training communications.",
    icon: MessageSquare,
  },
  {
    name: "Performance Metrics",
    description: "Measure and analyze key performance indicators to optimize your technology investments.",
    icon: BarChart3,
  },
  {
    name: "Impact Reports",
    description: "Generate comprehensive reports that demonstrate the business value of your initiatives.",
    icon: LineChart,
  },
]

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
                  Turn AI Adoption Into Measurable ROI
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  Optivus tracks adoption, measures communication, and proves business impact — in 30 days or less.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Book Your ROI Demo
                    </Link>
                  </Button>
                  <Button variant="ghost" size="lg" className="group" asChild>
                    <Link href="/product" className="flex items-center">
                      Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
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
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-optivus-blue" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </Card>
            ))}
          </dl>
        </div>
      </Container>

      {/* CTA Section */}
      <div className="bg-optivus-light dark:bg-optivus-dark/50">
        <Container className="py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Ready to maximize your technology ROI?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              Book a demo today and see how Optivus can help you track, measure, and optimize your technology investments.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/contact">
                  Book Your ROI Demo
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  )
}