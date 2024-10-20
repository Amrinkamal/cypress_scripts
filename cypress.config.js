// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here

//     },
baseUrl:"https://www.firstcry.com/"
//   },
// });

//CSV READER

// const { defineConfig } = require('cypress');
// const { createObjectCsvWriter } = require('csv-writer');

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       on('task', {
//         writeCsv({ filePath, data }) {
//           const csvWriter = createObjectCsvWriter({
//             path: filePath,
//             header: Object.keys(data[0]).map(key => ({ id: key, title: key }))
//           });

//           return csvWriter.writeRecords(data)
//             .then(() => null)
//             .catch(err => {
//               console.error('Error writing CSV:', err);
//               throw err;
//             });
//         }
//       });
//     }
//   }
// });

//CSV WRITER

//cypress.config.js or cypress/plugins/index.js
//cypress.config.js

const { defineConfig } = require('cypress');
const { createObjectCsvWriter } = require('csv-writer');
const path = require('path');
const fs = require('fs');

module.exports = defineConfig({
  e2e: {
    env: {
      API_URL: 'https://example.com/api',
      USER_EMAIL: 'test@example.com'
    },
    setupNodeEvents(on, config) {
      // Register the task to write data to a CSV file
      on('task', {
        writeToCSV({ fileName, data }) {
          const filePath = path.resolve('cypress/fixtures', fileName);

          // Create CSV writer instance
          const csvWriter = createObjectCsvWriter({
            path: filePath,
            header: Object.keys(data[0]).map(key => ({ id: key, title: key, title1:key })),
            append: fs.existsSync(filePath) // Append to file if it already exists
          });

          // Write data to CSV
          return csvWriter.writeRecords(data)
            .then(() => null); // Task must return null or a promise
        }
      });
    }
  }

  
});
