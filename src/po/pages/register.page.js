const { $ } = require("@wdio/globals");
import Page from "./basePage";
const NavBar = require("../components/common/navigationBar.component");


class RegisterPage extends Page {
  constructor() {
    super('/#/register');
    this.navBar = new NavBar();
  }

  get inputUserName() {
    return $(`//*[@type="text"]`);
  }

  get inputEmail() {
    return $(`//*[@type="email"]`);
  }

  get inputPassword() {
    return $(`//*[@type="password"]`);
  }

  get signUpBtn() {
    return $(`//*[@type="submit"]`);
  }

  get errorMessage() {
    return $(`//*[@class="ng-binding ng-scope"]`);
  }

  async clickOnSignUpBtn() {
    await super.waitForElementAndClick(this.signUpBtn);
  }
}

module.exports = RegisterPage;
