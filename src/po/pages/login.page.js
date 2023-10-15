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
}

module.exports = LoginPage;