first draft: 29.03.24

# Cypress Tests for Demo Websites

## Introduction
This repository contains Cypress tests for a demo website. It includes various test cases to ensure the website's functionality works as expected.

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
- **Verify Homepage (repeat for new/existing users)**: 
page loads, default layout, items block are displayed.
user can open product from homepage

- **Buy product**: 
open product and verify page display
add product to cart and check product added to cart
open cart and verify page display
check correct product/price display
open Checkout modal and verify modal display
submit order
check order successful

- **Customer support**: 
open contact form and verify modal display
send message

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

### Smoke tests

#### Continents
- **with codes and names**
request is 200
response not empty
structure correct
data correct

- **with codes, names, countries**
request is 200
response not empty
structure correct

#### Continent
- **Request continent all data**
request is 200
response not empty
structure correct
data correct

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
