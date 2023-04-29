import { chromium, test } from "@playwright/test";


test("my video test",async ()=>{
    const browser = await chromium.launch({
        headless: false,
        slowMo:500,
    });
    const context = await browser.newContext({
        recordVideo:{
            dir:'video/',
            size:{width:800,height:700}
        }
    });

    const page = await context.newPage();

    await page.goto("https://company-communication-platform.vercel.app/");
    await page.pause();
    await page.getByRole('link', { name: 'Sign In' }).click();
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

    await context.close();

})