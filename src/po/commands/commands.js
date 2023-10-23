import LoginPageSteps from "../steps/loginPage.steps";
const {browser} = require("@wdio/globals");


browser.addCommand("login", async function (userName, password) {
  await LoginPageSteps.fillForm(userName, password);
  await LoginPageSteps.clickLogInBtnButton();
});