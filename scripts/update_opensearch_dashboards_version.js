const fs = require('fs');
const path = require('path');

const packageJson = require('../../../package.json');
console.log(packageJson.version);
const opensearchDashboardsJsonPath = path.join(__dirname, '..', 'opensearch_dashboards.json');

// Read the existing opensearch_dashboards.json file
const opensearchDashboardsJson = JSON.parse(fs.readFileSync(opensearchDashboardsJsonPath, 'utf8'));

// Update the opensearchDashboardsVersion value
opensearchDashboardsJson.opensearchDashboardsVersion = packageJson.version;

// Write the updated JSON back to the file
fs.writeFileSync(opensearchDashboardsJsonPath, JSON.stringify(opensearchDashboardsJson, null, 2));
