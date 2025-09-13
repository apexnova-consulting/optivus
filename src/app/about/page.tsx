"use client"\n\nimport { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BarChart3, Brain, Target, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "About - Optivus",
  description: "Learn about our mission to optimize technology adoption and maximize ROI",
}

const values = [
  {
    name: "Data-Driven Decisions",
    description:
      "We believe in making decisions based on real data, not guesswork. Our platform provides actionable insights that drive measurable results.",
    icon: BarChart3,
  },
  {
    name: "User-Centric Approach",
    description:
      "Success starts with user adoption. We focus on understanding and improving the user experience to drive sustainable change.",
    icon: Users,
  },
  {
    name: "Continuous Optimization",
    description:
      "Technology adoption is a journey, not a destination. We help organizations continuously measure, learn, and improve.",
    icon: Target,
  },
  {
    name: "Behavioral Science",
    description:
      "Our nudge engine is built on proven behavioral science principles that help drive lasting behavioral change.",
    icon: Brain,
  },
]

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Our Mission
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            We're on a mission to help organizations maximize the value of their technology investments through data-driven adoption strategies and ROI measurement.
          </p>
        </div>
      </Container>

      {/* Story Section */}
      <div className="bg-optivus-light dark:bg-optivus-dark/50">
        <Container className="py-24 sm:py-32">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              The Optivus Story
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Optivus was born from a simple observation: organizations struggle to measure and maximize the return on their technology investments. Despite investing heavily in new tools and platforms, many companies face low adoption rates and unclear ROI.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              We built Optivus to solve this challenge. By combining adoption tracking, behavioral science, and ROI measurement, we help organizations drive successful technology adoption and prove business impact.
            </p>
          </div>
        </Container>
      </div>

      {/* Values Section */}
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Our Values
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            These core principles guide everything we do at Optivus.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {values.map((value) => (
              <div key={value.name} className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-optivus-blue">
                    <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {value.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      {/* CTA Section */}
      <div className="bg-optivus-light dark:bg-optivus-dark/50">
        <Container className="py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Join us in transforming technology adoption
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              See how Optivus can help your organization drive adoption and maximize ROI.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/contact">
                  Book Your ROI Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  )
}
