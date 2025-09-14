interface Pulse {
  used_tool?: boolean
  hours_saved?: number | null
  comm_score?: number | null
}

export function calculateAdoptionPercentage(pulses: Pulse[], activeUsers: number): number {
  if (activeUsers === 0) return 0

  const usedToolCount = pulses.filter((p) => p.used_tool).length
  return (usedToolCount / activeUsers) * 100
}

export function calculateAverageHoursSaved(pulses: Pulse[]): number {
  if (pulses.length === 0) return 0

  const totalHours = pulses.reduce((sum, p) => sum + (p.hours_saved || 0), 0)
  return totalHours / pulses.length
}

export function calculateCommunicationScore(pulses: Pulse[]): {
  average: number
  percentage: number
} {
  if (pulses.length === 0) {
    return { average: 0, percentage: 0 }
  }

  const validScores = pulses
    .map((p) => p.comm_score)
    .filter((score): score is number => 
      score !== null && score !== undefined && score >= 1 && score <= 5
    )

  if (validScores.length === 0) {
    return { average: 0, percentage: 0 }
  }

  const average = validScores.reduce((sum, score) => sum + score, 0) / validScores.length
  const percentage = ((average - 1) / 4) * 100

  return { average, percentage }
}

interface ROIInputs {
  avgHoursSaved: number
  avgHourlyRate: number
  activeUsers: number
  toolCostWeekly: number
}

interface ROIResults {
  weekly: number
  monthly: number
  percentage: number
}

export function calculateROI(inputs: ROIInputs): ROIResults {
  const { avgHoursSaved, avgHourlyRate, activeUsers, toolCostWeekly } = inputs

  const weeklyValue = avgHoursSaved * avgHourlyRate * activeUsers
  const weeklyROI = weeklyValue - toolCostWeekly
  const monthlyROI = weeklyROI * 4.333 // Average weeks per month

  // Avoid division by zero
  const roiPercentage = toolCostWeekly === 0 
    ? 0 
    : (weeklyROI / toolCostWeekly) * 100

  return {
    weekly: weeklyROI,
    monthly: monthlyROI,
    percentage: roiPercentage,
  }
}

interface NudgeInputs {
  targetAdoptionPct: number
  currentAdoptionPct: number
  activeUsers: number
}

export function calculateRequiredNudges(inputs: NudgeInputs): number {
  const { targetAdoptionPct, currentAdoptionPct, activeUsers } = inputs

  if (targetAdoptionPct <= currentAdoptionPct) return 0

  // 25% of the gap between target and current adoption
  return Math.ceil(
    ((targetAdoptionPct - currentAdoptionPct) / 100) * activeUsers * 0.25
  )
}
