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