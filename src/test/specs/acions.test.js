import { expect } from "chai";
import hoversPage from "../../po/pages/hovers.page";
import { scroll } from "../helpers/actions";

const { pages } = require("../../po");
const users = [1, 2, 3];

describe("Actions", () => {
  it("Should type the word to the input field", async () => {
    await pages("registerPage").open();

    await pages("registerPage").inputUserName.click(); // make element active

    await browser
      .action("key")
      .down("a")
      .down("p")
      .down("p")
      .up("a")
      .up("p")
      .up("p")
      .perform();

    expect(await pages("registerPage").inputUserName.getValue()).to.be.equal(
      "app"
    );
  });

  it("should scroll using wheel action commands", async () => {
    await browser.url("https://the-internet.herokuapp.com/");
    await scroll(0, 500);
    expect(await browser.execute(() => window.scrollY)).to.be.equal(500);
  });

  users.forEach((element) => {
    it(`should see user${element} text when we hover mouse on ${element} user`, async () => {
      await hoversPage.open();
      await hoversPage.moveTo(hoversPage.image(element));
      expect(
        await hoversPage.waitForElementAndGetText(hoversPage.imageText(element))
      ).to.be.equal(`name: user${element}`);
    });
  });
});
