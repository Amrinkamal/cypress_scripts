const { createObjectCsvWriter } = require('csv-writer');
const fs = require('fs');

describe ('Userregistration',()=>{
    const first = cy.get('.um-field-label')
    const last = cy.get('[for="last_name-22"]')


    
    beforeEach(()=>{
        cy.visit('https://v7datalabs.in/live/')
        

    })

    it ('Registrationform',()=>{
        
        cy.get('#first_name-22').type('Amrin')
        cy.get('#last_name-22').type('Fathima')
        cy.get('input[value="Female"]').click({force: true})
        cy.get('#birth_date-22').click()
        cy.get('[aria-label="31 December 2002"]').click()
        cy.get('.picker__button--close').click()
        cy.get('#user_login-22').type('Amrinfk')
        cy.get('#user_password-22').type('Amrin@123')
        cy.get('#confirm_user_password-22').type('Amrin@123')
        cy.get('#user_email-22').type('amrin.k@gmail.com')
        cy.get('#mobile_number-22').type('9710383836')
        cy.get('[class="um-field-checkbox-option"]').click()
        cy.get('#um-submit-btn').click()
        cy.url().should('eq', 'https://v7datalabs.in/live/user/amrinfk/')


    })
  
    it.only('Firstname',()=>{
        cy.get('#first_name-22').type('Amrin').should('have.value','Amrin')

        //cy.url('https://v7datalabs.in/live/')


        cy.get('#first_name-22').invoke('text').then((Amrin) => {
            const expectedheader='Amrin'
            //const trimmedText = text.trim();
            const data = [
              { Test: 'First Name', Result: 'Amrin' === expectedheader ? 'Pass' : 'Fail' }
            ];

            //cy.log('Retrieved text:', trimmedText);
            cy.log('Expected text:', expectedheader);
      
            // Write to CSV file
            cy.task('writeCsv', {flag:'a+',
              filePath: 'results.csv',
              data
            }).then(() => {
              cy.log('CSV file has been written.');
            });
        });
    })
    
    it('lastname',()=>{
        cy.get('#last_name-22').type('Fathima').should('have.value','Fathima')
        //cy.url().should('include', 'https://v7datalabs.in/live/');
        cy.get('#last_name-22').invoke('text').then((text) => {
            const expectedheader=text
            //const trimmedText = text.trim();
            const data = [
              { Test: 'Last Name', Result: 'Fathima' === expectedheader ? 'Pass' : 'Fail' }
            ];

            //cy.log('Retrieved text:', trimmedText);
            cy.log('Expected text:', expectedheader);
      
            // Write to CSV file
            cy.task('writeCsv', {flag:'a+',
              filePath: 'results.csv',
              data
            }).then(() => {
              cy.log('CSV file has been written.');
            });
        });
    })

    
    it('gender',()=>{    
        let a;
        a=cy.get('input[value="Female"]').click({force: true}).should('have.value','Female')
        
    })

    it('dob',()=>{
        cy.get('#birth_date-22').click()    
        cy.get('[aria-label="31 December 2002"]').click()
        cy.get('.picker__button--close').click()
    })

    it('username',()=>{
        cy.get('#user_login-22').type('Amrins')
    })

    it('password',()=>{
        cy.get('#user_password-22').type('Amrin@123')
        cy.get('#confirm_user_password-22').type('Amrin@123')
    })
    it('email',()=>{
        cy.get('#user_email-22').type('amrin.dba@gmail.com')
    })
    it('mobilenumber',()=>{
        cy.get('#mobile_number-22').type('9710383836')
    })
    it('Terms and condition',()=>{
        cy.get('[class="um-field-checkbox-option"]').click()
        cy.get('#um-submit-btn').click()

    })
})


// before(()=>{
  
//     cy.visit('https://www.saucedemo.com/')
//   })

// describe ('Userregistration',()=>{
    
    
  
//     it.only('username',()=>{
//       cy.get('#user-name').type('standard_user')
  
//     })
//     it.only('username',()=>{
//       cy.get('#password').type('secret_sauce')
//     })
//     it.only('password',()=>{
//       cy.get('#login-button').click()
//     })
//   })