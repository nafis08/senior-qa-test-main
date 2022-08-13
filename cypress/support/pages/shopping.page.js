const Page = require('./Page');
const Locator = require('../../support/objects/locator.js');

class ShoppingPage extends Page {

    get path () { return "/suche"};

    //page locators
    selectors = {
        'first wish button': new Locator('xpath', '//*[@id="filterProducts"]/div/div[1]/div/div[1]/div'),
        'second wish': new Locator('xpath', '//*[@id="filterProducts"]/div/div[3]/div[2]/div[1]/div'),
        'third wish': new Locator('xpath', '//*[@id="filterProducts"]/div/div[4]/div/div[1]/div'),
        'fourth wish': new Locator('xpath', '//*[@id="filterProducts"]/div/div[28]/div/div[1]/div'),
        'fifth wish': new Locator('xpath', '//*[@id="filterProducts"]/div/div[5]/div[2]/div[1]/div'),
        'wishlist button': new Locator('xpath', '//*[@id="responsive"]/div[3]/div/div[2]/div[3]/div[2]/div/a/span[1]'),
        'wishlist number': new Locator('xpath', '//*[@id="responsive"]/div[3]/div/div[2]/div[3]/div[2]/div/a/span[2]/span[1]')
    }
}
//registrierung
module.exports = new ShoppingPage();