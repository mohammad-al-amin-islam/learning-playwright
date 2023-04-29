import { test } from "@playwright/test";

test.describe("all my tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://company-communication-platform.vercel.app/");
    await page.pause();
    await page.getByRole("link", { name: "Sign In" }).click();
    await page.getByPlaceholder("Enter your Email Address").click();
    await page
      .getByPlaceholder("Enter your Email Address")
      .fill("moalamin001@gmail.com");
    await page.getByPlaceholder("Enter your password").click();
    await page.getByPlaceholder("Enter your password").fill("1234567");
    page.once("dialog", (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByRole("button", { name: "Sign In" }).click();
  });

  test.afterAll(async ({ page }) => {
    await page.close();
  });

  test("dashboard", async ({ page }) => {
    await page.getByRole("link", { name: "Dashboard" }).click();
    await page.getByRole("link", { name: "Start Conversation" }).click();
    await page
      .getByRole("button", { name: "Start Conversations" })
      .first()
      .click();
    await page.getByPlaceholder("Type a message...").click();
    await page.getByPlaceholder("Type a message...").fill("hi");
    await page.locator("form").getByRole("button").click();
    await page.getByRole("link", { name: "CCP" }).click();

  });

  test("logout", async ({ page }) => {
    await page.getByRole("link", { name: "Dashboard" }).click();
    await page.getByRole("link", { name: "CCP" }).click();
    await page.getByRole("button", { name: "Sign Out" }).click();
  });
});
