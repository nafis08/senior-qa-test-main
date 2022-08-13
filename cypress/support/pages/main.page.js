const Page = require('./Page');
const Locator = require('../../support/objects/locator.js');

class MainPage extends Page {

    get path () { return "/"};

    //page locators
    selectors = {
        'search input field': new Locator('xpath', '//*[@id="searchFieldInputId"]'),
        'cookie policy': new Locator('xpath', '//*[@id="responsive"]/div[15]/div'),
        'accept all cookies button': new Locator('xpath', '//*[@id="responsive"]/div[15]/div/div/div[2]/div[2]'),
        'save settings button': new Locator('xpath', '//*[@id="responsive"]/div[15]/div/div/div[2]/div[1]/button'),
        'login button' : new Locator('xpath', '//*[@id="responsive"]/div[3]/div/div[2]/div[3]/div[1]/div/a/span[1]'),
        'your account button': new Locator('xpath', '//*[@id="responsive"]/div[3]/div/div[2]/div[3]/div[1]/div/a/span[1]')
    }
}

module.exports = new MainPage();