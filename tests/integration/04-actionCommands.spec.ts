import { test, expect } from "@playwright/test";
import { clickLink } from "../../helpers/clickhelpers";

test.describe("User Actions", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.techglobal-training.com/frontend");
    await clickLink(page, "HTML Elements");
    page.viewportSize
  });
});