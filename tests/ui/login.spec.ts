import { test, expect } from '../fixtures/baseTest'

test.describe('Login Tests', () => {

  test('Admin should login successfully', async ({ loginPage, page }) => {

    await loginPage.goto()

    await loginPage.login('Admin', 'admin123')

    await expect(page).toHaveURL(/dashboard/)

  })


  test('Login with invalid credentials shows error', async ({ loginPage }) => {

    await loginPage.goto()

    await loginPage.login('Admin', 'wrongPassword')

    await expect(loginPage.errorMessage).toBeVisible()

  })

})