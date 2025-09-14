"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert } from "@/components/ui/alert"
import { Select } from "@/components/ui/select"

const STEPS = [
  "Organization Details",
  "Team Setup",
  "Tools & Integrations",
  "Complete",
] as const

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    orgName: "",
    industry: "",
    employeeCount: "",
    hourlyRate: "",
    tools: "",
    slackEnabled: false,
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      if (currentStep === STEPS.length - 1) {
        // Save all data
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) throw new Error("No user found")

        // Update organization
        await supabase
          .from("organizations")
          .update({
            industry: formData.industry,
            employee_count: parseInt(formData.employeeCount),
            avg_hourly_rate: parseFloat(formData.hourlyRate),
            tools: formData.tools,
            slack_enabled: formData.slackEnabled,
          })
          .eq("created_by", user.id)

        router.push("/dashboard")
      } else {
        setCurrentStep(currentStep + 1)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                Industry
              </label>
              <Select
                id="industry"
                value={formData.industry}
                onChange={(value) => setFormData({ ...formData, industry: value })}
                options={[
                  { label: "Technology", value: "technology" },
                  { label: "Finance", value: "finance" },
                  { label: "Healthcare", value: "healthcare" },
                  { label: "Education", value: "education" },
                  { label: "Other", value: "other" },
                ]}
                className="mt-1"
              />
            </div>

            <div>
              <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700">
                Number of Employees
              </label>
              <Input
                id="employeeCount"
                type="number"
                value={formData.employeeCount}
                onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                className="mt-1"
              />
            </div>

            <div>
              <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700">
                Average Hourly Rate
              </label>
              <Input
                id="hourlyRate"
                type="number"
                value={formData.hourlyRate}
                onChange={(e) => setFormData({ ...formData, hourlyRate: e.target.value })}
                className="mt-1"
              />
            </div>
          </>
        )

      case 1:
        return (
          <div>
            <p className="text-sm text-gray-500 mb-4">
              Team setup will be available in the dashboard after onboarding.
            </p>
          </div>
        )

      case 2:
        return (
          <>
            <div>
              <label htmlFor="tools" className="block text-sm font-medium text-gray-700">
                List of Tools (comma separated)
              </label>
              <Input
                id="tools"
                type="text"
                value={formData.tools}
                onChange={(e) => setFormData({ ...formData, tools: e.target.value })}
                placeholder="e.g., Slack, Microsoft Teams, Jira"
                className="mt-1"
              />
            </div>

            <div className="mt-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.slackEnabled}
                  onChange={(e) => setFormData({ ...formData, slackEnabled: e.target.checked })}
                  className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                <span className="ml-2">Enable Slack Integration</span>
              </label>
            </div>
          </>
        )

      case 3:
        return (
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Ready to get started!
            </h3>
            <p className="text-sm text-gray-500">
              Click complete to access your dashboard and start measuring adoption.
            </p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-8">
              {STEPS[currentStep]}
            </h2>

            {error && (
              <Alert variant="destructive" className="mb-6">
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {renderStep()}

              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0 || loading}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={loading}
                >
                  {loading
                    ? "Loading..."
                    : currentStep === STEPS.length - 1
                    ? "Complete"
                    : "Next"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
