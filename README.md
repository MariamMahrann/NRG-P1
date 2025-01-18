# Cypress Automation Project

This repository contains automated test scripts built using Cypress for web application testing. The project follows the Page Object Model (POM) structure to ensure reusability and maintainability of test scripts.

---

## Installation

To get started with this project, follow the steps below:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

## Install dependencies:

npm install
npm cypress install
npx cypress open

## Project Structure

NRG-P1/
├── cypress/
│ ├── e2e/
│ │ ├── dragDrop-SC2.cy.js # Drag and Drop Test Case
│ │ ├── registrationForm-SC1.cy.js # Registration Form Test Case
│ ├── pages/
│ │ ├── droppablePage.js # POM for Droppable Test
│ │ ├── dummyRegistrationForm.js # POM for Registration Form
│ ├── support/
│ │ ├── commands.js # Custom Cypress commands
│ │ ├── e2e.js # Cypress setup and support
│ │ ├── formData.js # Dynamic form data for tests
├── videos/ # Videos of test runs
│ ├── dragDrop-SC2.cy.js.mp4 # Drag and Drop Test video
│ ├── registrationForm-SC1.cy.js.mp4 # Registration Form Test video
├── cypress.config.js # Cypress configuration
├── package.json # Project dependencies and scripts
├── README.md # Project documentation
