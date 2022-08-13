/**
 * @type {Cypress.PluginConfig}
 */
const cucumber = require('cypress-cucumber-preprocessor').default
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile (file) {
    const pathToConfigFile = path.resolve('cypress','config', `${file}.json`);
    return fs.readJsonSync(pathToConfigFile);
}

// plugins file
module.exports = (on, config) => {
    //cucumber load
    on('file:preprocessor', cucumber())

    //browser launch
    on('before:browser:launch', (browser = {}, launchOptions) => {
        //nothing todo yet, let's finetune this later
    })

    // accept a configFile value or use development by default
    console.log("DEBUG",`loading env file ${config.env.configFile}`)
    const file = config.env.configFile || 'test'
    return getConfigurationByFile(file)
}