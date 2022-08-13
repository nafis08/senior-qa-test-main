const {Then} = require("cypress-cucumber-preprocessor/steps");

Then(/^I can see (\d+) (result list view elements) in the result list view$/, function (amount, domElement) {
    cy.helper.getElement(domElement).should('be.visible').should('have.length', amount);
});

Then(/^I can see that the (.*) contains my search term$/, function (domElement) {
    cy.helper.getElement(domElement).should('contain.text', cy.scope.searchTerm);
});