const { $ } = require("@wdio/globals");
const Page = require("./basePage");
const NavBar = require("../components/common/navigationBar.component");


class LoginPage extends Page {
  constructor() {
    super('/#/login');
    this.navBar = new NavBar();
  }

  get header() {
    return $(`h1`);
  }

  get needAccount() {
    return $(`a[ui-sref="app.register"][ng-show="$ctrl.authType === 'login'"]`);
  }

  get inputEmail() {
    return $(`//*[@type="email"]`);
  }

  get inputPassword() {
    return $(`//*[@type="password"]`);
  }

  get logInBtn() {
    return $(`//*[@type="submit"]`);
  }

  async fillForm(email, password) {
    await this.inputEmail.addValue(email);
    await this.inputPassword.addValue(password);
  }

  async clickLogInBtnButton() {
    await this.logInBtn.click();
  }

  async submit(email, password) {
    await this.fillForm(email, password);
    await this.clickLogInBtnButton();
  }
}

module.exports = LoginPage;