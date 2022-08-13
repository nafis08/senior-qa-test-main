const Page = require('./Page');
const Locator = require('../../support/objects/locator.js');

class WishlistPage extends Page {

    get path () { return "/wunschliste"};

    //page locators
    selectors = {
       'zipcode input': new Locator('xpath', '/html/body/div[12]/div[3]/div[1]/div[1]/div[2]/div/div[1]/div[1]/input'),
       'wishlist items': new Locator('xpath', '/html/body/div[12]/div[3]/div[1]/div[1]/div[2]/div/div[2]'),
       'add to basket': new Locator('xpath', '//*[@id="addAddToWishlist"]')
    }
}
//registrierung
module.exports = new WishlistPage();