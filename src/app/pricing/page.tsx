"use client"\n\nimport { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pricing - Optivus",
  description: "Simple, transparent pricing for organizations of all sizes",
}

const tiers = [
  {
    name: "Starter",
    id: "starter",
    price: "499",
    description: "Perfect for small teams getting started with AI adoption.",
    features: [
      "Up to 50 users",
      "Basic adoption tracking",
      "ROI calculator",
      "Email nudges",
      "Monthly reports",
      "Email support",
    ],
    cta: "Start Free Trial",
    mostPopular: false,
  },
  {
    name: "Growth",
    id: "growth",
    price: "1,499",
    description: "Ideal for growing organizations scaling their AI initiatives.",
    features: [
      "Up to 250 users",
      "Advanced adoption analytics",
      "Custom ROI dashboards",
      "Multi-channel nudges",
      "Weekly reports",
      "Priority support",
      "Slack/Teams integration",
      "Custom branding",
    ],
    cta: "Start Free Trial",
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "enterprise",
    price: "Custom",
    description: "For large organizations with complex adoption needs.",
    features: [
      "Unlimited users",
      "Enterprise analytics",
      "Custom integrations",
      "Advanced security",
      "API access",
      "Dedicated success manager",
      "24/7 phone support",
      "Custom contracts",
    ],
    cta: "Contact Sales",
    mostPopular: false,
  },
]

export default function PricingPage() {
  return (
    <MainLayout>
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Simple, transparent pricing
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Choose the perfect plan for your organization. All plans include a 30-day free trial.
          </p>
        </div>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.id}
              className={`ring-1 ring-gray-200 dark:ring-gray-800 ${
                tier.mostPopular
                  ? "relative bg-gray-100 dark:bg-gray-800/50"
                  : ""
              }`}
            >
              {tier.mostPopular && (
                <p className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-optivus-blue px-4 py-1 text-sm font-semibold text-white">
                  Most popular
                </p>
              )}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {tier.name}
                </h2>
                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  {tier.price !== "Custom" && (
                    <>
                      <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ${tier.price}
                      </span>
                      <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">
                        /month
                      </span>
                    </>
                  )}
                  {tier.price === "Custom" && (
                    <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {tier.price}
                    </span>
                  )}
                </p>
                <Button
                  asChild
                  className="mt-6 w-full"
                  variant={tier.mostPopular ? "default" : "outline"}
                >
                  <Link href="/contact">{tier.cta}</Link>
                </Button>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        className="h-6 w-5 flex-none text-optivus-blue"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mx-auto max-w-4xl mt-24 sm:mt-32">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-8">
            <div>
              <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                What's included in the free trial?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                All plans include a full-featured 30-day free trial with access to all features in your selected tier. No credit card required to start.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                Can I change plans later?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                What kind of support is included?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                All plans include email support. Growth plans include priority support with faster response times. Enterprise plans include 24/7 phone support and a dedicated success manager.
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </MainLayout>
  )
}
