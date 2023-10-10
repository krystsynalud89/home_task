import { expect } from "chai";
import homePage from "../pageobjects/home.page";

describe("Home page elements validation", () => {
  it(`elements "banner", "tagBar", "navigationBar" should be present on the homePage`, async () => {
    await homePage.open();

    expect(await homePage.banner.isDisplayed()).to.be.true;
    expect(await homePage.tagBar.isDisplayed()).to.be.true;
    expect(await homePage.navigationBar.isDisplayed()).to.be.true;
  });
});
