/**
 *
 * this class is forwarding the correct page object model or representive variables of it
 * based on the page description provided over the gherkin bdd definition
 * @author Marco Bierbach
 */
const MainPage = require('../pages/main.page');
const SearchPage = require('../pages/search.page');
const RegistrationPage = require('../pages/registration.page');
const LoginPage = require('../pages/login.page');
const WishlistPage = require('../pages/wishlist.page');
const BasketPage = require('../pages/basket.page');

cy.pageMap = {};

const PAGEMAP = {
    'main page': MainPage,
    'search page': SearchPage,
    'registration page': RegistrationPage,
    'login page': LoginPage,
    'wishlist page': WishlistPage,
    'basket page': BasketPage
}

cy.pageMap.getPageUrl = (pageDescription) => {
    if(PAGEMAP[pageDescription] === undefined)
        cy.logger.log("Error",`no url mapping found for page description [${pageDescription}]`);

    return Cypress.env('frontendUrl').concat(PAGEMAP[pageDescription].path);
}

cy.pageMap.getPageRegExp = (pageDescription) => {
    if(PAGEMAP[pageDescription] === undefined)
        cy.logger.log("Error", `no url mapping found for page description [${pageDescription}]`);
    return PAGEMAP[pageDescription].regexp;
}

cy.pageMap.getPage = (pageDescription) => {
    if(PAGEMAP[pageDescription] == null)
        cy.logger.log("Error",`no page mapping found for page description [${pageDescription}]`);
    return PAGEMAP[pageDescription];
}