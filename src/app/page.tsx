"use client"

import { Hero } from "@/components/sections/hero"
import { Stats } from "@/components/sections/stats"
import { BarChart3, Brain, LineChart, Target } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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
    <main>
      <Hero />
      <Stats />

      {/* Features Section */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to drive<br />and measure adoption
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our comprehensive platform helps you track, optimize, and prove the value of your technology investments.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.name}
                  className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.name}</h3>
                  </div>
                  <p className="mt-4 text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              See how organizations are transforming their technology adoption with Optivus.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <p className="text-lg text-gray-600 italic mb-8">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to optimize your technology ROI?
            </h2>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              Join leading organizations using Optivus to track, measure, and optimize their technology investments.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="default" size="lg">
                  Book Your ROI Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}