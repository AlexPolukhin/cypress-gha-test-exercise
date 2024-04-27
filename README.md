first draft: 29.03.24

# Cypress Tests for Demo Websites

## Introduction
This repository contains Cypress tests for a demo website. The tests are organized into two main categories: UI tests and API tests.

## Prerequisites
- Node.js (version 12 or above)
- npm (comes with Node.js)

## Setup
1. Clone the repository
2. Install the dependencies:
`npm install`

## Running Tests
- To open the Cypress Test Runner for interactive testing:
`npx cypress open`
- To run the tests headlessly:
`npx cypress run`

------------



# Test Cases

## UI

### Smoke Tests
- **Verify Homepage (Repeat for New/Existing Users):**
  - Ensure the page loads with the default layout and items block are displayed.
  - Confirm users can open a product from the homepage.

- **Buy Product:**
  - Open a product and verify the page is displayed correctly.
  - Add the product to the cart and check that it is added successfully.
  - Open the cart and verify the page display is correct.
  - Check for correct product and price display.
  - Open the Checkout modal and verify its display.
  - Submit the order and confirm the order is processed successfully.

- **Customer Support:**
  - Open the contact form and verify the modal display.
  - Send a message and confirm the action is completed.


### Critical Path Tests
- **Login/Logout**
- **Sign up**
- **Product Filter**
- **Navigation**
- **Add several products to cart**
- **Delete product**
- **Price updated after add/delete**
- **Checkout required fields**
- **Header**
- **Footer**
- **etc**

### Extended Tests
- **Invalid login**
- **Invalid sign up**
- **Homepage carousel**
- **Copyright**
- **Cart Modification**
- **Responsive Design**
- **etc**

------------

## API

### Smoke Tests

#### Continents
- **With Codes and Names:**
  - Request returns a 200 status.
  - Response is not empty.
  - Structure is correct.
  - Data is accurate.

- **With Codes, Names, and Countries:**
  - Request returns a 200 status.
  - Response is not empty.
  - Structure is correct.

#### Continent
- **Request All Data for a Continent:**
  - Request returns a 200 status.
  - Response is not empty.
  - Structure is correct.
  - Data is accurate.


#### Countries
- **tbd**

#### Country
- **tbd**

#### Languages
- **tbd**

#### Language
- **tbd**

### Critical Path Tests

#### Continents
- **Invalid requests**
correct message in response

#### Continent
- **Invalid requests**

#### Countries
- **tbd**

#### Country
- **tbd**

#### Languages
- **tbd**

#### Language
- **tbd**

------------

## Future Improvements

### Documentation:
- Review the first draft of the test suites to better split test cases into test groups.
- Add test cases for functionalities not currently covered.
- Enhance the descriptions of test cases (including titles, steps, expected results) and organize them in a test management system for easier maintenance and scalability.

### Increase Test Coverage:
- **UI:** 
  Aim to cover at least the full smoke and critical path suites to ensure the most important functionalities are working as expected and to catch regressions.
- **API Endpoints:** 
  Extend coverage to include all available endpoints, with a special focus on edge cases and error handling scenarios to ensure stability.

### Visual Regression Testing:
- Integrate a visual regression testing tool for a more thorough UI inspection. 

### Cross-Browser and Device Testing:
- Expand testing to cover a wider range of browsers and devices.

### Test Result Reporting:
- Implement test result reporting from the CI pipeline and send reports to common channels such as Slack or email.



Delete