import { test, expect } from '../fixtures/baseTest'
import { createEmployee } from '../../src/utils/fakerData'

test.describe('Employee Management', () => {

  test('Admin should add a new employee successfully', async ({ dashboardPage, page }) => {

    const employee = createEmployee()

    await dashboardPage.goToPIM()

    await dashboardPage.addEmployee(employee)

    await expect(
      page.getByRole('heading', { name: 'Personal Details' })
    ).toBeVisible()

  })

})
