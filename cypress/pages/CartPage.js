class CartPage {
    validateProductInCart(productName) {
        cy.get('[data-test="inventory-item-name"]').should('contain', productName)
    }

    removeBackpackFromCart() {
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    }

    validateCartIsEmpty() {
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
    }

    clickCheckout() {
        cy.get('[data-test="checkout"]').click()
    }
}

export default new CartPage()