"use client"

import Link from "next/link"
import { ArrowRight, BarChart3, Brain, LineChart, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { ClientMainLayout } from "@/components/layout/client-main-layout"

const features = [
  {
    name: "Adoption Tracking",
    description: "Monitor user engagement and adoption rates in real-time with detailed analytics.",
    icon: LineChart,
  },
  {
    name: "ROI Calculator",
    description: "Quantify the business impact of your technology investments with our advanced ROI tools.",
    icon: BarChart3,
  },
  {
    name: "Behavioral Nudges",
    description: "Drive adoption through personalized, AI-powered engagement strategies.",
    icon: Brain,
  },
  {
    name: "Impact Measurement",
    description: "Track and measure the effectiveness of your technology adoption initiatives.",
    icon: Target,
  },
]

export default function HomePage() {
  return (
    <ClientMainLayout>
      {/* Hero Section */}
      <Container className="pt-24 sm:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Turn AI Adoption Into Measurable ROI
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Optivus tracks adoption, measures communication, and proves business impact — in 30 days or less.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                Book Your ROI Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/product">
              <Button variant="outline" size="lg">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </Container>

      {/* Features Section */}
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to drive and measure adoption
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our comprehensive platform helps you track, optimize, and prove the value of your technology investments.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="relative p-8 bg-card rounded-2xl shadow-lg">
                <div className="mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">{feature.name}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* CTA Section */}
      <Container className="py-24 sm:py-32">
        <div className="relative isolate rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-24 text-center shadow-2xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to optimize your technology ROI?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Join leading organizations using Optivus to track, measure, and optimize their technology investments.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Book Your ROI Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </ClientMainLayout>
  )
}