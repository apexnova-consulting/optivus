import Link from "next/link"
import { ArrowRight, BarChart, Brain, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    name: "Data-Driven Insights",
    description:
      "Transform raw usage data into actionable insights. Understand adoption patterns, identify bottlenecks, and measure real ROI.",
    icon: BarChart,
  },
  {
    name: "AI-Powered Analysis",
    description:
      "Leverage advanced AI to analyze user behavior, predict trends, and provide personalized recommendations for improvement.",
    icon: Brain,
  },
  {
    name: "Rapid Implementation",
    description:
      "Get up and running quickly with our streamlined onboarding process. Start measuring ROI in days, not months.",
    icon: Zap,
  },
]

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Turn AI Adoption Into ROI
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Measure, optimize, and accelerate AI tool adoption across your
                organization. Get real insights into usage patterns and ROI.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/auth/signup">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Book Demo <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Maximize Your AI Investment
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get the insights and tools you need to ensure successful AI adoption
            across your organization.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA section */}
      <div className="mt-32 sm:mt-40">
        <div className="relative isolate">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <div className="w-full flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Ready to maximize your AI ROI?
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Join forward-thinking organizations using Optivus to measure and
                  optimize their AI investments.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link href="/auth/signup">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                    >
                      Start Free Trial
                    </Button>
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    View pricing <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}