const {Then, When, Given} = require("cypress-cucumber-preprocessor/steps");

Then(/^I can see (\d+) (.*)$/, function (amount, domElement) {
    cy.helper.getElement(domElement).should('be.visible').should('have.length', amount);
});

When(/^I want to scroll to (.*)$/, function (domElement) {
    //cy.get('.sidebar').scrollTo('top');
    cy.helper.getElement(domElement).scrollIntoView();
});

When(/^I type "(.*)" into the (.* input field|.* mask)$/, function (text, selectorIdentifier) {
    cy.helper.typeText(text,selectorIdentifier);
});