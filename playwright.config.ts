import { defineConfig, devices } from '@playwright/test'

export default defineConfig({

  testDir: './tests',

  retries: 1,

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    trace: 'on-first-retry'
  },

  projects: [

    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/
    },

    {
      name: 'login-tests',
      testMatch: /login\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome']
      }
    },

    {
      name: 'chromium',
      testIgnore: /login\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json'
      },
      dependencies: ['setup']
    },

    {
      name: 'firefox',
      testIgnore: /login\.spec\.ts/,
      use: {
        ...devices['Desktop Firefox'],
        storageState: 'playwright/.auth/user.json'
      },
      dependencies: ['setup']
    },

    {
      name: 'webkit',
      testIgnore: /login\.spec\.ts/,
      use: {
        ...devices['Desktop Safari'],
        storageState: 'playwright/.auth/user.json'
      },
      dependencies: ['setup']
    }

  ]

})