import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'

describe('Cart Flow', () => {
    beforeEach(() => {
        cy.fixture('users').then((users) => {
            LoginPage.login(users.validUser.username, users.validUser.password)
        })
    })

    it('Should add product to cart', () => {
        ProductsPage.addBackpackToCart()
        ProductsPage.validateCartBadge('1')
        ProductsPage.accessCart()

        CartPage.validateProductInCart('Sauce Labs Backpack')
    })

    it('Should remove product from cart', () => {
        ProductsPage.addBackpackToCart()
        ProductsPage.accessCart()

        CartPage.removeBackpackFromCart()
        CartPage.validateCartIsEmpty()
    })
})