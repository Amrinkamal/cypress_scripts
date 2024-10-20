class Login{
    constructor(){
        this.username='#user-name';
        this.password='#password';
        this.submit='#login-button';
        
    }

    
    typingUserName(usern){
        cy.get(this.username).type(usern)
    }
    typingPassword(userp){
        cy.get(this.password).type(userp)
    }
    clickingOnSubmit(){
        cy.get(this.submit).click()
    }                                                                             
}
export default Login;