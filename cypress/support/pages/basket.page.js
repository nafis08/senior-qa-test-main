const Page = require('./Page');
const Locator = require('../../support/objects/locator.js');

class BasketPage extends Page {

    get path () { return "/warenkorb"};

    //page locators
    selectors = {}
}

module.exports = new BasketPage();