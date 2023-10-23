const { $ } = require("@wdio/globals");
const Page = require("./basePage");
const NavBar = require("../components/common/navigationBar.component");
const { pages } = require("./index");
const { browser } = require("@wdio/globals");

class editorPage extends Page {
  constructor() {
    super(`/#/editor/`);
    this.navBar = new NavBar();
  }

  get publishArticleBtn() {
    return $(`[class="btn btn-lg pull-xs-right btn-primary"]`);
  }

  get inputArticleTitle() {
    return $(`//*[@placeholder="Article Title"]`);
  }

  get inputWhatsThisArticleAbout() {
    return $(`[placeholder="What's this article about?"]`);
  }

  get inputArticleTitle() {
    return $(`[placeholder="Write your article (in markdown)"]`);
  }

  get inputEnterTags() {
    return $(`[placeholder="Enter tags"]`);
  }

  async clickPublishArticleBtn() {
    await this.publishArticleBtn.click();
  }
}
