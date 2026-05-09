import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'

describe('Checkout Flow', () => {
    beforeEach(() => {
        cy.fixture('users').then((users) => {
            LoginPage.login(users.validUser.username, users.validUser.password)
        })

        ProductsPage.addBackpackToCart()
        ProductsPage.accessCart()
        CartPage.clickCheckout()
    })

    it('Should complete checkout successfully', () => {
        CheckoutPage.fillCheckoutInformation('Jhonatan', 'Santos', '12345')
        CheckoutPage.clickContinue()
        CheckoutPage.validateCheckoutOverview()
        CheckoutPage.clickFinish()
        CheckoutPage.validateOrderCompleted()
    })

    it('Should display error when checkout fields are empty', () => {
        CheckoutPage.clickContinue()
        CheckoutPage.validateRequiredFieldError()
    })
})