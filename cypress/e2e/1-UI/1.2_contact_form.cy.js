/// <reference types="cypress" />

import { DefaultPage } from '../../0-page-objects/default'
import { HomePage } from '../../0-page-objects/homepage'
import { CartPage } from '../../0-page-objects/cart'
import { ProductPage } from '../../0-page-objects/product'

const defaultPage = new DefaultPage()
const homePage = new HomePage()
const cartPage = new CartPage()
const productPage = new ProductPage()

describe('Contact form on Homepage', () => {
    beforeEach(() => {
        defaultPage.setCookie(
            Cypress.env('new-user'),
            Cypress.env('user-cookies')
        )
        homePage.visitHomePage()
    })

    it('Verify contact form with close func', () => {
        cy.fixture('contact_form').then(text => {
            defaultPage.openContactForm(
                text.contact_button,
                text.title,
                text.email_field_title,
                text.name_field_title,
                text.message_field_title,
                text.send_button,
                text.close_button
            )

            defaultPage.closeContactForm(text.close_button)
        })
    })

    it('Verify contact form with send message func', () => {
        cy.fixture('contact_form').then(text => {
            defaultPage.openContactForm(
                text.contact_button,
                text.title,
                text.email_field_title,
                text.name_field_title,
                text.message_field_title,
                text.send_button,
                text.close_button
            )

            defaultPage.fulfillContactForm(
                text.email_valid,
                text.name,
                text.message
            )

            defaultPage.sendMessage(text.send_button, text.success_message)
        })
    })
})

describe('Contact form on Cart page', () => {
    beforeEach(() => {
        defaultPage.setCookie(
            Cypress.env('new-user'),
            Cypress.env('user-cookies')
        )

        cartPage.openCartPage()
        defaultPage.defaultLayout()
        cartPage.cartLayout()
    })

    it('Verify contact form with close func', () => {
        cy.fixture('contact_form').then(text => {
            defaultPage.openContactForm(
                text.contact_button,
                text.title,
                text.email_field_title,
                text.name_field_title,
                text.message_field_title,
                text.send_button,
                text.close_button
            )

            defaultPage.closeContactForm(text.close_button)
        })
    })

    it('Verify contact form with send message func', () => {
        cy.fixture('contact_form').then(text => {
            defaultPage.openContactForm(
                text.contact_button,
                text.title,
                text.email_field_title,
                text.name_field_title,
                text.message_field_title,
                text.send_button,
                text.close_button
            )

            defaultPage.fulfillContactForm(
                text.email_valid,
                text.name,
                text.message
            )

            defaultPage.sendMessage(text.send_button, text.success_message)
        })
    })
})

describe.only('Contact form on Product page', () => {
    beforeEach(() => {
        defaultPage.setCookie(
            Cypress.env('new-user'),
            Cypress.env('user-cookies')
        )
        const randomProd = Cypress._.random(0, 15)
        productPage.navigateToProduct(randomProd)
        defaultPage.defaultLayout()
        productPage.productLayout()
    })

    it('Verify contact form with close func', () => {
        cy.fixture('contact_form').then(text => {
            defaultPage.openContactForm(
                text.contact_button,
                text.title,
                text.email_field_title,
                text.name_field_title,
                text.message_field_title,
                text.send_button,
                text.close_button
            )

            defaultPage.closeContactForm(text.close_button)
        })
    })

    it('Verify contact form with send message func', () => {
        cy.fixture('contact_form').then(text => {
            defaultPage.openContactForm(
                text.contact_button,
                text.title,
                text.email_field_title,
                text.name_field_title,
                text.message_field_title,
                text.send_button,
                text.close_button
            )

            defaultPage.fulfillContactForm(
                text.email_valid,
                text.name,
                text.message
            )

            defaultPage.sendMessage(text.send_button, text.success_message)
        })
    })
})
