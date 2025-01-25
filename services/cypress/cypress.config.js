const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // The e2e object now contains most of your configuration settings
  e2e: {
    // The baseUrl setting remains the same - used for all your test URLs
    baseUrl: 'http://traefik',
    
    // Specify where to store test outputs
    screenshotsFolder: 'public/cypress/screenshots',
    videosFolder: 'public/cypress/videos',
    
    // Specify the location of your test files
    // Note: in Cypress 10+, 'integrationFolder' is now 'specPattern'
    specPattern: 'tests/**/*.{js,jsx,ts,tsx}',
    
    // Disable various optional features
    supportFile: false,
    fixturesFolder: false,
  },
  
  // Video recording is now a top-level configuration
  video: true,
  
  // The old pluginsFile setting is now handled differently
  // Setting it to false is equivalent to not having any plugins
  setupNodeEvents(on, config) {
    return config
  }
})
