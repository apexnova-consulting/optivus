"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert } from "@/components/ui/alert"

export default function ResetPasswordPage() {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setSuccess(false)
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/update-password`,
      })

      if (error) throw error

      setSuccess(true)
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
              Reset your password
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Remember your password?{" "}
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

                {success && (
                  <Alert>
                    <p>
                      Check your email for a link to reset your password. If it
                      doesn't appear within a few minutes, check your spam folder.
                    </p>
                  </Alert>
                )}

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
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                  >
                    {loading ? "Sending reset link..." : "Send reset link"}
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
              <h2 className="text-2xl font-bold mb-4">Password Reset</h2>
              <p className="text-lg">
                Enter your email address and we'll send you a link to reset your
                password.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
