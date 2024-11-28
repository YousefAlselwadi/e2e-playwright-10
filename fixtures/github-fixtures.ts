import { test as base } from "@playwright/test";
import { GitHubHomePage } from "../pages/GitHubHomePage";

type MyFixtures = {
    gitHubHomePage: GitHubHomePage
}

export const test = base.extend<MyFixtures>({


    gitHubHomePage: async({ page }, use) => {

      const gitHubHomePage = new GitHubHomePage(page)
      await gitHubHomePage.goto()
     

      await use(gitHubHomePage)

    },
  })
  
  export { expect } from '@playwright/test'