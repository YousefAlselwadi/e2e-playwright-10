import { test, expect } from "@playwright/test";

// test.use({
//   storageState: './authorization.json'
// })

test('menu', async({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  console.log('logged in')
  await expect(page.locator('#nameofuser')).toBeVisible()
});

test('menu validation', async({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  console.log('logged in')
  await expect(page.locator('#logout2')).toBeVisible()
});