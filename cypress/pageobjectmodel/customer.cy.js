class Customer{

    
    constructor(){
        this.custfirst='#first-name';
        this.custlast='[data-test="lastName"]';
        this.pin='[data-test="postalCode"]';
        
    }
    cust(firstn){
        cy.get(this.custfirst).type(firstn)
    }
    custl(lastn){
        cy.get(this.custlast).type(lastn)
    }
    custp(pin1){
        cy.get(this.pin).type(pin1)
        cy.get('.btn_primary').click()
}
        
    }

export default Customer;