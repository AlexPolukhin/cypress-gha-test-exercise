export class CheckoutPage {
      
   deleteItemFromCartCall() {
         cy.intercept('POST', '/deletecart').as('postDeleteCart');
     }
    
   openPlaceOrderModal() {
         cy.get('.modal-content').should('not.be.visible');
         cy.get('.col-lg-1 > .btn').click();
       }

   modalLayout() {
      cy.get('.modal-content').should('be.visible');
      cy.get('#orderModal > .modal-dialog > .modal-content > .modal-header').should('be.visible');
      cy.get('#orderModal > .modal-dialog > .modal-content > .modal-header').should('be.visible');
      // scroll to the bottom of the modal
      cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
         .scrollIntoView()
         .should('be.visible');
      cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').should('be.visible');
       }

   fillOutForm(name, card) {
      cy.get('#name')
         .click()
         .type(name);
      cy.get('#name').should('have.value', name);
      cy.get('#card').type(card);
      cy.get('#card').should('have.value', card);
   }

   submitForm() {
      cy.contains('Purchase').click();
   }

   validateOrder() {
      cy.get('.sweet-alert').should('be.visible');
      cy.get('.sa-success').should('be.visible');
      cy.get('.sa-success').should('be.visible');
      cy.get('.confirm')
         .should('be.visible')
         .and('have.text', 'OK')
   }

   waitDeleteCartCall() {
      cy.wait('@postDeleteCart').its('response.statusCode').should('eq', 200);
   }

   closeOrderModal() {
      cy.get('.confirm').click();
      cy.get('.sweet-alert').should('not.be.visible');
   }
      
}