import { defineConfig } from 'cypress';

// cypress/e2e/**/*.cy.{js,jsx,ts,tsx}
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080/#',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    screenshotOnRunFailure: true,
  },
});
