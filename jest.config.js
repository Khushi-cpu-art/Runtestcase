module.exports = {
  testTimeout: 180000,
  reporters: [
    "default",
    ["jest-html-reporter", {
      "outputPath": "test-reports/test-report.html",
      "includeFailureMsg": true,
      "includeConsoleLog": true
    }]
  ]
};
