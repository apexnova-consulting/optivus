import { test, expect } from "@playwright/test"

test.describe("Marketing Site Flows", () => {
  test("should navigate through main pages", async ({ page }) => {
    // Landing page
    await page.goto("/")
    await expect(page.locator("text=Turn AI Adoption Into ROI")).toBeVisible()
    await expect(page.locator("text=Book Your ROI Demo")).toBeVisible()

    // Product page
    await page.click('a:text("Product")')
    await expect(page).toHaveURL("/product")
    await expect(page.locator("text=Adoption intelligence")).toBeVisible()

    // Pricing page
    await page.click('a:text("Pricing")')
    await expect(page).toHaveURL("/pricing")
    await expect(page.locator("text=Simple pricing")).toBeVisible()

    // About page
    await page.click('a:text("About")')
    await expect(page).toHaveURL("/about")
    await expect(page.locator("text=ApexNova Consulting")).toBeVisible()
  })

  test("should book demo through contact form", async ({ page }) => {
    await page.goto("/contact")

    // Fill out contact form
    await page.fill('input[name="name"]', "Test User")
    await page.fill('input[name="company"]', "Test Company")
    await page.fill('input[name="email"]', "test@example.com")
    await page.selectOption('select[name="role"]', "manager")
    await page.selectOption('select[name="teamSize"]', "11-50")
    await page.fill('input[name="tools"]', "Slack, Teams")
    await page.fill('textarea[name="challenges"]', "Need to improve adoption")

    await page.click('button:text("Continue to Booking")')

    // Check Calendly embed
    await expect(page.frameLocator(".calendly-inline-widget")).toBeVisible()
  })

  test("should handle pricing plan selection", async ({ page }) => {
    await page.goto("/pricing")

    // Click Starter plan
    await page.click('button:text("Start Free Trial")')
    await expect(page).toHaveURL("/contact?plan=starter")

    // Go back and click Growth plan
    await page.goto("/pricing")
    await page.click('button:text("Start Free Trial")', { hasText: "Growth" })
    await expect(page).toHaveURL("/contact?plan=growth")

    // Go back and click Enterprise plan
    await page.goto("/pricing")
    await page.click('button:text("Contact Sales")')
    await expect(page).toHaveURL("/contact?plan=enterprise")
  })

  test("should handle consulting service booking", async ({ page }) => {
    await page.goto("/pricing")

    // Book AI ROI Audit
    await page.click('button:text("Book Audit")')
    await expect(page).toHaveURL("/contact?service=audit")

    // Book Rapid Adoption Sprint
    await page.goto("/pricing")
    await page.click('button:text("Book Consultation")', { hasText: "Sprint" })
    await expect(page).toHaveURL("/contact?service=sprint")

    // Book Fractional Coaching
    await page.goto("/pricing")
    await page.click('button:text("Book Consultation")', { hasText: "Coaching" })
    await expect(page).toHaveURL("/contact?service=coaching")
  })
})
