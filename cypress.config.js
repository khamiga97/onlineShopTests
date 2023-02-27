const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'p2d1fd',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://tapsshop.pl/'
  },
});
