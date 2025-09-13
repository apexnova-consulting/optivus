"use client"\n\nimport { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { BarChart3, Brain, LineChart, MessageSquare, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Product - Optivus",
  description: "Track adoption, measure ROI, and optimize your technology investments",
}

const features = [
  {
    name: "Adoption Dashboard",
    id: "adoption-tracking",
    description: "Real-time visibility into user engagement and adoption metrics.",
    icon: Users,
    details: [
      "Track user engagement in real-time",
      "Monitor adoption rates across teams",
      "Identify adoption barriers",
      "Set and track adoption goals",
      "Measure time-to-adoption",
    ],
  },
  {
    name: "ROI Calculator",
    id: "roi-calculator",
    description: "Quantify and visualize the business impact of your technology investments.",
    icon: TrendingUp,
    details: [
      "Calculate ROI with custom metrics",
      "Project future returns",
      "Track cost savings",
      "Measure productivity gains",
      "Generate ROI reports",
    ],
  },
  {
    name: "Nudge Engine",
    id: "nudge-engine",
    description: "Drive adoption through personalized, automated behavioral nudges.",
    icon: Brain,
    details: [
      "Create targeted nudge campaigns",
      "Schedule automated reminders",
      "Track nudge effectiveness",
      "A/B test messaging",
      "Multi-channel delivery",
    ],
  },
  {
    name: "Communication Analytics",
    id: "communication-analytics",
    description: "Measure and optimize your change management communications.",
    icon: MessageSquare,
    details: [
      "Track message engagement",
      "Analyze communication effectiveness",
      "Optimize message timing",
      "Identify best channels",
      "Measure response rates",
    ],
  },
]

export default function ProductPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Your complete adoption and ROI platform
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Track adoption, measure ROI, and optimize your technology investments with powerful analytics and automation.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/contact">Book Your ROI Demo</Link>
            </Button>
          </div>
        </div>
      </Container>

      {/* Features Section */}
      <div className="bg-optivus-light dark:bg-optivus-dark/50">
        <Container className="py-24 sm:py-32">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className={`grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 ${
                featureIdx % 2 === 1 ? "lg:flex-row-reverse" : ""
              } ${featureIdx !== 0 ? "mt-24 pt-24 border-t border-gray-200 dark:border-gray-800" : ""}`}
              id={feature.id}
            >
              <div className="lg:pr-8">
                <div className="lg:max-w-lg">
                  <feature.icon className="h-8 w-8 text-optivus-blue" />
                  <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    {feature.name}
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                  <ul role="list" className="mt-8 space-y-4">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex gap-x-3">
                        <div className="h-6 w-6 flex-none rounded-full bg-optivus-blue/10 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-optivus-blue" />
                        </div>
                        <span className="text-base leading-7 text-gray-600 dark:text-gray-300">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Card className="flex items-center justify-center p-12">
                <div className="relative aspect-[4/3] w-full">
                  {/* Placeholder for feature screenshot/demo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-optivus-blue to-optivus-teal opacity-10 rounded-xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <feature.icon className="h-24 w-24 text-optivus-blue opacity-30" />
                  </div>
                </div>
              </Card>
            </div>
          ))}
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
    </MainLayout>
  )
}
