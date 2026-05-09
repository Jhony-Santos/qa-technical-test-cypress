class CheckoutPage {
    fillCheckoutInformation(firstName, lastName, postalCode) {
        cy.get('[data-test="firstName"]').type(firstName)
        cy.get('[data-test="lastName"]').type(lastName)
        cy.get('[data-test="postalCode"]').type(postalCode)
    }

    clickContinue() {
        cy.get('[data-test="continue"]').click()
    }

    clickFinish() {
        cy.get('[data-test="finish"]').click()
    }

    validateCheckoutOverview() {
        cy.url().should('include', '/checkout-step-two.html')
    }

    validateOrderCompleted() {
        cy.get('[data-test="complete-header"]')
            .should('contain', 'Thank you for your order!')
    }

    validateRequiredFieldError() {
        cy.get('[data-test="error"]').should('be.visible')
    }
}

export default new CheckoutPage()