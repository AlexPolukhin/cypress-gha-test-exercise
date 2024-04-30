/// <reference types="cypress"/>

import { DefaultPage } from '../../0-page-objects/default'
import { HomePage } from '../../0-page-objects/homepage'
import { ProductPage } from '../../0-page-objects/product'
import { CartPage } from '../../0-page-objects/cart'
import { CheckoutPage } from '../../0-page-objects/checkout'

const defaultPage = new DefaultPage()
const homePage = new HomePage()
const productPage = new ProductPage()
const cartPage = new CartPage()
const checkoutPage = new CheckoutPage()

describe('Verify homepage ', () => {
    beforeEach(() => {
        defaultPage.setCookie(
            Cypress.env('logged-token'),
            Cypress.env('user-logged-in')
        )

        homePage.visitHomePage()
    })

    it('should have a title', () => {
        homePage.validateHomePageURL()

        homePage.validateHomePageURL()

        defaultPage.defaultLayout()

        homePage.homeBody()
    })

    it('open a product from homepage', () => {
        homePage.visitHomePage()
        cy.get('.mb-4').eq(8)

        const randomId = Cypress._.random(0, 8)
        homePage.selectRandomProduct(randomId)

        defaultPage.defaultLayout()

        productPage.productLayout()
    })
})

describe('Buy product', () => {
    beforeEach(() => {
        defaultPage.setCookie(
            Cypress.env('logged-token'),
            Cypress.env('user-logged-in')
        )

        defaultPage.clearCart(Cypress.env('user-logged-in'))
    })

    it('should add item to the cart and buy', () => {
        const randomProd = Cypress._.random(0, 15)

        productPage.addToCartCall(randomProd)

        checkoutPage.deleteItemFromCartCall()

        productPage.navigateToProduct(randomProd)

        defaultPage.validateUserLoggedIn()

        defaultPage.defaultLayout()

        productPage.productLayout()

        productPage.addToCartClick()

        productPage.waitAddToCartCall()

        cartPage.navigateToCart()

        defaultPage.validateUserLoggedIn()

        defaultPage.defaultLayout()

        cartPage.cartLayout()

        cartPage.itemPriceAndName()

        checkoutPage.openPlaceOrderModal()

        checkoutPage.modalLayout()

        cy.fixture('checkout_data').then(text => {
            checkoutPage.fillOutForm(text.name, text.card)
        })

        checkoutPage.submitForm()

        checkoutPage.validateOrder()

        checkoutPage.waitDeleteCartCall()

        checkoutPage.closeOrderModal()
    })
})
