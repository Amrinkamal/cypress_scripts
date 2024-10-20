/// <reference types = "cypress"/>
import * as XLSX from 'xlsx';

describe('Reading and Using the datas from Excell ',()=>{

it('Get loging datas from excel', ()=>{

    cy.visit('https://www.saucedemo.com/v1/')
    cy.fixture('Book.xlsx', 'binary').then((binarydata)=>{

        const wb = XLSX.read(binarydata,{type: 'binary'})

        const particular = wb.SheetNames[0]

        const requiredsheet = wb.Sheets[particular]

        const data = XLSX.utils.sheet_to_json(requiredsheet, {header:1})

        cy.wrap(data).then((ed)=>{

            ed.slice(1).forEach(row=>{

                const [username,password] = row

              
      
        cy.get("input#user-name").type(username)
        cy.get("input#password").type(password)
             cy.get("input#login-button").click()
            })
        })

    })




})


})