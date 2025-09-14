"use client"

import { useRouter } from "next/navigation"
import { NudgeForm } from "@/components/dashboard/nudges/nudge-form"

export default function CreateNudgePage() {
  const router = useRouter()

  const handleSubmit = async (data: any) => {
    try {
      // Save to Supabase
      // const { data: nudge, error } = await supabase
      //   .from("nudges")
      //   .insert([data])
      //   .single()

      // if (error) throw error

      // Navigate back to nudges list
      router.push("/dashboard/nudges")
    } catch (error) {
      console.error("Error creating nudge:", error)
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Create New Nudge
      </h2>

      <NudgeForm onSubmit={handleSubmit} />
    </div>
  )
}