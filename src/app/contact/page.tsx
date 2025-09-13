import { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { Container } from "@/components/ui/container"
import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: "Book Demo - Optivus",
  description: "Book a personalized demo of Optivus and see how we can help optimize your technology ROI",
}

export default function ContactPage() {
  return (
    <MainLayout>
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              Book Your ROI Demo
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              See how Optivus can help you track adoption, measure ROI, and optimize your technology investments.
            </p>
          </div>
          <div className="mt-16">
            <ContactForm />
          </div>
        </div>
      </Container>
    </MainLayout>
  )
}
