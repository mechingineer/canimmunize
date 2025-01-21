// generate-report.ts
import * as reporter from 'cucumber-html-reporter';

const options: reporter.Options = {
  theme: 'bootstrap', // Explicitly use one of the allowed themes
  jsonFile: 'reports/cucumber_report.json',
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  storeScreenshots: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Chromium",
    "Platform": "Local Machine",
    "Executed": "Remote"
  }
};

reporter.generate(options);