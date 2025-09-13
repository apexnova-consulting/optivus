"use client"

import { Container } from "@/components/ui/container"
import { ClientMainLayout } from "@/components/layout/client-main-layout"

export default function PricingPage() {
  return (
    <ClientMainLayout>
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Choose the plan that best fits your organization's needs.
          </p>
        </div>
      </Container>
    </ClientMainLayout>
  )
}