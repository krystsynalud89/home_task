const { $ } = require("@wdio/globals");
const Page = require("./basePage");
const NavBar = require("../components/common/navigationBar.component");


class HomePage extends Page {
  constructor() {
    super('');
    this.navBar = new NavBar();
  }

  get banner() {
    return $(`//*[@class="banner"]`);
  }

  get tagBar() {
    return $(`//*[@class="sidebar"]`);
  }

  get globalFeedTab() {
    return $(`//*[@class="feed-toggle"]//a[@class="nav-link active"]`);
  }
}

module.exports = HomePage;