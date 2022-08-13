const {When} = require("cypress-cucumber-preprocessor/steps");

When(/^I type "(.*)" into the (.* input field|.* mask)( and hit enter)?$/, function (text, selectorIdentifier, hitEnter) {
    cy.helper.typeText(text,selectorIdentifier,hitEnter!==undefined);
});

When(/^I want to search for "([^"]*)"$/, function (searchTerm) {
    cy.scope.searchTerm = searchTerm;
});
When(/^I type my search term into the (.* input field|.* mask)( and hit enter)?$/, function (selectorIdentifier, hitEnter) {
    cy.helper.typeText(cy.scope.searchTerm,selectorIdentifier,hitEnter!==undefined);
});

