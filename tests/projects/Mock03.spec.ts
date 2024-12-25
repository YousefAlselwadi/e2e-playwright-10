import { expect, test } from "@playwright/test";

// Navigate to https://techglobal-training.com/frontend/project-2
// Enter the username as "Tech"
// Enter the password as "Test1234"
// Click on the "LOGIN" button
// Validate if the failure message displayed as "Invalid Username entered!" above the form

test.describe("Test login functionality", async () => {
  test("Login with the wrong user", async ({ page }) => {
    await page.goto("https://techglobal-training.com/frontend/project-2");
    const usernameInput = page.locator("#username");
    const passwordInput = page.locator("#password");
    const loginButton = page.locator("#login_btn");
    const message = page.locator("#error_message");

    await usernameInput.fill("Tech");
    await passwordInput.fill("Test123");
    await loginButton.click();
    await expect(message).toBeVisible();
    await expect(message).toHaveText("Invalid Username entered!");
  });
});

// Navigate to https://techglobal-training.com/frontend/project-2
// Enter the username as “TechGlobal”
// Enter the password as “Test1234”
// Click on the “LOGIN” button

test("Valid Login", async ({ page }) => {
    await page.goto("https://techglobal-training.com/frontend/project-2")
    const usernameInput = page.locator("#username")
    const passwordInput = page.locator("#password")
    const loginButton = page.locator("#login_btn")
  
    await usernameInput.fill("TechGlobal")
    await passwordInput.fill("Test1234")
    await loginButton.click()
  })

// Navigate to https://techglobal-training.com/frontend/project-5
// Validate the main heading is displayed as "Pagination"
// Validate the subheading is displayed as "World City Populations 2022"
// Validate the paragraph is displayed as "What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:"

test("Pagination Page", async ({ page }) => {
  await page.goto("https://techglobal-training.com/frontend/project-5");

  const mainHeading = page.locator(".is-size-3");
  const subHeading = page.locator("#sub_heading");
  const paragraph = page.locator("#content");

  await expect(mainHeading).toBeVisible();
  await expect(mainHeading).toHaveText("Pagination");

  await expect(subHeading).toBeVisible();
  await expect(subHeading).toHaveText("World City Populations 2022");

  await expect(paragraph).toBeVisible();
  await expect(paragraph).toHaveText(
    "What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:"
  );
});
test("Invalid login with the wrong password", async ({page}) => {
    await page.goto("https://techglobal-training.com/frontend/project-2")
  
    const usernameInput = page.locator("#username")
    const passwordInput = page.locator("#password")
    const loginButton = page.locator("#login_btn")
    const message = page.locator("#error_message")
  
    await usernameInput.fill("TechGlobal")
    await passwordInput.fill("1234")
    await loginButton.click()
    await expect(message).toBeVisible()
    await expect(message).toHaveText("Invalid Password entered!")
  })

//or

test("Pagination Page 2", async ({ page }) => {
  await page.goto("https://techglobal-training.com/frontend/project-5");

  const mainHeading = page.locator(".is-size-3");
  const subHeading = page.locator("#sub_heading");
  const paragraph = page.locator("#content");

  
  await Promise.all([
    expect(mainHeading).toBeVisible(),
    expect(mainHeading).toHaveText("Pagination"),
    expect(subHeading).toBeVisible(),
    expect(subHeading).toHaveText("World City Populations 2022"),
    expect(paragraph).toBeVisible(),
    expect(paragraph).toHaveText(
      "What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:"
    ),
  ]);
});