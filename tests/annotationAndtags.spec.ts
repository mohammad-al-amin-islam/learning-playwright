import { test } from "@playwright/test";

test.skip("skip this test", async ({ page }) => {
  // This test is not run
});

test("not yet ready", async ({ page }) => {
  test.fail();
  // ...
});

test("slow test", async ({ page }) => {
  test.slow();
  // ...
});

test("Test login page @fast", async ({ page }) => {
  // ...
});
