const HomePage = require('./home.page');
const LoginPage = require('./login.page');
const RegisterPage = require('./register.page');

/**
 *
 * @param name {'homePage' | 'loginPage' | 'registerPage'}
 * @returns {HomePage | LoginPage | RegisterPage}
 */
function pages(name) {
    const items = {
        homePage: new HomePage(),
        loginPage: new LoginPage(),
        registerPage: new RegisterPage()
    }
    return items[name]
}

module.exports = {
    HomePage,
    LoginPage,
    RegisterPage,
    pages
}