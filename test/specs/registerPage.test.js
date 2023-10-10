import { expect } from "chai";
import { waitForElement } from "../helpers/wait";
import registerPage from "../pageobjects/register.page";

describe("Register page elements validation", () => {
  it(`elements "inputUserName", "inputEmail", "inputPassword","SignUpBtn" should be present on the loginPage`, async () => {
    await registerPage.open();

    expect(await registerPage.inputUserName.isDisplayed()).to.be.true;
    expect(await registerPage.inputEmail.isDisplayed()).to.be.true;
    expect(await registerPage.inputPassword.isDisplayed()).to.be.true;
    expect(await registerPage.inputPassword.isDisplayed()).to.be.true;
    expect(await registerPage.signUpBtn.isDisplayed()).to.be.true;
  });

  it(`error message is displayed`, async () => {
    await registerPage.open();
    await registerPage.clickOnSignUpBtn();
    await waitForElement(registerPage.errorMessage);
    
    expect(await registerPage.errorMessage.isDisplayed()).to.be.true;
  });
});
