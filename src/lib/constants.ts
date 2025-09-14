export const BRAND = {
  COMPANY: {
    PRODUCT: "Optivus",
    CONSULTING: "ApexNova Consulting"
  },
  COLORS: {
    PRIMARY: "#2563EB",
    ACCENT: "#06B6D4", 
    NEUTRAL_DARK: "#1E293B",
    NEUTRAL_LIGHT: "#F1F5F9",
    SUCCESS: "#16A34A",
    ERROR: "#DC2626"
  },
  TAGLINE: "Optimizing Adoption. Maximizing ROI.",
  PRIMARY_CTA: "Book Your ROI Demo"
}

export const PRICING = {
  SAAS: {
    STARTER: {
      name: "Starter",
      price: 299,
      period: "month",
      features: [
        "Up to 200 users",
        "Adoption dashboard",
        "ROI calculator",
        "CSV import"
      ]
    },
    GROWTH: {
      name: "Growth",
      price: 799,
      period: "month",
      features: [
        "Up to 1000 users",
        "Nudges",
        "Slack integration",
        "Priority email support"
      ]
    },
    ENTERPRISE: {
      name: "Enterprise",
      price: null,
      period: "month",
      features: [
        "Unlimited users",
        "SSO",
        "Custom integrations",
        "Dedicated CSM"
      ]
    }
  },
  CONSULTING: {
    AUDIT: {
      name: "AI ROI Audit",
      price: 2500,
      duration: "2 weeks",
      features: [
        "Rapid diagnostic",
        "Baseline report",
        "3 prioritized recommendations"
      ]
    },
    SPRINT: {
      name: "Rapid Adoption Sprint",
      price: 7500,
      duration: "30 days",
      features: [
        "On-site/hybrid kickoff",
        "Adoption setup",
        "Manager coaching",
        "Demo-ready ROI report"
      ]
    },
    COACHING: {
      name: "Fractional Adoption Coaching",
      price: 5000,
      period: "month",
      features: [
        "Part-time senior coach",
        "Playbooks",
        "Weekly cadences"
      ]
    }
  }
}

export const STATS = {
  ADOPTION_RATE: "85%",
  TIME_TO_VALUE: "30 Days",
  AVG_ROI: "312%"
}

export const FORMULAS = {
  ADOPTION_PERCENTAGE: `
    adoption_pct = (count of pulses where used_tool = true AND week_start = selected_week) / 
    (active_user_count for org that week) * 100
  `,
  AVG_HOURS_SAVED: `
    avg_hours_saved = average(hours_saved for pulses in selected_week)
    total_hours_saved_week = avg_hours_saved * active_user_count
  `,
  COMM_SCORE: `
    comm_score_avg = average(comm_score for pulses in selected_week)  // 1..5 scale
    comm_score_pct = (comm_score_avg - 1) / 4 * 100  // normalize to 0-100%
  `,
  ROI: `
    roi_weekly = (avg_hours_saved * avg_hourly_rate * active_user_count) - tool_cost_weekly
    roi_month = roi_weekly * 4.333
    roi_percentage = (roi_month / tool_cost_monthly) * 100
  `,
  NUDGE_VOLUME: `
    required_nudges_per_week = ceil((target_adoption_pct - current_adoption_pct) / 100 * active_user_count * 0.25)
  `
}
