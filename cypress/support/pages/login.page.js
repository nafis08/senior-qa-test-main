const Page = require('./Page');
const Locator = require('../../support/objects/locator.js');

class LoginPage extends Page {

    get path () { return "/login"};

    //page locators
    selectors = {
        'loginEmail field': new Locator('xpath', '//*[@id="loginEmail"]'),
        'login password field': new Locator('xpath', '//*[@id="loginPassword"]'),
        'login submit button': new Locator('xpath', '//*[@id="login-submit"]'),
        'register button': new Locator('xpath', '//*[@id="registerAccount"]'),
        'cookie policy': new Locator('xpath', '//*[@id="responsive"]/div[15]/div'),
        'accept all cookies button': new Locator('xpath', '//*[@id="responsive"]/div[15]/div/div/div[2]/div[2]'),
        'save settings button': new Locator('xpath', '//*[@id="responsive"]/div[15]/div/div/div[2]/div[1]/button')
    }
}
//registrierung
module.exports = new LoginPage();