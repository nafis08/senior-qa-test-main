const Page = require('./Page');
const Locator = require('../../support/objects/locator.js');

class SearchPage extends Page {

    get path () { return "/suche"};

    //page locators
    selectors = {
        'search bar': new Locator('xpath', '//*[@id="searchFieldInputId"]/div/h1'),
        'result list view': new Locator('xpath', '//*[@id="filterProducts"]/div'),
        'result list view elements': new Locator('xpath', '//*[@id="filterProducts"]/div/div[@class="articleTile"]'),
        'login button': new Locator('xpath', '//*[@id="responsive"]/div[3]/div/div[2]/div[3]/div[1]/div/a'),
        'register button': new Locator('xpath', '//button[@id="registerAccount"]'),
//        'clear search': new Locator('xpath', '/html/body/div[3]/div/div[2]/div[2]/div[1]/form/button/svg/circle'),


        'first wish': new Locator('xpath', '/html/body/div[12]/div[3]/div[1]/div[4]/div[1]/div/div[3]/div/div[1]/div/div[1]/div'),
        'second wish': new Locator('xpath', '//*[@id="filterProducts"]/div/div[10]/div/div[1]/div'),
        'third wish': new Locator('xpath', '//*[@id="filterProducts"]/div/div[12]/div/div[1]/div'),
        'fourth wish': new Locator('xpath', '//*[@id="filterProducts"]/div/div[28]/div/div[1]/div'),
        'fifth wish': new Locator('xpath', '/html/body/div[12]/div[3]/div[1]/div[4]/div[1]/div/div[3]/div/div[39]/div/div[1]/div'),
        'wishlist button': new Locator('xpath', '/html/body/div[12]/div[3]/div[1]/div[4]/div[1]/div/div[3]/div/div[39]/div/div[1]/div'),
        'betten button': new Locator('xpath', '//*[@id="headerMenuContainer"]/div/div/div[2]/ul/li[1]/span[1]/a/span'),
    }
}

module.exports = new SearchPage();