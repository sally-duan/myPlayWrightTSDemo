import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  retries: 1,
  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
});
