// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add('addProductToCart', (product) => {
    cy.get('.inventory_item').each(($products)=>{
      if($products.text().includes(product)){
       cy.wrap($products).find('button').click()
      }
    })
  })

  const fs = require('fs');
const path = require('path');

Cypress.Commands.add('appendToCSV', (filename, data) => {
    // Define the file path
    const filePath = path.join(Cypress.config('fileServerFolder'), 'results', filename);

    // Convert data to CSV format
    const rows = data.map(row => `${row.test_case},${row.status},${row.details}`).join('\n');

    // Append CSV content to the file
    fs.appendFileSync(filePath, rows + '\n', 'utf8');
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})