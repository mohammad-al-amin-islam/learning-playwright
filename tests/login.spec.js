const { test } = require("@playwright/test");
const { LoginTest } = require("../pages/login");

test("my login", async ({ page }) => {

const Login = new LoginTest(page);

await Login.gotoUrl();
await page.getByRole("link", { name: "Sign In" }).click();
await Login.login("moalamin001@gmail.com","1234567");

//   await page.goto("https://company-communication-platform.vercel.app/");
//   await page.pause();
//   await page.getByRole("link", { name: "Sign In" }).click();
//   await page.getByPlaceholder("Enter your Email Address").click();
//   await page
//     .getByPlaceholder("Enter your Email Address")
//     .fill("moalamin001@gmail.com");
//   await page.getByPlaceholder("Enter your password").click();
//   await page.getByPlaceholder("Enter your password").fill("1234567");
//   page.once("dialog", (dialog) => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   await page.getByRole("button", { name: "Sign In" }).click();
  await page.getByRole("button", { name: "Sign Out" }).click();
});
