import { defineConfig, devices } from "@playwright/test";
const pages = process.env.PAGES_TEST === "true";
const prefix = pages
  ? process.env.NEXT_PUBLIC_BASE_PATH || "/Portfolio_Restaurant_Forno_Pizza"
  : "";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: 2,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://127.0.0.1:3100",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "desktop",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 1000 },
      },
    },
    {
      name: "mobile",
      use: { ...devices["iPhone 13"], defaultBrowserType: "chromium" },
    },
  ],
  webServer: {
    command: pages ? "npm run preview:pages" : "npm run start -- --port 3100",
    url: `http://127.0.0.1:3100${prefix}/`,
    reuseExistingServer: !process.env.CI,
  },
});
