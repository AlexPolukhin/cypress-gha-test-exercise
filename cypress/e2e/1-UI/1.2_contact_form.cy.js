/// <reference types="cypress" />

import { DefaultPage } from '../../0-page-objects/default';
import { HomePage } from '../../0-page-objects/homepage';

const defaultPage = new DefaultPage();
const homePage = new HomePage();

describe('Contact form on Homepage', () => {
    beforeEach(() => {
        defaultPage.setCookie(Cypress.env('new-user'), Cypress.env('user-cookies'));
        homePage.visitHomePage();
    });

    it('Open the contact form and verify the modal display', () => {

        cy.fixture('contact_form').then((text) => {

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

    it('Open the contact form and send a message', () => {
        cy.fixture('contact_form').then((text) => {
            defaultPage.openContactForm(
                text.contact_button,
                text.title,
                text.email_field_title,
                text.name_field_title,
                text.message_field_title,
                text.send_button,
                text.close_button
            );

            defaultPage.fulfillContactForm(text.email_valid, text.name, text.message);

            defaultPage.sendMessage(text.send_button, text.success_message);
            
        })
    })
})
