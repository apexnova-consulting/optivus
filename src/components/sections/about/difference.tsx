import { Brain, BarChart, Zap } from "lucide-react"

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

export function Difference() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            The ApexNova Difference
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Beyond Traditional Consulting
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We combine deep expertise in AI implementation with data-driven insights
            to deliver measurable results for your organization.
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
    </div>
  )
}