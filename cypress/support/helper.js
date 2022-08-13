require('cypress-xpath')
const {DEFAULT_TIMEOUT} = require("./constants");

cy.helper = {};
cy.helper.goto = (pageDescription) => {
    const pageUrl = cy.pageMap.getPageUrl(pageDescription);
    cy.visit(pageUrl);
    cy.scope.currentPageObject = cy.pageMap.getPage(pageDescription);
    cy.scope.currentPage = pageDescription;
}

cy.helper.typeText = (text, selectorIdentifier,hitEnter) => {
    cy.helper.getElement(selectorIdentifier).type(text, {delay: 50});
//    cy.helper.getElement(selectorIdentifier).each((e1) => {
//        e1.type(text, {delay: 50});
//    });
    if(hitEnter)
        cy.helper.getElement(selectorIdentifier).type("{enter}");
}

cy.helper.clickElement = (selectorIdentifier) => {
    cy.helper.getElement(selectorIdentifier).click();
}

cy.helper.select = (selectionElement, selectorIdentifier) => {
    cy.helper.getElement(selectorIdentifier).select(selectionElement);
}

cy.helper.getElement = (selectorIdentifier) => {
    const selectorObject = cy.scope.currentPageObject.selectors[selectorIdentifier];
    if(selectorObject === undefined) {
        return undefined;
    }

    return findElement(selectorObject.type, selectorObject.value);
}

cy.helper.getElementWithWildCards = (selectorIdentifier, wildCardObjects) => {
    //single replacement
    const selectorObject = cy.scope.currentPageObject.selectors[selectorIdentifier];
    if(selectorObject === undefined) {
        return undefined;
    }

    let selectorValue = selectorObject.value;
    wildCardObjects.forEach(wildCardObject => {
        selectorValue = cy.helper.replaceWildCard(selectorValue, wildCardObject);
    });

    return findElement(selectorObject.type, selectorValue);
}

function findElement(selectorType, selectorValue) {
    if(selectorType === 'xpath')
        return cy.xpath(selectorValue, { timeout: DEFAULT_TIMEOUT });
    else
        return cy.get(selectorValue, { timeout: DEFAULT_TIMEOUT });
}

cy.helper.replaceWildCard = (text, wildCardObject) => {
    return text.replace(wildCardObject.wildCard, wildCardObject.value);
}

/**
 * This function needs to be finetuned in the future
 * @param text
 * @returns {*}
 */
cy.helper.stringIncludesRegularExpression = (text) => {
    return text.includes(".*");
}