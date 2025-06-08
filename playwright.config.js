// playwright.config.js
const config = {
  testDir: './tests', // Directory where your tests are stored
  //retries: 1, // Retry failed tests once
  expect: {
    timeout: 10000, // 10 seconds timeout for expect statements
  },
  reporter: 'html', // HTML report generation
  projects: [
    {
      name: 'PW_AUTOMATION_PRACTICE', // Mention the file name of Project or leave it it should take the default Project name
      use: {
        browserName: 'chromium', // Correct key is browserName (case-sensitive)
        headless: true, // Run in headed mode browser will open-showcase
        acceptDownloads: true,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure', // Captures trace only if test fails
        viewport: null, // Maximized viewport, disables default size
        launchOptions: {
          args: ['--start-maximized'], // Maximizes browser window
        },
        // Uncomment if needed:
        // ignoreHTTPSErrors: true,
        // permissions: ['geolocation'],
        // ...devices['Pixel 5'], // For mobile testing
      },
    },
  ],
};

module.exports = config;