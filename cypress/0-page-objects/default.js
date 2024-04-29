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

  openContactForm(
    contact_button, 
    title, 
    email_field_title, 
    name_field_title, 
    message_field_title, 
    send_button, 
    close_button
  ) {
    // check contact modal is not visible
    cy.get('.modal-content')
      .should('not.be.visible')
    // find contact button, check button text, click button
    cy.get('[data-target="#exampleModal"]')
        .should('be.visible')
        .and('have.text', contact_button)
        .click();
    // check contact modal is visible
    cy.get('.modal-content')
        .should('be.visible');
    // check modal title
    cy.get('#exampleModalLabel')
        .should('be.visible')
        .should('have.text', title)
    // check modal close button
    cy.get('.close')
        .should('be.visible')
    // check modal email field title and input
    cy.contains('label', email_field_title)
        .should('be.visible')
    cy.get('#recipient-email')
        .should('be.visible')
        .and('have.attr', 'type', 'text')
    // check modal name field title and input
    cy.contains('label', name_field_title)
        .should('be.visible')
    cy.get('#recipient-name')
        .should('be.visible')
        .and('have.attr', 'type', 'text')
    // check modal message field title and input
    cy.contains('label', message_field_title)
        .should('be.visible')
    cy.get('#message-text')
        .should('be.visible')
    // check modal send button
    cy.contains('button', send_button)
        .should('be.visible')
        .and('have.css', 'background-color', 'rgb(2, 117, 216)')
        .and('have.css', 'border-color', 'rgb(2, 117, 216)')
    // check modal close button
    cy.contains('button', close_button)
        .should('be.visible')
        .and('have.css', 'background-color', 'rgb(255, 255, 255)')
        .and('have.css', 'border-color', 'rgb(204, 204, 204)')
  }

  closeContactForm(close_button) {
    cy.contains('button', close_button).click();
    cy.get('.modal-content').should('not.be.visible');
  }

  fulfillContactForm(email_valid, name, message) {
    cy.get('#recipient-email').type(email_valid);
    cy.get('#recipient-name').type(name);
    cy.get('#message-text').type(message);
  }

  sendMessage(send_button, success_message) {

    cy.contains(send_button).click()
    // check browser alert message
    cy.on('window:alert',
        cy.stub()
            .returns(true)
            .as('alert')

    )
    cy.get('@alert')
        .should('have.been.calledOnce')
        .and('have.been.calledWith', success_message)
  }

}