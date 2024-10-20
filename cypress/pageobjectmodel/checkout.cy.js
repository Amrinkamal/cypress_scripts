class Checkout{
    Constructor(){
        this.check="cart_item"

    }

    Chekoutt(){
        cy.get(this.check).should('have.length',0)
        cy.contains('CHECKOUT').click()
    }
}
// cy.get('.cart_item').should('have.length',2)
//         cy.contains('CHECKOUT').click()
//         cy.get('[data-test="firstName"]').as('formusername').type('Vineka')
//         cy.get('@formusername').should('have.value','Vineka')
//         cy.get('[data-test="lastName"]').type('testing')
//         cy.get('[data-test="postalCode"]').type('47698')
//         cy.get('.btn_primary').click()
export default Checkout