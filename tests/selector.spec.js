const { test } = require("@playwright/test");

test("my selector", async ({ page }) => {
  await page.goto("https://company-communication-platform.vercel.app/");
  await page.pause();


  //using xpath
  await page.locator('//*[@id="__next"]/div/nav/div[1]/div/div[3]/a[2]').click();

  //using css selector
  await page.locator('#username').click();
  await page.locator('#username').fill('moalamin001@gmail.com');

  //with other objects properties
  await page.locator('id=password').click();
  await page.locator('[id="password"]').fill("1234567");
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Sign In' }).click();


});
