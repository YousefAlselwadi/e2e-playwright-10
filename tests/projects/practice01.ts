import { test, expect } from "../../fixtures/github-fixtures"
import { GitHubHomePage } from "../../pages/GitHubHomePage"

test.describe('Practice01 GitHub HomePage', () => {
    test('TASK-1: Validate the GitHub Home Page Logo and Header Menu Items', async({ gitHubHomePage }) => {
        await test.step('Validate that the logo is displayed', async() => {
            await expect(gitHubHomePage.logo).toBeVisible()
        });
        await test.step('Validate that the header menu items are displayed with their expected texts', async() => {
            const menuHeaderItemsArr = [ 'Product', 'Solutions', 'Resources', 'Open Source', 'Enterprise', 'Pricing']
            const headerMenuElements = gitHubHomePage.headerMenuItems;

            for (let i = 0; i < menuHeaderItemsArr.length; i++) {
                await expect(headerMenuElements.nth(i)).toBeVisible();
                await expect(headerMenuElements.nth(i)).toHaveText(menuHeaderItemsArr[i]);
            }
        })
        
    })
    
})