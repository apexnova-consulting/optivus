import { test, expect } from "@playwright/test"

test.describe("Authentication Flow", () => {
  test("should allow user to sign up", async ({ page }) => {
    await page.goto("/signup")

    // Fill out signup form
    await page.fill('input[name="fullName"]', "Test User")
    await page.fill('input[name="orgName"]', "Test Company")
    await page.fill('input[name="email"]', "test@example.com")
    await page.fill('input[name="password"]', "testPassword123!")

    // Submit form
    await page.click('button[type="submit"]')

    // Should redirect to onboarding
    await expect(page).toHaveURL("/onboarding")
  })

  test("should allow user to sign in", async ({ page }) => {
    await page.goto("/login")

    // Fill out login form
    await page.fill('input[name="email"]', "test@example.com")
    await page.fill('input[name="password"]', "testPassword123!")

    // Submit form
    await page.click('button[type="submit"]')

    // Should redirect to dashboard
    await expect(page).toHaveURL("/dashboard")
  })

  test("should handle invalid login", async ({ page }) => {
    await page.goto("/login")

    // Fill out login form with invalid credentials
    await page.fill('input[name="email"]', "wrong@example.com")
    await page.fill('input[name="password"]', "wrongPassword")

    // Submit form
    await page.click('button[type="submit"]')

    // Should show error message
    await expect(page.locator(".error-message")).toContainText("Invalid credentials")
  })

  test("should allow password reset", async ({ page }) => {
    await page.goto("/reset-password")

    // Fill out reset form
    await page.fill('input[name="email"]', "test@example.com")

    // Submit form
    await page.click('button[type="submit"]')

    // Should show success message
    await expect(page.locator(".success-message")).toContainText(
      "Check your email"
    )
  })
})
