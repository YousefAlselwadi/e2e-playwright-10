import { test } from "../../fixtures/page-object-fixtures";
import runQuery from "../../helpers/dbUtils";

test.describe("DB test with UI", () => {
  // test('Test DB Connection', async() => {
  //   const query = 'SELECT * FROM students'
  //   const result = await runQuery(query)
  //   console.log(result)
  // })

  /**
   * Test Case 1
   *
   * 1. Visit "https://techglobal-training.com/backend"
   * 2. Create a valid user
   * 3. Run a query to validate that the user was created
   */

  test("Create a new student", async ({ backendPage }) => {});

  /**
   * Test Case 2
   *
   * 1. Visit "https://techglobal-training.com/backend"
   * 2. Update a valid user
   * 3. Run a query to validate that the user was updated
   */

  test("Update existing student", async ({ backendPage }) => {});

  /**
   * Test Case 3
   * 1. Visit "https://techglobal-training.com/backend"
   * 2. Delete the user you created
   * 3. Run a query to validate that the user was deleted
   */

  test("Delete existing student", async ({ backendPage }) => {});
});