export class DefaultPage {

  defaultLayout() {
    cy.title().should('eq', 'STORE');
    cy.get('.navbar').should('be.visible');
    cy.get('#footc').should('be.visible');
    cy.get('.py-5').should('be.visible');
  }

  setCookie(name, cookie) {
    cy.setCookie(name, cookie);
  }

  clearCart(cookie) {
    cy.request('POST', 'https://api.demoblaze.com/deletecart', {
      cookie: cookie
    }).then((response) => {
        expect(response.status).to.eq(200);
      });
  }

  validateUserLoggedIn() {
    cy.contains('Welcome Autousertest').should('be.visible');
  }
}