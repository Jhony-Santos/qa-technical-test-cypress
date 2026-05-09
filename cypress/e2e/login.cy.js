import LoginPage from '../pages/LoginPage'

describe('Login Flow', () => {

    it('Should login successfully', () => {

        LoginPage.accessLoginPage()

        LoginPage.fillUsername('standard_user')

        LoginPage.fillPassword('secret_sauce')

        LoginPage.clickLogin()

        LoginPage.validateSuccessfulLogin()
    })

    it('Should display error with invalid password', () => {

        LoginPage.accessLoginPage()

        LoginPage.fillUsername('standard_user')

        LoginPage.fillPassword('wrong_password')

        LoginPage.clickLogin()

        LoginPage.validateErrorMessage()
    })
})