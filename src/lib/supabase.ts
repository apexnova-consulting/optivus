import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function getActiveUsersCount(orgId: string): Promise<number> {
  const { count } = await supabase
    .from('org_users')
    .select('*', { count: 'exact' })
    .eq('org_id', orgId)
    .eq('is_active', true)

  return count || 0
}

export async function getWeeklyPulses(orgId: string, weekStart: Date): Promise<any[]> {
  const { data } = await supabase
    .from('pulses')
    .select('*')
    .eq('org_id', orgId)
    .eq('week_start', weekStart.toISOString().split('T')[0])

  return data || []
}

export async function calculateAdoptionPercentage(orgId: string, weekStart: Date): Promise<number> {
  const activeUsers = await getActiveUsersCount(orgId)
  const pulses = await getWeeklyPulses(orgId, weekStart)
  const usedToolCount = pulses.filter(p => p.used_tool).length

  return activeUsers > 0 ? (usedToolCount / activeUsers) * 100 : 0
}

export async function calculateAverageHoursSaved(orgId: string, weekStart: Date): Promise<number> {
  const pulses = await getWeeklyPulses(orgId, weekStart)
  const totalHours = pulses.reduce((sum, p) => sum + (p.hours_saved || 0), 0)

  return pulses.length > 0 ? totalHours / pulses.length : 0
}

export async function calculateCommunicationScore(orgId: string, weekStart: Date): Promise<{
  average: number
  percentage: number
}> {
  const pulses = await getWeeklyPulses(orgId, weekStart)
  const totalScore = pulses.reduce((sum, p) => sum + (p.comm_score || 0), 0)
  const average = pulses.length > 0 ? totalScore / pulses.length : 0
  const percentage = ((average - 1) / 4) * 100

  return { average, percentage }
}

export async function calculateROI(
  orgId: string,
  weekStart: Date,
  avgHourlyRate: number,
  toolCostWeekly: number
): Promise<{
  weekly: number
  monthly: number
  percentage: number
}> {
  const activeUsers = await getActiveUsersCount(orgId)
  const avgHoursSaved = await calculateAverageHoursSaved(orgId, weekStart)
  
  const weeklyRoi = (avgHoursSaved * avgHourlyRate * activeUsers) - toolCostWeekly
  const monthlyRoi = weeklyRoi * 4.333
  const monthlyToolCost = toolCostWeekly * 4.333
  const roiPercentage = monthlyToolCost > 0 ? (monthlyRoi / monthlyToolCost) * 100 : 0

  return {
    weekly: weeklyRoi,
    monthly: monthlyRoi,
    percentage: roiPercentage
  }
}

export async function calculateRequiredNudges(
  orgId: string,
  targetAdoptionPct: number,
  currentAdoptionPct: number
): Promise<number> {
  const activeUsers = await getActiveUsersCount(orgId)
  return Math.ceil(((targetAdoptionPct - currentAdoptionPct) / 100) * activeUsers * 0.25)
}
