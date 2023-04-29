import { test } from "@playwright/test";

test("my selector", async ({ page }) => {
  await page.goto("https://company-communication-platform.vercel.app/");

  //using xpath
  await page.click('//*[@id="__next"]/div/nav/div[1]/div/div[3]/a[2]');
  //using any properties

  await page.locator('[id="username"]').click();
  await page.locator("id=username").fill("moalamin001@gmail.com");

//   await page.pause();
  //using css selector
  await page.locator("#password").click();
  await page.locator('//input[@id="password"]').fill("1234567");
  await page.pause();

  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "Sign In" }).click();
});
