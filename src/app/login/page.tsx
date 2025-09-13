"use client"

import { Container } from "@/components/ui/container"
import { ClientMainLayout } from "@/components/layout/client-main-layout"
import { LoginForm } from "./login-form"

export default function LoginPage() {
  return (
    <ClientMainLayout>
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-md">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              Welcome Back
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Sign in to access your adoption dashboard
            </p>
          </div>
          <LoginForm />
        </div>
      </Container>
    </ClientMainLayout>
  )
}