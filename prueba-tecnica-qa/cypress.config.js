const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    chromeWebSecurity: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    
    blockHosts: [
      "*backtrace.io"
    ],

    setupNodeEvents(on, config) {
      return config;
    },
  },
});