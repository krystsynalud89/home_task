import {expect} from "chai";
const {pages} = require('../../po');

describe("Login page elements validation", () => {
    it(`elements "header", "inputEmail", "inputPassword","logInBtn","needAccount" should be present on the loginPage`, async () => {
        await pages('loginPage').open();

        expect(await pages('loginPage').header.getText()).to.be.equal(`Sign in`);
        expect(await pages('loginPage').inputEmail.isDisplayed()).to.be.true;
        expect(await pages('loginPage').inputPassword.isDisplayed()).to.be.true;
        expect(await pages('loginPage').logInBtn.isDisplayed()).to.be.true;
        expect(await pages('loginPage').needAccount.isDisplayed()).to.be.true;

        expect(await pages('loginPage').navBar.item('logo').isDisplayed()).to.be.true;
        expect(await pages('loginPage').navBar.item('home').isDisplayed()).to.be.true;
        expect(await pages('loginPage').navBar.item('signIn').isDisplayed()).to.be.true;
        expect(await pages('loginPage').navBar.item('signUp').isDisplayed()).to.be.true;
    });
});
