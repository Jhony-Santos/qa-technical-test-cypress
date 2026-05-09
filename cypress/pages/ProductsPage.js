class ProductsPage {
    addBackpackToCart() {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    }

    accessCart() {
        cy.get('[data-test="shopping-cart-link"]').click()
    }

    validateCartBadge(quantity) {
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', quantity)
    }
}

export default new ProductsPage()