## Krieger Test Challenge Automation Project (A.k.A TCAP)

This Project is ment to be used for the Live Coding Session Challenge for the Krieger Applicants

## Project Overview

this section will explain the used technologies inside this repo, its folder structure 
and also explains how to prepare and execute the project

### Used Technologies

in order to keep up with the steady growth of test automation possibilities the project will 
use some of the most modern technologies available on the market.

- "cypress": "^9.3.1",
- "navigator": "^1.0.1"
- "cypress-cucumber-preprocessor": "^4.3.1",
- "cypress-xpath": "^1.6.2",
- "fs-extra": "^10.0.0",
- "multiple-cucumber-html-reporter": "^1.18.3"

for the feature files who describe the test scenarios Gherkin is used to ease up the process of writing 
new test cases fast and consistent

### Project Structure
```text
.
├── README.md
├── cucumber-html-report.js
├── cypress
│ ├── config
│ │ └── test.json
│ ├── fixtures
│ │ └── example.json
│ ├── integration
│ │ ├── main.page.feature
│ │ └── step_definitions
│ │     ├── common.spec.js
│ │     ├── main.page.spec.js
│ │     └── search.page.spec.js
│ ├── plugins
│ │ └── index.js
│ └── support
│     ├── constants.js
│     ├── helper.js
│     ├── index.js
│     ├── localization
│     │ └── german.json
│     ├── localization.js
│     ├── logger.js
│     ├── maps
│     │ └── page.map.js
│     ├── objects
│     │ ├── locator.js
│     │ └── wildcard.js
│     ├── pages
│     │ ├── Page.js
│     │ ├── main.page.js
│     │ └── search.page.js
│     └── scope.js
├── cypress.json
├── package-lock.json
├── package.json
└── reports
    ├── cucumber-html
    │ └── report.html
    │     └── features
    └── cucumber-json
        ├── empty.cucumber.json
        └── main.cucumber.json

```

package.json
cypress.json - configuration for cypress and its libraries
README.md
base-data.json - base data for the automation project

inside the cypress folder, 4 base folders can be found

- fixture
  - folder for any mock related content
- integration
  - folder for the feature files containing the Gherkin based scenarios and the step definition spec files in a sub folder called step_definitions
- plugins
  - index.js file preparing the plugins and several function overwrites
- support
  - classes contaning help functions to generalize and ease up the handling of cypress across the project

### How to Use the automation

#### Setup the Project

```bash
npm install
```

#### Run the test automation

run in headles mode
```bash
npx cypress run
```

run in cypress browser mode
````bash
npx cypress open
````

npm based script commands

```bash
npm run cy:silent-test
npm run cy:editor-test
```

env = see /cypress/config folder for possible env values. (without the file ending)

__more commands will follow__