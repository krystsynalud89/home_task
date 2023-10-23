export const waitMilliseconds = async (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

export const waitForElement = async (
  element,
  isDisplayed = true,
  timeout = 5000
) => {
  await element.waitForDisplayed({
    timeout,
    reverse: !isDisplayed,
    timeoutMsg: isDisplayed
      ? `${await element.selector} Error element is not visible`
      : `${await element.selector} Error element is visible`,
  });
};

export const waitForElementAndClickByScript = async (
  element,
  timeout = 20000
) => {
  await waitMilliseconds(500);
  await waitUntilIsClickable(element);
  await browser.executeScript("document.querySelector(arguments[0]).click()", [
    element.selector,
  ]);
};

export const waitUntilIsClickable = async function waitUntilIsClickable(
  selector,
  timeout = 10000,
  errorMsg = "Element is not clickable"
) {
  browser.waitUntil(
    () => {
      const element = $(selector);
      return element.isClickable();
    },
    {
      timeout: timeout,
      timeoutMsg: errorMsg,
      interval: 1000, // Polling interval in milliseconds
    }
  );
};
