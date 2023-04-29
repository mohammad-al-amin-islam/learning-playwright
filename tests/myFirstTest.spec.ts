import { expect, test } from "@playwright/test";

test("my test", async ({ page }) => {
  await page.goto("https://company-communication-platform.vercel.app/");
  await expect(page).toHaveTitle("Company Communication Platform");
  await page.click("text=Get Started");
});
