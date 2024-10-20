// cypress/e2e/write-json-to-csv.spec.js

describe('Read JSON and Write to CSV', () => {
    it('should read JSON data and write it to a CSV file', () => {
      // Load data from the JSON file
      cy.fixture('data.json').then((data) => {
        // Log data for debugging purposes
        cy.log('Data from JSON:', JSON.stringify(data, null, 3));
  
        // Use the custom task to write data to a CSV file
        cy.task('writeToCSV', {
          fileName: 'output.csv', // Name of the CSV file
          data
        });
      });
    });
  });
  