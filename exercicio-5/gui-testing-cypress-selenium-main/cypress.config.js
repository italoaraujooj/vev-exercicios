const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:9990',
    // baseUrl: 'http://150.165.75.99:9990',
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
