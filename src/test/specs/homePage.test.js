import {expect} from "chai";
const {pages} = require('../../po');

describe("Home page elements validation", () => {
    it(`elements "banner", "tagBar", "navigationBar" should be present on the homePage`, async () => {
        await pages('homePage').open();

        expect(await pages('homePage').banner.isDisplayed()).to.be.true;
        expect(await pages('homePage').tagBar.isDisplayed()).to.be.true;
        expect(await pages('homePage').globalFeedTab.isDisplayed()).to.be.true;

        expect(await pages('homePage').navBar.item('logo').isDisplayed()).to.be.true;
        expect(await pages('homePage').navBar.item('home').isDisplayed()).to.be.true;
        expect(await pages('homePage').navBar.item('signIn').isDisplayed()).to.be.true;
        expect(await pages('homePage').navBar.item('signUp').isDisplayed()).to.be.true;
    });
});
