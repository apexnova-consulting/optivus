"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { CalendlyEmbed } from "@/components/booking/calendly-embed"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    role: "",
    teamSize: "",
    tools: "",
    challenges: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Save to Supabase
      // const { data, error } = await supabase
      //   .from("leads")
      //   .insert([formData])
      //   .single()

      // if (error) throw error

      // Show Calendly
      setSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Book Your ROI Demo
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Tell us who you are and what you want to achieve. We'll run a quick diagnostic and propose a path to ROI.
          </p>
        </div>

        {!submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 blur-xl" />
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Company
                    </label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Role
                    </label>
                    <Select
                      value={formData.role}
                      onChange={(value) => setFormData({ ...formData, role: value })}
                      options={[
                        { label: "Executive", value: "executive" },
                        { label: "Manager", value: "manager" },
                        { label: "Individual Contributor", value: "ic" },
                        { label: "Other", value: "other" },
                      ]}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Team Size
                    </label>
                    <Select
                      value={formData.teamSize}
                      onChange={(value) => setFormData({ ...formData, teamSize: value })}
                      options={[
                        { label: "1-10", value: "1-10" },
                        { label: "11-50", value: "11-50" },
                        { label: "51-200", value: "51-200" },
                        { label: "201-1000", value: "201-1000" },
                        { label: "1000+", value: "1000+" },
                      ]}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Current Tools
                    </label>
                    <Input
                      value={formData.tools}
                      onChange={(e) => setFormData({ ...formData, tools: e.target.value })}
                      placeholder="e.g., Slack, Microsoft Teams, Jira"
                      className="mt-1"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      What challenges are you looking to solve?
                    </label>
                    <Textarea
                      value={formData.challenges}
                      onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                  >
                    Continue to Booking
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        ) : (
          <CalendlyEmbed url="https://calendly.com/optivus/roi-demo" />
        )}
      </div>
    </div>
  )
}