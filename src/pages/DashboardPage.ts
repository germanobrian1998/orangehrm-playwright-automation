import { Page, Locator, expect } from '@playwright/test'

export class DashboardPage {

  readonly page: Page
  readonly pimMenu: Locator
  readonly addEmployeeButton: Locator
  readonly firstNameInput: Locator
  readonly lastNameInput: Locator
  readonly saveButton: Locator
  readonly employeeIdField: Locator

  constructor(page: Page) {

    this.page = page

    this.pimMenu = page.locator('a[href*="viewPimModule"]')

    this.addEmployeeButton = page.getByRole('button', { name: 'Add' })

    this.firstNameInput = page.getByPlaceholder('First Name')

    this.lastNameInput = page.getByPlaceholder('Last Name')

    this.saveButton = page.getByRole('button', { name: 'Save' })

    this.employeeIdField = page.locator('input[name="employeeId"]')

  }

  async goToPIM() {

    await this.page.goto('/web/index.php/dashboard/index')

    await this.pimMenu.click()

  }

  async addEmployee(employee: any) {

    await this.addEmployeeButton.click()

    await this.firstNameInput.fill(employee.firstName)

    await this.lastNameInput.fill(employee.lastName)

    await expect(this.saveButton).toBeEnabled()

    await this.saveButton.click()

    await this.employeeIdField.waitFor({ timeout: 60000 })

  }

}
