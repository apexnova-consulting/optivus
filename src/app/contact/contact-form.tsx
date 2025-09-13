"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  if (submitted) {
    return (
      <Card className="p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Thanks for your interest!
        </h3>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          We'll be in touch shortly to schedule your personalized ROI demo.
        </p>
      </Card>
    )
  }

  return (
    <Card>
      <form onSubmit={onSubmit} className="space-y-8 p-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              First name
            </label>
            <div className="mt-2">
              <Input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Last name
            </label>
            <div className="mt-2">
              <Input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Work email
            </label>
            <div className="mt-2">
              <Input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Company
            </label>
            <div className="mt-2">
              <Input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company-size"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Company size
            </label>
            <div className="mt-2">
              <Select name="company-size" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-50">1-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201-500">201-500 employees</SelectItem>
                  <SelectItem value="501-1000">501-1000 employees</SelectItem>
                  <SelectItem value="1001+">1001+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              What are your main adoption challenges?
            </label>
            <div className="mt-2">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-optivus-blue focus:ring-optivus-blue dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Book Your Demo"}
          </Button>
        </div>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          By submitting this form, you agree to our{" "}
          <a href="/privacy" className="font-medium text-optivus-blue hover:text-optivus-teal">
            privacy policy
          </a>
          .
        </p>
      </form>
    </Card>
  )
}
