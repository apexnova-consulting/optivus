import { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout"
import { LoginForm } from "./login-form"
import { Container } from "@/components/ui/container"

export const metadata: Metadata = {
  title: "Login - Optivus",
  description: "Log in to your Optivus account",
}

export default function LoginPage() {
  return (
    <MainLayout>
      <Container className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Or{" "}
              <a
                href="/contact"
                className="font-medium text-optivus-blue hover:text-optivus-teal"
              >
                start your 30-day free trial
              </a>
            </p>
          </div>
          <LoginForm />
        </div>
      </Container>
    </MainLayout>
  )
}
