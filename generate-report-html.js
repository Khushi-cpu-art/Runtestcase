const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

const reportPath = path.join(__dirname, 'test-reports', 'your-report-file.xml'); // Change filename accordingly

fs.readFile(reportPath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Report file not found:', err);
    process.exit(1);
  }
  xml2js.parseString(data, (err, result) => {
    if (err) {
      console.error('XML parse error:', err);
      process.exit(1);
    }
    // Customize HTML output here:
    let html = `<h2>Selenium IDE Test Report</h2>`;
    html += `<pre>${JSON.stringify(result, null, 2)}</pre>`;
    // Output to file
    fs.writeFileSync('report.html', html, 'utf-8');
    console.log('HTML report generated');
  });
});
