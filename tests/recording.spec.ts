import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://company-communication-platform.vercel.app/');
  await page.getByRole('button', { name: 'Get Started' }).click();
  await page.getByPlaceholder('Enter your Email Address').click();
  await page.getByPlaceholder('Enter your Email Address').fill('moalamin001@gmail.com');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('1234567');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Sign Out' }).click();
});