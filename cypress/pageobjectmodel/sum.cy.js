class Sum{

    calculation(){
        let sum=0;
        cy.get('.cart_item .inventory_item_price').each(($priceforeachitem)=>{
            //$7.99 , $9.99, $15.99
               const modifyPrices=$priceforeachitem.text();
               // const modifyPrices=$7.99 1st iteration
               // const modifyPrices=$9.99 2st iteration    
               // const modifyPrices=$15.99 3rd iteration
               const splitPrices=modifyPrices.split("$")
               // const splitPrices= ['','7.99'] 1st iteration
               // const splitPrices= ['','9.99'] 2nd iteration
               // const splitPrices= ['','15.99'] 3rd iteration
               const makeItUnique=splitPrices[1].trim()
               // const makeItUnique='7.99'.trim() remove any leading or trailing white spaces
               // const makeItUnique='9.99'.trim() remove any leading or trailing white spaces 2nd iteration
               // const makeItUnique='15.99'.trim() remove any leading or trailing white spaces 3rd iteration
               sum=Number(sum)+Number(makeItUnique)
               //sum=0+7.99 / sum=7.99
               //sum=7.99+9.99 / sum = 17.98
               //sum=17.98+15.99 // 33.97
        }).then(()=>{
            cy.log(sum)
        })
        cy.get('.summary_subtotal_label').then((sub)=>{
            const modifysub=sub.text();
            const splitSub=modifysub.split("$");
            const makeItUnique=splitSub[1].trim()
            const subtotal=Number(makeItUnique)
            expect(subtotal).to.eq(sum)
        })
    }
}

export default Sum