import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function setupDemo() {
  try {
    // Create demo user
    const { data: user, error: userError } = await supabase.auth.admin.createUser({
      email: "demo@optivus.com",
      password: "demo123!@#",
      email_confirm: true,
      user_metadata: {
        full_name: "Demo User",
        org_name: "Demo Company",
      },
    })

    if (userError) throw userError

    // Update profile
    const { error: profileError } = await supabase
      .from("profiles")
      .update({
        industry: "technology",
        team_size: "51-200",
        hourly_rate: 75,
      })
      .eq("id", user.id)

    if (profileError) throw profileError

    // Create tools
    const tools = [
      { name: "ChatGPT", description: "AI language model for content generation" },
      { name: "GitHub Copilot", description: "AI pair programming assistant" },
      { name: "Claude", description: "Advanced AI assistant for analysis" },
    ]

    for (const tool of tools) {
      const { error: toolError } = await supabase.from("tools").insert({
        org_id: user.id,
        name: tool.name,
        description: tool.description,
        integration_type: "manual",
        cost_per_month: 20,
      })

      if (toolError) throw toolError
    }

    // Create sample pulses
    const pulses = [
      { used_tool: true, hours_saved: 4, comm_score: 5 },
      { used_tool: true, hours_saved: 3, comm_score: 4 },
      { used_tool: false, hours_saved: 0, comm_score: 3 },
      { used_tool: true, hours_saved: 5, comm_score: 5 },
    ]

    for (const pulse of pulses) {
      const { error: pulseError } = await supabase.from("pulses").insert({
        user_id: user.id,
        tool_id: tools[0].id,
        ...pulse,
      })

      if (pulseError) throw pulseError
    }

    // Create sample nudges
    const nudges = [
      {
        title: "Quick Tip: ChatGPT Prompting",
        content: "Use specific instructions for better results",
        type: "tip",
        schedule: "weekly",
      },
      {
        title: "Copilot Success Story",
        content: "Team saved 10 hours this week using Copilot",
        type: "success_story",
        schedule: "biweekly",
      },
    ]

    for (const nudge of nudges) {
      const { error: nudgeError } = await supabase.from("nudges").insert({
        org_id: user.id,
        ...nudge,
        status: "active",
        target_team: "all",
        delivery_channel: "slack",
      })

      if (nudgeError) throw nudgeError
    }

    console.log("Demo account setup complete!")
    console.log("Email: demo@optivus.com")
    console.log("Password: demo123!@#")
  } catch (error) {
    console.error("Error setting up demo:", error)
  }
}

setupDemo()
