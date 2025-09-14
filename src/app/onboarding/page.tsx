"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Alert } from "@/components/ui/alert"

const industries = [
  { label: "Technology", value: "technology" },
  { label: "Finance", value: "finance" },
  { label: "Healthcare", value: "healthcare" },
  { label: "Manufacturing", value: "manufacturing" },
  { label: "Retail", value: "retail" },
  { label: "Education", value: "education" },
  { label: "Other", value: "other" },
]

const teamSizes = [
  { label: "1-10", value: "1-10" },
  { label: "11-50", value: "11-50" },
  { label: "51-200", value: "51-200" },
  { label: "201-1000", value: "201-1000" },
  { label: "1000+", value: "1000+" },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const industry = formData.get("industry") as string
    const teamSize = formData.get("teamSize") as string
    const hourlyRate = formData.get("hourlyRate") as string
    const tools = formData.get("tools") as string

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) throw new Error("No user found")

      // Update profile
      const { error: profileError } = await supabase
        .from("profiles")
        .update({
          industry,
          team_size: teamSize,
          hourly_rate: parseFloat(hourlyRate),
        })
        .eq("id", user.id)

      if (profileError) throw profileError

      // Create tools
      const toolsList = tools.split(",").map((tool) => tool.trim())
      for (const tool of toolsList) {
        const { error: toolError } = await supabase.from("tools").insert({
          org_id: user.id,
          name: tool,
          integration_type: "manual",
        })

        if (toolError) throw toolError
      }

      router.push("/dashboard")
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-24">
          <div className="space-y-8">
            <div>
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                Welcome to Optivus
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Let's set up your organization
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We'll help you get started with measuring and optimizing your AI
                tool adoption.
              </p>
            </div>

            <div className="space-y-10 divide-y divide-gray-900/10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
              >
                <form onSubmit={handleSubmit} className="px-4 py-6 sm:p-8">
                  {error && (
                    <Alert variant="destructive" className="mb-6">
                      <p>{error}</p>
                    </Alert>
                  )}

                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="industry"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Industry
                      </label>
                      <div className="mt-2">
                        <Select
                          id="industry"
                          name="industry"
                          options={industries}
                          required
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="teamSize"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Team size
                      </label>
                      <div className="mt-2">
                        <Select
                          id="teamSize"
                          name="teamSize"
                          options={teamSizes}
                          required
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="hourlyRate"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Average hourly rate
                      </label>
                      <div className="mt-2">
                        <Input
                          type="number"
                          name="hourlyRate"
                          id="hourlyRate"
                          min="0"
                          step="0.01"
                          required
                          className="block w-full"
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Used to calculate ROI
                      </p>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="tools"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        AI tools (comma separated)
                      </label>
                      <div className="mt-2">
                        <Input
                          type="text"
                          name="tools"
                          id="tools"
                          required
                          placeholder="ChatGPT, Claude, Copilot"
                          className="block w-full"
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        List the AI tools you want to track
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                    >
                      {loading ? "Setting up..." : "Complete setup"}
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}