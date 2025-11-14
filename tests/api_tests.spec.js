import { test, expect } from "@playwright/test"

test("API get request", async ({ request, page }) => {
  const response = await request.get("https://reqres.in/api/users?page=2")
  expect(response.status()).toBe(200)

  const responseText = await response.text()
  expect(responseText).toContain("Michael")
})
