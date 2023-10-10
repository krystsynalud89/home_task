const { $ } = require("@wdio/globals");
const Page = require("./page");


class HomePage extends Page {
  get banner() {
    return $(`//*[@class="banner"]`);
  }

  get tagBar() {
    return $(`//*[@class="sidebar"]`);
  }

  get navigationBar() {
    return $(`//*[@class="feed-toggle"]//a[@class="nav-link active"]`);
  }

  open() {
    return super.open("");
  }
}

export default new HomePage();
