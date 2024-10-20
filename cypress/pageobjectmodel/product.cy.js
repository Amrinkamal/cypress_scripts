class Product{
    sortingPrice(){
        cy.get('select').select('lohi')
    }
    addProducts(pro){
        cy.addProductToCart(pro)
    }
    clickOnCartIcon(){
        cy.get('[href="./cart.html"]').click()
    }
}
export default Product;