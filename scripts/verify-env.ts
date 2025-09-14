#!/usr/bin/env node

import { createClient } from "@supabase/supabase-js"
import Stripe from "stripe"
import { Resend } from "resend"

const requiredEnvVars = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "NEXTAUTH_URL",
  "NEXTAUTH_SECRET",
  "STRIPE_SECRET_KEY",
  "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY",
  "RESEND_API_KEY",
  "SLACK_BOT_TOKEN",
  "SLACK_SIGNING_SECRET",
]

async function verifyEnv() {
  console.log("🔍 Verifying environment setup...")
  
  // Check for required environment variables
  const missingVars = requiredEnvVars.filter((v) => !process.env[v])
  if (missingVars.length > 0) {
    console.error("❌ Missing environment variables:", missingVars.join(", "))
    process.exit(1)
  }
  console.log("✅ All required environment variables are set")

  // Test Supabase connection
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    const { data, error } = await supabase.from("profiles").select("count")
    if (error) throw error
    console.log("✅ Supabase connection successful")
  } catch (error) {
    console.error("❌ Supabase connection failed:", error)
    process.exit(1)
  }

  // Test Stripe connection
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2023-10-16",
    })
    await stripe.customers.list({ limit: 1 })
    console.log("✅ Stripe connection successful")
  } catch (error) {
    console.error("❌ Stripe connection failed:", error)
    process.exit(1)
  }

  // Test Resend connection
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.domains.list()
    console.log("✅ Resend connection successful")
  } catch (error) {
    console.error("❌ Resend connection failed:", error)
    process.exit(1)
  }

  // Test Slack connection
  try {
    const response = await fetch("https://slack.com/api/auth.test", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
        "Content-Type": "application/json",
      },
    })
    const data = await response.json()
    if (!data.ok) throw new Error(data.error)
    console.log("✅ Slack connection successful")
  } catch (error) {
    console.error("❌ Slack connection failed:", error)
    process.exit(1)
  }

  console.log("✅ All services verified successfully!")
}

verifyEnv()
