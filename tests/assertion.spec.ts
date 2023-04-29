import { expect, test } from "@playwright/test";

test("my assertion", async ({ page }) => {
  await page.goto("https://company-communication-platform.vercel.app/");

  await expect(page).toHaveTitle("Company Communication Platform");
  await expect(page.getByRole("link", { name: "CCP" })).toHaveText("CCP");
  await page.pause();

  //to have the boolean value await page.$('//*[@id="__next"]/div/nav/div[1]/div/div[3]/a[2]
  if (await page.$('//*[@id="__next"]/div/nav/div[1]/div/div[3]/a[2]')) {
    await page
      .locator('//*[@id="__next"]/div/nav/div[1]/div/div[3]/a[2]')
      .click();
  }

  await expect(
    page.getByRole("heading", { name: "Sign in Here" })
  ).toBeVisible();
  // await expect
  //   .soft(page.getByRole("heading", { name: "Sign in Here" }))
  //   .toBeHidden();

  await expect(page.getByRole("button", { name: "Sign In" })).toBeEnabled();
  // await expect
  //   .soft(page.getByRole("button", { name: "Sign In" }))
  //   .toBeDisabled();

    
  await expect(page.getByRole('button', { name: 'Sign In' })).not.toHaveText('sign out')


  //to take screenshot
  await expect(page).toHaveScreenshot();

});
