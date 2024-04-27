const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "dog3cq",
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.demoblaze.com/',

  },
});
