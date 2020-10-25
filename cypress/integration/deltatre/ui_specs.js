Cypress.on('fail', (err, runnable) => {
    debugger
  })
describe('Stories', () => {

   let user = Cypress.env('email');
   let password = Cypress.env('password');
   let creditDetails = Cypress.env('cardnumber');


context('Full HD Resolution', () => {
        
    it('successfully loads home page', () => {
            cy.visit('/'); 
            cy.title().should('eq', 'InsuranceWeb: Home');
        });

    it('Logging In ', () =>{
        
        cy.xpath('//*[@id="login-form:email"]').type(user);
        cy.xpath('//*[@id="login-form:password"]').type(password)
        cy.xpath('//*[@id="login-form:login"]').click();
        cy.xpath('//*[@id="logout-form"]/div[2]/label').contains('John Smith');
    });

    it('Purchase Insurance', ()=>{
        //Reason i have had to do is the issue with the popper js exception when selecting the elements from the list.
        // Could have excluded the popper js but don't know what implication that can have to other tests.
        //Something that being worked on https://github.com/cypress-io/cypress/pull/7247

        cy.visit('http://demo.borland.com/InsuranceWebExtJS/quote_auto.jsf');
        cy.xpath('//*[@id="autoquote:zipcode"]').type('2223');
        cy.xpath('//*[@id="autoquote:e-mail"]').type(user);
        cy.xpath('//*[@id="autoquote:vehicle"]/tbody/tr/td[1]/label').click();
        cy.xpath('//*[@id="autoquote:next"]').click();
        cy.xpath('//*[@id="autoquote:age"]').type('17');
        cy.xpath('//*[@id="autoquote:gender:0"]').click();
        cy.xpath('//*[@id="autoquote:type:0"]').click();
        cy.xpath('//*[@id="autoquote:next"]').click();
        cy.xpath('//*[@id="autoquote:year"]').type('2020');
        cy.xpath('//*[@id="ext-gen4"]').click();
        cy.wait(2000);
        cy.xpath('//*[@id="makeCombo"]').type('{Enter}');
        cy.xpath('//*[@id="ext-gen6"]').click();
        cy.wait(2000);
        cy.xpath('//*[@id="modelCombo"]').type('{Enter}');
        cy.xpath('//*[@id="autoquote:finInfo:0"]').click();
        cy.xpath('//*[@id="autoquote:next"]').click();
        cy.xpath('//*[@id="quote-result"]/h1[1]').contains('Automobile Instant Quote');
        cy.xpath('//*[@id="quote-result:purchase-quote"]').click();
        cy.xpath('//*[@id="purchaseQuote:cardnumber"]').type(creditDetails);
        cy.xpath('//*[@id="purchaseQuote:expiration"]').type('07/22');
        cy.xpath('//*[@id="purchaseQuote:purchase"]').click();
        cy.xpath('//*[@id="content-main"]/h1').contains('Congratulations');
        cy.xpath('//*[@id="content-main"]/p[1]').contains('You have purchased a new auto policy');
        cy.xpath('//*[@id="purchase-form:customer-details"]').click();
        cy.get('.x-grid3-row-first').contains('td', 'car');
    })

})
})
