"use client"

import Link from "next/link"
import { ArrowRight, BarChart3, Brain, LineChart, Target, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { ClientMainLayout } from "@/components/layout/client-main-layout"
import { KPICard } from "@/components/ui/kpi-card"
import { FeatureCard } from "@/components/ui/feature-card"
import { Card } from "@/components/ui/card"

const features = [
  {
    name: "Adoption Tracking",
    description: "Monitor user engagement and adoption rates in real-time with detailed analytics and insights.",
    icon: LineChart,
  },
  {
    name: "ROI Calculator",
    description: "Quantify the business impact of your technology investments with our advanced ROI measurement tools.",
    icon: BarChart3,
  },
  {
    name: "Behavioral Nudges",
    description: "Drive adoption through personalized, AI-powered engagement strategies and timely interventions.",
    icon: Brain,
  },
  {
    name: "Impact Measurement",
    description: "Track and measure the effectiveness of your technology adoption initiatives with comprehensive metrics.",
    icon: Target,
  },
]

const stats = [
  { 
    id: 1, 
    name: "Average ROI", 
    value: "312%",
    icon: Zap,
    trend: { value: 28, isPositive: true }
  },
  { 
    id: 2, 
    name: "Time to Value", 
    value: "30 Days",
    icon: Target,
    trend: { value: 15, isPositive: true }
  },
  { 
    id: 3, 
    name: "User Adoption", 
    value: "85%",
    icon: Users,
    trend: { value: 12, isPositive: true }
  },
  { 
    id: 4, 
    name: "Customer Success", 
    value: "96%",
    icon: BarChart3,
    trend: { value: 8, isPositive: true }
  },
]

const testimonials = [
  {
    quote: "Optivus transformed how we measure and optimize our technology investments. The ROI insights are invaluable.",
    author: "Sarah Chen",
    role: "CTO, TechCorp",
  },
  {
    quote: "The adoption tracking and behavioral nudges have significantly improved our technology rollouts.",
    author: "Michael Rodriguez",
    role: "Head of Digital Transformation, Enterprise Co",
  },
  {
    quote: "Finally, a platform that makes technology ROI measurable and actionable. Highly recommended.",
    author: "Emily Thompson",
    role: "VP of Innovation, Future Inc",
  },
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

        <Container className="py-32 sm:py-48">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-7xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent pb-4">
              Turn AI Adoption Into<br />Measurable ROI
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
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
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <KPICard
                  key={stat.id}
                  title={stat.name}
                  value={stat.value}
                  icon={stat.icon}
                  trend={stat.trend}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Features Section */}
      <div className="relative isolate bg-gray-50/50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800">
        <Container className="py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
              Everything you need to drive<br />and measure adoption
            </h2>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              Our comprehensive platform helps you track, optimize, and prove the value of your technology investments.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.name}
                  title={feature.name}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Testimonials Section */}
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            See how organizations are transforming their technology adoption with Optivus.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <div className="absolute top-0 right-0 w-20 h-20 transform translate-x-6 -translate-y-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl" />
                <div className="relative p-8">
                  <p className="text-lg text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>

      {/* CTA Section */}
      <Container className="py-24 sm:py-32">
        <div className="relative isolate overflow-hidden rounded-3xl">
          <div className="mx-auto max-w-7xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-24 sm:px-24 shadow-2xl">
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