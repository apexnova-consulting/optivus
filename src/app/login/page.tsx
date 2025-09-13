import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { LoginForm } from "./login-form"
import { Container } from "@/components/ui/container"

export const metadata: Metadata = {
  title: "Login - Optivus",
  description: "Sign in to your Optivus account",
}

export default function LoginPage() {
  return (
    <MainLayout>
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
    </MainLayout>
  )
}