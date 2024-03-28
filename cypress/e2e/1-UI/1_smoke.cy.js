/// <reference types="cypress"/>

import { DefaultPage } from '../../0-page-objects/default';
import { HomePage } from '../../0-page-objects/homepage';
import { ProductPage } from '../../0-page-objects/product';
import { CartPage } from '../../0-page-objects/cart';
import { CheckoutPage } from '../../0-page-objects/checkout';

const defaultPage = new DefaultPage();
const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

describe('Verify homepage ', () => {

    beforeEach(() => {
        defaultPage.setCookie(Cypress.env('new-user'), Cypress.env('user-cookies'));

        homePage.visitHomePage();
    });

    it('should load and display', () => {

        homePage.validateHomePageURL();

        defaultPage.defaultLayout();

        homePage.homeBody();
        
    });

    it('open a product from homepage', () => {
        const randomId = Math.floor(Math.random() * 10);
        homePage.selectRandomProduct(randomId);

        defaultPage.defaultLayout();

        productPage.productLayout();
    });
});

describe('Buy product', () => {
    beforeEach(() => {
        defaultPage.setCookie(Cypress.env('new-user'), Cypress.env('user-cookies'));

        defaultPage.clearCart(Cypress.env('user-cookies'));

    });
    
    it('should add item to the cart and buy', () => {
        const randomProd = Math.floor(Math.random() * 15) + 1;

        productPage.addToCartCall(randomProd);

        checkoutPage.deleteItemFromCartCall();
        
        productPage.navigateToProduct(randomProd);

        defaultPage.defaultLayout();

        productPage.productLayout();

        productPage.addToCartClick();

        productPage.waitAddToCartCall();

        cartPage.navigateToCart();

        defaultPage.defaultLayout();

        cartPage.cartLayout();

        cartPage.itemPriceAndName();
        
        checkoutPage.openPlaceOrderModal();

        checkoutPage.modalLayout();

        cy.fixture('checkout_data').then((text) => {
            checkoutPage.fillOutForm(text.name, text.card);
        });

        checkoutPage.submitForm();

        checkoutPage.validateOrder();

        checkoutPage.waitDeleteCartCall();

        checkoutPage.closeOrderModal();

    });
});
