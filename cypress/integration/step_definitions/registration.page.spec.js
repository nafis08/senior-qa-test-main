const {When, Given} = require("cypress-cucumber-preprocessor/steps");

When(/^I want to select "([^"]*)"$/, function (salutationSelection) {
    cy.scope.salutationSelection = salutationSelection;
});

When(/^I click (.*) on the (salutation selection)$/, function (salutation, domElement) {
    cy.helper.select(salutation, domElement);
});

Then(/^I make my selection into the (.*)$/, function (selectorIdentifier) {
    cy.helper.select(cy.scope.salutationSelection,selectorIdentifier);
});

When(/^I type (.*) into the (.*)$/, function (text, selectorIdentifier) {
     let elements = cy.helper.getElement(selectorIdentifier);
//     console.log(elements);
//     elements.forEach(element => {
//                element.type(text, {delay: 50}) ;
//       });

    cy.helper.typeText(text,selectorIdentifier);
});

Then(/^I click on (.*)$/, function (selectorIdentifier) {
    cy.helper.select(cy.scope.checkBox,selectorIdentifier);
});

