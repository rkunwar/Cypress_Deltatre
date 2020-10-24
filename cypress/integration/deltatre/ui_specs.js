Cypress.on('fail', (err, runnable) => {
    debugger
  })




describe('Stories', () => {

    var env = Cypress.env();

    var username = env.username
    


context('Full HD Resolution', () => {
        
    it('successfully loads home page', () => {
            cy.visit('/'); 
            cy.title().should('eq', 'InsuranceWeb: Home');
        });

    it('Logging In ', () =>{
        cy.xpath('//*[@id="login-form:email"]').type("john.smith@gmail.com");
        cy.xpath('//*[@id="login-form:password"]').type("john")
        cy.xpath('//*[@id="login-form:login"]').click();
    
    });



})
})
