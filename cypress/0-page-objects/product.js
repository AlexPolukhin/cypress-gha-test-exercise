export class ProductPage {

  productLayout() {
    cy.get('.clearfix').should('be.visible');
    cy.get('.item > img').should('be.visible');
    cy.get('.name').should('be.visible').invoke('text').as('storeName');
    cy.get('.price-container').should('be.visible').invoke('text').as('storePrice');
    cy.get('#more-information').should('be.visible');
    cy.get('.col-sm-12 > .btn').should('be.visible');
  }

  navigateToProduct(randomProd) {
    //open random product page
    cy.visit('/prod.html?idp_=' + randomProd);
    //check if the product page url is correct
    cy.url().should('include', `prod.html?idp_=${randomProd}`);
  }

  addToCartClick() {
    cy.get('.col-sm-12 > .btn').click();
  }

  addToCartCall(randomProd) {
    // intercept POST requests to /addtocart and check that the request body contains the product id
    cy.intercept('POST', '/addtocart', (req) => {
        expect(req.body).to.have.property('prod_id', randomProd);
    }).as('postAddToCart');
  }

  waitAddToCartCall() { 
    // assert on the POST request to add to cart
    cy.wait('@postAddToCart').its('response.statusCode').should('eq', 200);
  }

}