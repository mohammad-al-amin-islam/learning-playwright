const { test, expect } = require("@playwright/test");


test("myTest",async ({page})=>{
    await page.goto("https://company-communication-platform.vercel.app/")
    await expect(page).toHaveTitle("Company Communication Platform");
});