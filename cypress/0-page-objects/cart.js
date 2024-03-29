export class CartPage {

    cartLayout() {
        cy.get('#page-wrapper > .row').should('be.visible');
        cy.get('.col-lg-8').should('be.visible');
        cy.get('.col-lg-1').should('be.visible');
    }

    navigateToCart() {
        cy.get('#cartur').click();
        cy.url().should('include', '/cart.html');
    }

    itemPriceAndName() {
        cy.get('@storeName').then((storeName) => {  
            cy.get('.success > :nth-child(2)').should('have.text', storeName);
        });
        cy.get('@storePrice').then((storePrice) => {
            const expectedPriceFormat = `$${storePrice} *includes tax`;
        
            cy.get('.success > :nth-child(3)').invoke('text').as('cartPrice').then((actualText) => {
                expect(expectedPriceFormat).to.include(actualText);
            });
        });
    }
}