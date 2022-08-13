import './helper.js'
import './localization.js'
import './maps/page.map.js'
import './scope.js'
import './logger.js'

Cypress.on("uncaught:exception", _ => {
  return false;
});

afterEach(() => {
    //cy.clearCookies();
});

