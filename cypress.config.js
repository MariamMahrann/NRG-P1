const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      firstScenarioUrl: "https://www.way2automation.com/way2auto_jquery",
      secondScenarioUrl: "https://www.way2automation.com/way2auto_jquery/droppable.php#load_box",
    },
  },
});
