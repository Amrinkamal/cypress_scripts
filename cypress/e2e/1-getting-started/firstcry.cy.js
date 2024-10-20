describe('Firstcry Validation',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it ('HomePage',()=>{
        cy.visit('https://www.firstcry.com/')

    })
})