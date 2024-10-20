import Login from "../../pageobjectmodel/login.cy.js";
import Product from "../../pageobjectmodel/product.cy.js";
import Checkout from "../../pageobjectmodel/checkout.cy.js";
import Customer from "../../pageobjectmodel/customer.cy.js";
import Sum from "../../pageobjectmodel/sum.cy.js";


describe('Sauce Lab task',()=>{
    
    let loginpage=new Login();
    let productpage=new Product();
    let check=new Checkout();
    let custo=new Customer();
    let calc=new Sum();
    let testdata;
    before(()=>{
        cy.fixture('example').then((tdata)=>{
            testdata=tdata;
        })
        cy.viewport('iphone-xr')
    })
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/v1/')
    })
    it('Perform expected tasks',()=>{    
        loginpage.typingUserName(testdata.username);
        loginpage.typingPassword(testdata.password);
        loginpage.clickingOnSubmit(); 
        productpage.sortingPrice();
        productpage.addProducts('Bike');
        productpage.addProducts('Fleece');
        productpage.clickOnCartIcon()             
        check.Chekoutt();
        // cy.get('.cart_item').should('have.length',2)
        // cy.contains('CHECKOUT').click()
        custo.cust(testdata.custfirst)
        custo.custl(testdata.custlast)
        custo.custp(testdata.pin)
        calc.calculation()


        // cy.get('[data-test="firstName"]').as('formusername').type('Vineka')
        // cy.get('@formusername').should('have.value','Vineka')
        // cy.get('[data-test="lastName"]').type('testing')
        // cy.get('[data-test="postalCode"]').type('47698')
        // cy.get('.btn_primary').click()

        // let sum=0;
        // cy.get('.cart_item .inventory_item_price').each(($priceforeachitem)=>{
        //     //$7.99 , $9.99, $15.99
        //        const modifyPrices=$priceforeachitem.text();
        //        // const modifyPrices=$7.99 1st iteration
        //        // const modifyPrices=$9.99 2st iteration    
        //        // const modifyPrices=$15.99 3rd iteration
        //        const splitPrices=modifyPrices.split("$")
        //        // const splitPrices= ['','7.99'] 1st iteration
        //        // const splitPrices= ['','9.99'] 2nd iteration
        //        // const splitPrices= ['','15.99'] 3rd iteration
        //        const makeItUnique=splitPrices[1].trim()
        //        // const makeItUnique='7.99'.trim() remove any leading or trailing white spaces
        //        // const makeItUnique='9.99'.trim() remove any leading or trailing white spaces 2nd iteration
        //        // const makeItUnique='15.99'.trim() remove any leading or trailing white spaces 3rd iteration
        //        sum=Number(sum)+Number(makeItUnique)
        //        //sum=0+7.99 / sum=7.99
        //        //sum=7.99+9.99 / sum = 17.98
        //        //sum=17.98+15.99 // 33.97
        // }).then(()=>{
        //     cy.log(sum)
        // })
        // cy.get('.summary_subtotal_label').then((sub)=>{
        //     const modifysub=sub.text();
        //     const splitSub=modifysub.split("$");
        //     const makeItUnique=splitSub[1].trim()
        //     const subtotal=Number(makeItUnique)
        //     expect(subtotal).to.eq(sum)
        // })
    })
})