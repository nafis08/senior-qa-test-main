const report = require("multiple-cucumber-html-reporter");
const nav = require('navigator');

report.generate({
    jsonDir: "./reports/cucumber-json",  // ** Path of .json file **//
    reportPath: "./reports/cucumber-html/report.html",
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false,
    storeScreenshots: true,
    openReportInBrowser: true,
    pageTitle: "Krieger Test Challenge",
    displayDuration: true,
    metadata: {
        browser: {
            name: "chrome",
            version: "81",
        },
        device: "Local test machine",
        platform: {
            name: nav.platform,
            version: "Big Sur",
        },
    },
});