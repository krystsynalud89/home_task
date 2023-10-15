const {browser} = require("@wdio/globals");
const {waitForElement} = require("../../test/helpers/wait");

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
class BasePage {
    constructor(url) {
        this.url = url;
    }

    open() {
        return browser.url(`${this.url}`);
    }

    async waitForElementAndClick(elem) {
        await waitForElement(elem);
        await elem.click();
    }
}

module.exports = BasePage;
