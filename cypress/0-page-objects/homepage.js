export class HomePage {

    visitHomePage() {  
        cy.visit('/index.html');
    }

    validateHomePageURL() {
        cy.url().should('include', '/index.html');
    }
  
    homeBody() {
        cy.get('.list-group').should('be.visible');
        cy.get('#tbodyid').should('be.visible');
    }

    selectRandomProduct(random) {
        cy.get('.card-title > .hrefch')
            .eq(random)
            .click();
        cy.url().should('include', `prod.html?idp_=${random + 1}`);
    }
}