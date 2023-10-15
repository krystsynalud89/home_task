import {expect} from "chai";
import {waitForElement} from "../helpers/wait";
import registerPageSteps from "../../po/steps/registerPage.steps";

const {pages} = require('../../po');

describe("Register page elements validation", () => {
    it(`elements "inputUserName", "inputEmail", "inputPassword","SignUpBtn" should be present on the loginPage`, async () => {
        await pages('registerPage').open();

        expect(await pages('registerPage').inputUserName.isDisplayed()).to.be.true;
        expect(await pages('registerPage').inputEmail.isDisplayed()).to.be.true;
        expect(await pages('registerPage').inputPassword.isDisplayed()).to.be.true;
        expect(await pages('registerPage').inputPassword.isDisplayed()).to.be.true;
        expect(await pages('registerPage').signUpBtn.isDisplayed()).to.be.true;

        expect(await (await pages('registerPage').navBar.item('logo')).isDisplayed()).to.be.true;
        expect(await (await pages('registerPage').navBar.item('home')).isDisplayed()).to.be.true;
        expect(await (await pages('registerPage').navBar.item('signIn')).isDisplayed()).to.be.true;
        expect(await (await pages('registerPage').navBar.item('signUp')).isDisplayed()).to.be.true;
    });

    it(`error message is displayed`, async () => {
        await pages('registerPage').open();
        await registerPageSteps.submit('','', '');
        await waitForElement(pages('registerPage').errorMessage);

        expect(await pages('registerPage').errorMessage.isDisplayed()).to.be.true;
    });
});
