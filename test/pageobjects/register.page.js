const { $ } = require("@wdio/globals");
import Page from "./page";


class RegisterPage extends Page {

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

  open() {
    return super.open("register");
  }
}

export default new RegisterPage();
