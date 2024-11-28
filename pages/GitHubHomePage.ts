import { type Locator, type Page } from "@playwright/test";

export class GitHubHomePage {
    readonly page: Page
    readonly logo: Locator
    readonly headerMenuItems: Locator



    constructor(page: Page) {
        this.page = page
        this.logo = page.locator('.octicon-mark-github')
        this.headerMenuItems = page.locator('li.HeaderMenu-item');
    }

    async goto() {
        await this.page.goto('https://github.com/');
    }

}