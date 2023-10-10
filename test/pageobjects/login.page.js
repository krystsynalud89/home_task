const { $ } = require("@wdio/globals");
const Page = require("./page");


class LoginPage extends Page {
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

  open() {
    return super.open("login");
  }
}

export default new LoginPage();
