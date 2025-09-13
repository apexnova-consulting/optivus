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

const stats = [
  { id: 1, name: "Average ROI", value: "312%" },
  { id: 2, name: "Time to Value", value: "30 Days" },
  { id: 3, name: "User Adoption", value: "85%" },
  { id: 4, name: "Customer Success", value: "96%" },
]

export default function HomePage() {
  return (
    <ClientMainLayout>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-x-0 top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-cyan-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <Container className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-7xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent pb-4">
              Turn AI Adoption Into<br />Measurable ROI
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              Optivus tracks adoption, measures communication, and proves business impact — in 30 days or less.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 h-14 px-8 text-lg">
                  Book Your ROI Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/product">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        </Container>

        {/* Stats Section */}
        <Container className="pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-muted-foreground">{stat.name}</dt>
                  <dd className="order-first text-5xl font-semibold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </div>

      {/* Features Section */}
      <div className="relative isolate bg-gray-50 dark:bg-gray-900">
        <Container className="py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
              Everything you need to drive<br />and measure adoption
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our comprehensive platform helps you track, optimize, and prove the value of your technology investments.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-xl ring-1 ring-gray-200 dark:ring-gray-800">
                  <div className="p-10">
                    <div className="flex items-center justify-between gap-x-4">
                      <feature.icon className="h-12 w-12 text-blue-600" />
                      <h3 className="text-2xl font-semibold leading-7">{feature.name}</h3>
                    </div>
                    <p className="mt-6 text-base leading-7 text-muted-foreground">{feature.description}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-600/0 via-blue-600/40 to-blue-600/0" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <Container className="py-24 sm:py-32">
        <div className="relative isolate overflow-hidden rounded-3xl">
          <div className="mx-auto max-w-7xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-24 sm:px-24 shadow-2xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to optimize your technology ROI?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Join leading organizations using Optivus to track, measure, and optimize their technology investments.
              </p>
              <div className="mt-10 flex items-center justify-center gap-6">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="h-14 px-8 text-lg">
                    Book Your ROI Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-transparent text-white border-white hover:bg-white/10">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ClientMainLayout>
  )
}