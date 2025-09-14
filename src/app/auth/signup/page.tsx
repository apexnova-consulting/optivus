"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert } from "@/components/ui/alert"

export default function SignUpPage() {
  const router = useRouter()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const fullName = formData.get("fullName") as string
    const orgName = formData.get("orgName") as string

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            org_name: orgName,
          },
        },
      })

      if (error) throw error

      if (data.user) {
        router.push("/onboarding")
      }
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <Link href="/" className="text-blue-600 font-bold text-2xl">
              Optivus
            </Link>
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="font-semibold text-blue-600 hover:text-blue-500"
              >
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-10">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <Alert variant="destructive">
                    <p>{error}</p>
                  </Alert>
                )}

                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Full name
                  </label>
                  <div className="mt-2">
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      className="block w-full"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="orgName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Organization name
                  </label>
                  <div className="mt-2">
                    <Input
                      id="orgName"
                      name="orgName"
                      type="text"
                      required
                      className="block w-full"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      className="block w-full"
                    />
                  </div>
                </div>

                <div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                  >
                    {loading ? "Creating account..." : "Create account"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-600 to-cyan-500"
        >
          <div className="absolute inset-0 bg-white/10" />
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="max-w-md text-white">
              <h2 className="text-2xl font-bold mb-4">
                Turn AI Adoption Into ROI
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Track real usage and adoption rates
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Measure time savings and cost benefits
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Get actionable insights for improvement
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
