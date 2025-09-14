export type UserRole = "admin" | "manager" | "employee"

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  org_id: string
  last_active: Date
}

export interface Organization {
  id: string
  name: string
  industry: string
  avg_hourly_rate: number
  license_count: number
  created_at: Date
  stripe_customer_id: string
}

export interface Team {
  id: string
  org_id: string
  name: string
}

export interface OrgUser {
  id: string
  org_id: string
  user_id: string
  team_id: string
  is_active: boolean
}

export interface Pulse {
  id: string
  user_id: string
  org_id: string
  week_start: Date
  used_tool: boolean
  hours_saved: number
  comm_score: number
  created_at: Date
}

export interface MetricsSnapshot {
  id: string
  org_id: string
  week_start: Date
  adoption_pct: number
  avg_hours_saved: number
  comm_score_avg: number
  roi_usd: number
  created_at: Date
}

export interface Nudge {
  id: string
  org_id: string
  title: string
  type: "email" | "slack" | "inapp"
  content: string
  schedule: string // cron or weekly
  stats: Record<string, any>
}

export interface Purchase {
  id: string
  org_id: string
  type: "saas" | "consulting"
  plan_name: string
  amount: number
  stripe_session_id: string
  status: "pending" | "active" | "cancelled"
}
