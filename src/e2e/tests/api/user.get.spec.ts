import { test, expect } from "@playwright/test";

test.describe("Users GET", () => {
  test("should get user details", async ({ request }) => {
    const response = await request.get("https://flaskwebapptest2024.azurewebsites.net/tests");
    expect(response.status()).toBe(400);
  });
});