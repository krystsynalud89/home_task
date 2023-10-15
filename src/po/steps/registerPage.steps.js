const BasePage = require('../pages/basePage');

const {pages} = require('../index');

class RegisterPageSteps extends BasePage {
    async fillForm(userName, email, password) {
        await pages('registerPage').inputUserName.addValue(userName);
        await pages('registerPage').inputEmail.addValue(email);
        await pages('registerPage').inputPassword.addValue(password);
    }

    async clickSignUpButton() {
        await pages('registerPage').signUpBtn.click();
    }

    async submit(userName, email, password) {
        await this.fillForm(userName, email, password);
        await this.clickSignUpButton();
    }
}

export default new RegisterPageSteps();