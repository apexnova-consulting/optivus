import { test, expect } from "@playwright/test"

test.describe("Onboarding Flow", () => {
  test.beforeEach(async ({ page }) => {
    // Sign in first
    await page.goto("/login")
    await page.fill('input[name="email"]', "test@example.com")
    await page.fill('input[name="password"]', "testPassword123!")
    await page.click('button[type="submit"]')
  })

  test("should complete organization setup", async ({ page }) => {
    await page.goto("/onboarding")

    // Step 1: Organization Details
    await page.selectOption('select[name="industry"]', "technology")
    await page.fill('input[name="employeeCount"]', "100")
    await page.fill('input[name="hourlyRate"]', "50")
    await page.click('button:text("Next")')

    // Step 2: Team Setup
    await expect(page.locator("text=Team setup will be available")).toBeVisible()
    await page.click('button:text("Next")')

    // Step 3: Tools & Integrations
    await page.fill('input[name="tools"]', "Slack, Microsoft Teams, Jira")
    await page.check('input[type="checkbox"]') // Enable Slack
    await page.click('button:text("Next")')

    // Step 4: Complete
    await expect(page.locator("text=Ready to get started!")).toBeVisible()
    await page.click('button:text("Complete")')

    // Should redirect to dashboard
    await expect(page).toHaveURL("/dashboard")
  })
})
