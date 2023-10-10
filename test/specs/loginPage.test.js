import { expect } from "chai";
import loginPage from "../pageobjects/login.page";

describe("Login page elements validation", () => {
  it(`elements "header", "inputEmail", "inputPassword","logInBtn","needAccount" should be present on the loginPage`, async () => {
    await loginPage.open();

    expect(await loginPage.header.getText()).to.be.equal(`Sign in`);
    expect(await loginPage.inputEmail.isDisplayed()).to.be.true;
    expect(await loginPage.inputPassword.isDisplayed()).to.be.true;
    expect(await loginPage.logInBtn.isDisplayed()).to.be.true;
    expect(await loginPage.needAccount.isDisplayed()).to.be.true;
  });
});
