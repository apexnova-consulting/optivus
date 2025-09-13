"use client"

import { Container } from "@/components/ui/container"
import { ClientMainLayout } from "@/components/layout/client-main-layout"

export default function AboutPage() {
  return (
    <ClientMainLayout>
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Our Mission
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            We are on a mission to help organizations maximize the value of their technology investments through data-driven adoption strategies and ROI measurement.
          </p>
        </div>
      </Container>
    </ClientMainLayout>
  )
}