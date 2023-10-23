const { browser } = require("@wdio/globals");

export const scroll = async (x, y) => {
  await browser
    .action("wheel")
    .scroll({
      deltaX: x,
      deltaY: y,
      duration: 200,
    })
    .perform();
};
