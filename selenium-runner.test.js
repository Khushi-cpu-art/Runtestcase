const { run } = require('selenium-side-runner');

test('Run Selenium IDE Tests', async () => {
  const result = await run('sovrn.side', {
    outputDirectory: 'test-reports',
    timeout: 180000,  // 3 minutes timeout per command
    headless: true,
  });
  
  expect(result.failed).toBe(0); // fail test if there are any failed tests
});
