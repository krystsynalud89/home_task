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
