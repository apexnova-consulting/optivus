"use client"

import { ClientMainLayout } from "@/components/layout/client-main-layout"
import { Hero } from "@/components/sections/hero"
import { Stats } from "@/components/sections/stats"
import { FeatureCard } from "@/components/ui/feature-card"
import { Card } from "@/components/ui/card"
import { BarChart3, Brain, LineChart, Target } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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
      <Hero />

      {/* Stats Section */}
      <div className="py-16 sm:py-24">
        <Stats />
      </div>

      {/* Features Section */}
      <div className="relative py-24 sm:py-32 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Everything you need to drive<br />and measure adoption
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
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
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              See how organizations are transforming their technology adoption with Optivus.
            </p>
          </div>

          <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-r from-[#2563EB]/10 to-[#06B6D4]/10 blur-2xl transform rotate-45" />
                
                <div className="relative p-8">
                  <p className="text-lg text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB]/0 via-[#2563EB]/30 to-[#2563EB]/0" />
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="relative isolate overflow-hidden bg-gradient-to-r from-[#2563EB] to-[#06B6D4] px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <div className="mx-auto max-w-2xl">
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
        </div>
      </div>
    </ClientMainLayout>
  )
}