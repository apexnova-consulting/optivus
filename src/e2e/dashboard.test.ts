import { test, expect } from "@playwright/test"

test.describe("Dashboard Flows", () => {
  test.beforeEach(async ({ page }) => {
    // Sign in first
    await page.goto("/login")
    await page.fill('input[name="email"]', "test@example.com")
    await page.fill('input[name="password"]', "testPassword123!")
    await page.click('button[type="submit"]')
  })

  test("should display KPIs and charts", async ({ page }) => {
    await page.goto("/dashboard")

    // Check KPI cards
    await expect(page.locator("text=Adoption Rate")).toBeVisible()
    await expect(page.locator("text=Hours Saved")).toBeVisible()
    await expect(page.locator("text=Estimated ROI")).toBeVisible()
    await expect(page.locator("text=Communication Score")).toBeVisible()

    // Check charts
    await expect(page.locator("text=Adoption Trend")).toBeVisible()
    await expect(page.locator("text=Team Breakdown")).toBeVisible()

    // Check user table
    await expect(page.locator("text=User Activity")).toBeVisible()
  })

  test("should calculate ROI", async ({ page }) => {
    await page.goto("/dashboard/roi")

    // Fill out ROI calculator
    await page.fill('input[name="employeeCount"]', "100")
    await page.fill('input[name="avgHourlyRate"]', "50")
    await page.fill('input[name="softwareCost"]', "10000")
    await page.fill('input[name="adoptionRate"]', "85")
    await page.fill('input[name="hoursPerWeek"]', "2")

    await page.click('button:text("Calculate ROI")')

    // Check results
    await expect(page.locator("text=ROI Summary")).toBeVisible()
    await expect(page.locator("text=Weekly ROI")).toBeVisible()
    await expect(page.locator("text=Monthly ROI")).toBeVisible()
    await expect(page.locator("text=Break-even Point")).toBeVisible()
  })

  test("should manage nudges", async ({ page }) => {
    await page.goto("/dashboard/nudges")

    // Create new nudge
    await page.click('button:text("Create New Nudge")')
    await page.fill('input[name="title"]', "Test Nudge")
    await page.selectOption('select[name="type"]', "reminder")
    await page.fill('textarea[name="content"]', "Don't forget to log your activities!")
    await page.selectOption('select[name="schedule"]', "weekly")
    await page.selectOption('select[name="targetTeam"]', "all")
    await page.selectOption('select[name="deliveryChannel"]', "slack")

    await page.click('button:text("Create Nudge")')

    // Check nudge list
    await expect(page.locator("text=Test Nudge")).toBeVisible()

    // Toggle nudge status
    await page.click('button[aria-label="Toggle status"]')
    await expect(page.locator("text=Paused")).toBeVisible()

    // Delete nudge
    await page.click('button[aria-label="Delete nudge"]')
    await page.click('button:text("Confirm")')
    await expect(page.locator("text=Test Nudge")).not.toBeVisible()
  })

  test("should generate reports", async ({ page }) => {
    await page.goto("/dashboard/reports")

    // Generate PDF report
    await page.selectOption('select[name="reportType"]', "pdf")
    await page.fill('input[name="customTitle"]', "Test Report")
    await page.click('button:text("Generate Report")')

    // Check download
    const download = await Promise.all([
      page.waitForEvent("download"),
      page.click('button:text("Generate Report")'),
    ])

    expect(download[0].suggestedFilename()).toBe("test-report.pdf")

    // Generate CSV export
    await page.selectOption('select[name="reportType"]', "csv")
    await page.click('button:text("Generate Report")')

    const csvDownload = await Promise.all([
      page.waitForEvent("download"),
      page.click('button:text("Generate Report")'),
    ])

    expect(csvDownload[0].suggestedFilename()).toBe("test-report.csv")
  })
})
