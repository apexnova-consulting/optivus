import Link from "next/link"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Starter",
    id: "starter",
    href: "/contact?plan=starter",
    priceMonthly: "$499",
    description: "Perfect for teams just starting with AI tools.",
    features: [
      "Up to 50 users",
      "Basic adoption analytics",
      "Weekly ROI reports",
      "Email support",
      "Basic Slack integration",
      "1 tool connection",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Growth",
    id: "growth",
    href: "/contact?plan=growth",
    priceMonthly: "$999",
    description: "For growing teams with multiple AI tools.",
    features: [
      "Up to 200 users",
      "Advanced adoption analytics",
      "Real-time ROI dashboard",
      "Priority email & chat support",
      "Advanced Slack integration",
      "Up to 5 tool connections",
      "Custom nudge campaigns",
      "Team performance insights",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    id: "enterprise",
    href: "/contact?plan=enterprise",
    priceMonthly: "Custom",
    description: "For organizations requiring custom solutions.",
    features: [
      "Unlimited users",
      "Enterprise analytics suite",
      "Custom ROI reporting",
      "24/7 priority support",
      "Full API access",
      "Unlimited tool connections",
      "Custom integrations",
      "Dedicated success manager",
      "SSO & advanced security",
    ],
    cta: "Contact Sales",
  },
]

const consulting = [
  {
    name: "AI ROI Audit",
    price: "$2,499",
    description:
      "A comprehensive analysis of your current AI tools and adoption metrics.",
    features: [
      "Tool usage analysis",
      "Adoption bottleneck identification",
      "ROI calculation & benchmarking",
      "Actionable recommendations",
      "2-week engagement",
    ],
    cta: "Book Audit",
    href: "/contact?service=audit",
  },
  {
    name: "Rapid Adoption Sprint",
    price: "$4,999",
    description:
      "4-week intensive program to accelerate AI tool adoption across your organization.",
    features: [
      "Custom adoption strategy",
      "Team training workshops",
      "Implementation support",
      "Success metrics setup",
      "4-week engagement",
    ],
    cta: "Book Consultation",
    href: "/contact?service=sprint",
  },
  {
    name: "Fractional AI Coach",
    price: "$1,999/mo",
    description:
      "Ongoing guidance and support for your AI implementation journey.",
    features: [
      "Weekly strategy sessions",
      "Implementation oversight",
      "Team training & support",
      "Progress tracking",
      "Minimum 3-month engagement",
    ],
    cta: "Book Consultation",
    href: "/contact?service=coaching",
  },
]

function CheckIcon({ className }: { className?: string }) {
  return <Check className={className} aria-hidden="true" />
}

export default function PricingPage() {
  return (
    <>
      {/* Pricing section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-base font-semibold leading-7 text-blue-600">
              Pricing
            </h1>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Simple pricing, powerful features
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Choose the plan that best fits your organization's needs. All plans
            include core ROI tracking features.
          </p>

          {/* Pricing tiers */}
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier, tierIdx) => (
              <div
                key={tier.id}
                className={`${
                  tier.featured
                    ? "z-10 bg-white shadow-xl ring-1 ring-gray-900/10"
                    : "bg-white/60 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0"
                } rounded-3xl p-8 xl:p-10`}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h2
                    id={tier.id}
                    className="text-lg font-semibold leading-8 text-gray-900"
                  >
                    {tier.name}
                  </h2>
                  {tier.featured && (
                    <p className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600">
                      Most popular
                    </p>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.priceMonthly}
                  </span>
                  {tier.id !== "enterprise" && (
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      /month
                    </span>
                  )}
                </p>
                <Link
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={`${
                    tier.featured
                      ? "bg-blue-600 text-white shadow-sm hover:bg-blue-500"
                      : "text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300"
                  } mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
                >
                  {tier.cta}
                </Link>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Consulting section */}
      <div className="relative isolate bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">
              Consulting Services
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Expert guidance when you need it
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
            Get personalized support to accelerate your AI adoption journey with
            our expert consulting services.
          </p>

          {/* Consulting tiers */}
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {consulting.map((service) => (
              <div
                key={service.name}
                className="bg-white/5 ring-1 ring-white/10 rounded-3xl p-8 xl:p-10"
              >
                <h3 className="text-lg font-semibold leading-8 text-white">
                  {service.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-300">
                  {service.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    {service.price}
                  </span>
                </p>
                <Link
                  href={service.href}
                  className="mt-6 block rounded-md bg-white/10 px-3 py-2 text-center text-sm font-semibold leading-6 text-white hover:bg-white/20"
                >
                  {service.cta}
                </Link>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-300"
                >
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}