const Page = require('./Page');
const Locator = require('../../support/objects/locator.js');

class RegistrationPage extends Page {

    get path () { return "/registrierung"};

    registerUser = {
        'first_Name': "Hell",
        lastName: "Berter",
        emailID: "hell.berter@gmail.com",
        password: "Test@123**"
    }


    //page locators
    selectors = {
    'salutation': new Locator('xpath', '//*[@id="salutation"]'),
    'first name': new Locator('xpath', '//*[@id="firstName"]'),
    'last name': new Locator('xpath', '//*[@id="lastName"]'),
    'emailID field': new Locator('xpath', '/html/body/div[12]/div[3]/div[1]/form/div/div[4]/div/input'),
    'password field': new Locator('xpath', '//*[@id="password"]'),
    'password repeat field': new Locator('xpath', '//*[@id="password2"]'),
    'first tick': new Locator('xpath', '//*[@id="register-form"]/div/div[11]/div/div/span[1]'),
    'second tick': new Locator('xpath', '//*[@id="register-form"]/div/div[12]/div/div/span[1]'),
    'register submit button': new Locator('xpath', '//*[@id="register-submit"]')

    }
}
//registrierung
module.exports = new RegistrationPage();