class LoginPage {
    accessLoginPage() {
        cy.visit('/')
    }

    fillUsername(username) {
        cy.get('[data-test="username"]').type(username)
    }

    fillPassword(password) {
        cy.get('[data-test="password"]').type(password)
    }

    clickLogin() {
        cy.get('[data-test="login-button"]').click()
    }

    login(username, password) {
        this.accessLoginPage()
        this.fillUsername(username)
        this.fillPassword(password)
        this.clickLogin()
    }

    validateSuccessfulLogin() {
        cy.url().should('include', '/inventory.html')
    }

    validateErrorMessage() {
        cy.get('[data-test="error"]').should('be.visible')
    }
}

export default new LoginPage()