import { faker } from '@faker-js/faker'

export function createEmployee() {

  return {

    firstName: faker.person.firstName(),

    lastName: faker.person.lastName(),

    employeeId: faker.number.int({ min: 10000, max: 99999 }).toString(),

    email: faker.internet.email()

  }

}