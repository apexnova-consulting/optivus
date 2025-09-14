import {
  calculateAdoptionPercentage,
  calculateAverageHoursSaved,
  calculateCommunicationScore,
  calculateROI,
  calculateRequiredNudges,
} from "./formulas"

describe("Adoption Formulas", () => {
  describe("calculateAdoptionPercentage", () => {
    it("should calculate correct adoption percentage", () => {
      const pulses = [
        { used_tool: true },
        { used_tool: true },
        { used_tool: false },
        { used_tool: true },
      ]
      const activeUsers = 4

      const result = calculateAdoptionPercentage(pulses, activeUsers)
      expect(result).toBe(75) // 3 out of 4 users = 75%
    })

    it("should return 0 when there are no active users", () => {
      const pulses = [{ used_tool: true }]
      const activeUsers = 0

      const result = calculateAdoptionPercentage(pulses, activeUsers)
      expect(result).toBe(0)
    })

    it("should handle empty pulses array", () => {
      const pulses: any[] = []
      const activeUsers = 5

      const result = calculateAdoptionPercentage(pulses, activeUsers)
      expect(result).toBe(0)
    })
  })

  describe("calculateAverageHoursSaved", () => {
    it("should calculate correct average hours saved", () => {
      const pulses = [
        { hours_saved: 2 },
        { hours_saved: 4 },
        { hours_saved: 6 },
      ]

      const result = calculateAverageHoursSaved(pulses)
      expect(result).toBe(4) // (2 + 4 + 6) / 3 = 4
    })

    it("should return 0 for empty pulses array", () => {
      const pulses: any[] = []

      const result = calculateAverageHoursSaved(pulses)
      expect(result).toBe(0)
    })

    it("should handle null/undefined hours_saved values", () => {
      const pulses = [
        { hours_saved: 2 },
        { hours_saved: null },
        { hours_saved: 4 },
        { hours_saved: undefined },
      ]

      const result = calculateAverageHoursSaved(pulses)
      expect(result).toBe(3) // (2 + 0 + 4 + 0) / 4 = 3
    })
  })

  describe("calculateCommunicationScore", () => {
    it("should calculate correct communication score average and percentage", () => {
      const pulses = [
        { comm_score: 4 },
        { comm_score: 5 },
        { comm_score: 3 },
      ]

      const result = calculateCommunicationScore(pulses)
      expect(result.average).toBe(4) // (4 + 5 + 3) / 3 = 4
      expect(result.percentage).toBe(75) // (4 - 1) / 4 * 100 = 75%
    })

    it("should return 0 for empty pulses array", () => {
      const pulses: any[] = []

      const result = calculateCommunicationScore(pulses)
      expect(result.average).toBe(0)
      expect(result.percentage).toBe(0)
    })

    it("should handle invalid comm_score values", () => {
      const pulses = [
        { comm_score: 6 }, // Above max
        { comm_score: 0 }, // Below min
        { comm_score: 3 }, // Valid
      ]

      const result = calculateCommunicationScore(pulses)
      expect(result.average).toBe(3) // Only counting valid scores
      expect(result.percentage).toBe(50) // (3 - 1) / 4 * 100 = 50%
    })
  })

  describe("calculateROI", () => {
    it("should calculate correct ROI values", () => {
      const inputs = {
        avgHoursSaved: 5,
        avgHourlyRate: 50,
        activeUsers: 100,
        toolCostWeekly: 1000,
      }

      const result = calculateROI(inputs)
      expect(result.weekly).toBe(24000) // (5 * 50 * 100) - 1000 = 24000
      expect(result.monthly).toBe(104000) // 24000 * 4.333 ≈ 104000
      expect(result.percentage).toBe(2400) // (24000 / 1000) * 100 = 2400%
    })

    it("should handle zero tool cost", () => {
      const inputs = {
        avgHoursSaved: 5,
        avgHourlyRate: 50,
        activeUsers: 100,
        toolCostWeekly: 0,
      }

      const result = calculateROI(inputs)
      expect(result.weekly).toBe(25000)
      expect(result.monthly).toBe(108325)
      expect(result.percentage).toBe(0) // Avoid division by zero
    })

    it("should handle zero hours saved", () => {
      const inputs = {
        avgHoursSaved: 0,
        avgHourlyRate: 50,
        activeUsers: 100,
        toolCostWeekly: 1000,
      }

      const result = calculateROI(inputs)
      expect(result.weekly).toBe(-1000)
      expect(result.monthly).toBe(-4333)
      expect(result.percentage).toBe(-100)
    })
  })

  describe("calculateRequiredNudges", () => {
    it("should calculate correct number of required nudges", () => {
      const inputs = {
        targetAdoptionPct: 80,
        currentAdoptionPct: 60,
        activeUsers: 100,
      }

      const result = calculateRequiredNudges(inputs)
      expect(result).toBe(5) // ceil((80 - 60) / 100 * 100 * 0.25) = 5
    })

    it("should return 0 when target is met", () => {
      const inputs = {
        targetAdoptionPct: 80,
        currentAdoptionPct: 85,
        activeUsers: 100,
      }

      const result = calculateRequiredNudges(inputs)
      expect(result).toBe(0)
    })

    it("should handle edge cases", () => {
      const inputs = {
        targetAdoptionPct: 100,
        currentAdoptionPct: 0,
        activeUsers: 100,
      }

      const result = calculateRequiredNudges(inputs)
      expect(result).toBe(25) // ceil((100 - 0) / 100 * 100 * 0.25) = 25
    })
  })
})
