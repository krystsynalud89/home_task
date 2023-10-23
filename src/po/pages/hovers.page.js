const { $ } = require("@wdio/globals");
const Page = require("./basePage");


class HoversPage extends Page {
  constructor() {
    super('https://the-internet.herokuapp.com/hovers');
  }

  get header() {
    return $(`h3`);
  }

  get helpText() {
    return $(`#content p`);
  }

  image(number) {
    return $(`//*[@class="figure"][${number}]`);
  } 
  
  imageText(number) {
    return $(`//*[@class="figure"][${number}]//h5`);
  }

  get firstImage() {
    return $(`//*[@class="figure"][1]`);
  } 
  
  get firstImageText() {
    return $(`//*[@class="figure"][1]//h5`);
  }  
  
  get secondImage() {
    return $(`//*[@class="figure"][2]`);
  } 

  get secondImageText() {
    return $(`//*[@class="figure"][2]//h5`);
  } 
  
  get thirdImage() {
    return $(`//*[@class="figure"][3]`);
  }

  get thirdImageText() {
    return $(`//*[@class="figure"][3]//5`);
  }
}

export default new HoversPage();