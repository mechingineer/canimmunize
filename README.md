## Tooling Info:

Node Version - 20.18.0
Playwright Version - 10.8.2
Cucumber Version - 11.0.1
Cucumber HTML Report Version - 7.2.0

## Introduction to framework
The framework used in this demo project is Page Object Model with tests written in BDD format utilising Cucumber. All the test feature files are present under src/tests/features/ and their respective glue code TS files are present under src/test/steps/. All the weblocators are present in their respective page classes present under src/pages/.
Helper contains report generation and a util class.
Test configurations can be set in .env file in the root of the project.

### Execution Steps
1. Clone the repo and switch to branch 'canimmunize'
2. Install all the required dependencies using 'nmp install' and 'npx playwright install'
3. Set required configurations in the .env file. For now, it is set to execute on chrome with headless set to FALSE. Supported options for BROWSER_NAME are chrome, firefox, and safari. 
4. Open terminal and execute 'npm test'
5. After execution, HTML report will be generated in reports folder and it will open automatically. Also, in case of failures the screenshot will be added to reports/screenshots/.