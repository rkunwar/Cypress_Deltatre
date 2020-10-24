Cypress.on('fail', (err, runnable) => {
    debugger
  })
describe('Stories', () => {
    context('Full HD Resolution', () => {
        beforeEach(() => {
          cy.viewport(1920, 1080)
        })
    it('successfully loads home page', () => {
      cy.visit('/'); 
          
    
    });


//TODO: Add different viewport tests and make it better.
    
    it('Navigate to Banking ', () =>{
       
        cy.get('.assets.logged-off').within(()=>{
        cy.get('[data-tracker-id="Banking"]').should('contain', 'Banking').click();
    })
        cy.title().should('eq', 'Banking - CommBank');
    
    });
  
    it('Navigate to Home Loans ', () =>{
       
        cy.get('.assets.logged-off').within(()=>{
            cy.get('[data-tracker-id="Hom"]').should('contain', 'Home').click();
        }) 
        cy.title().should('eq', 'Home loans - calculators, guides and more – CommBank');
        
    });

    it('Navigate to Insurance', () =>{
            
        cy.get('.assets.logged-off').within(()=>{
            cy.get('[data-tracker-id="Insurance"]').should('contain', 'Insurance').click();
        })
        cy.title().should('eq', 'Insurance - CommBank');
        
    });

    it('Navigate to Investment and Super', () =>{
       
        cy.get('.assets.logged-off').within(()=>{
            cy.get('[data-tracker-id="Investin"]').should('contain', 'Investing & super').click();
        })
        cy.title().should('eq', 'Investing & Super - CommBank');
        
    });

    it('Navigate to Business', () =>{
       
      
        cy.get('.assets.logged-off').within(()=>{
            cy.get('[data-tracker-id="Business"]').should('contain', 'Business').click();
        })
        cy.title().should('eq', 'Business - CommBank');
        
    });
    it('Navigate to Institutional', () =>{
       
      
        cy.get('.assets.logged-off').within(()=>{
            cy.get('[data-tracker-id="Institutional"]').should('contain', 'Institutional').click();
        })
        cy.title().should('eq', 'Institutional - CommBank');
        
    });


});


context('Mobile Resolution', () => {
    beforeEach(() => {
      cy.viewport('iphone-x')
    })
    it('successfully loads home page', () => {
        cy.visit('/'); 
        cy.get('.hamburger').should('be.visible')    

});

it('Navigate to Banking ', () =>{
  
    cy.get('.menu-toggle-icon > .icon-menu').click({force:true});
    cy.get('.mobile-navigation.reveal.transition').within(()=> {
    cy.get('[data-tracker-id="Banking"]').should('contain', 'Banking').click();
    })
    cy.title().should('eq', 'Banking - CommBank');
    })


it('Navigate to Home Loans ', () =>{
   
    cy.get('.menu-toggle-icon > .icon-menu').click({force:true});
    cy.get('.mobile-navigation.reveal.transition').within(()=> {
        cy.get('[data-tracker-id="Hom"]').should('contain', 'Home').click();
    }) 
    cy.title().should('eq', 'Home loans - calculators, guides and more – CommBank');
    })


it('Navigate to Insurance', () =>{
        
    cy.get('.menu-toggle-icon > .icon-menu').click({force:true});
    cy.get('.mobile-navigation.reveal.transition').within(()=> {
        cy.get('[data-tracker-id="Insurance"]').should('contain', 'Insurance').click();
    })
    cy.title().should('eq', 'Insurance - CommBank');
})


it('Navigate to Investment and Super', () =>{
   
    cy.get('.menu-toggle-icon > .icon-menu').click({force:true});
    cy.get('.mobile-navigation.reveal.transition').within(()=> {
        cy.get('[data-tracker-id="Investin"]').should('contain', 'Investing & super').click();
    })
    cy.title().should('eq', 'Investing & Super - CommBank');
    })


it('Navigate to Business', () =>{
   
  
    cy.get('.menu-toggle-icon > .icon-menu').click({force:true});
    cy.get('.mobile-navigation.reveal.transition').within(()=> {
        cy.get('[data-tracker-id="Business"]').should('contain', 'Business').click();
    })
    cy.title().should('eq', 'Business - CommBank');
    
});
it('Navigate to Institutional', () =>{
   
  
    cy.get('.menu-toggle-icon > .icon-menu').click({force:true});
    cy.get('.mobile-navigation.reveal.transition').within(()=> {
        cy.get('[data-tracker-id="Institutional"]').should('contain', 'Institutional').click();
    })
    cy.title().should('eq', 'Institutional - CommBank');
    
    });
    });

    context('Ipad Resolution', () => {
        beforeEach(() => {
          cy.viewport('ipad-2')
        })
        it('successfully loads home page', () => {
            cy.visit('/'); 
            cy.get('.hamburger').should('be.visible')    
    
    });
    
    it('Navigate to Banking ', () =>{
      
        cy.get('.menu-toggle-icon > .icon-menu').click({force:true});
        cy.get('.mobile-navigation.reveal.transition').within(()=> {
        cy.get('[data-tracker-id="Banking"]').should('contain', 'Banking').click();
        })
        cy.title().should('eq', 'Banking - CommBank');
        })
    
    
    it('Navigate to Home Loans ', () =>{
       
        cy.get('.menu-toggle-icon > .icon-menu').click({force:true});
        cy.get('.mobile-navigation.reveal.transition').within(()=> {
            cy.get('[data-tracker-id="Hom"]').should('contain', 'Home').click();
        }) 
        cy.title().should('eq', 'Home loans - calculators, guides and more – CommBank');
        })
    
    
    it('Navigate to Insurance', () =>{
            
        cy.get('.menu-toggle-icon > .icon-menu').click({force:true});
        cy.get('.mobile-navigation.reveal.transition').within(()=> {
            cy.get('[data-tracker-id="Insurance"]').should('contain', 'Insurance').click();
        })
        cy.title().should('eq', 'Insurance - CommBank');
    })
    
    
    it('Navigate to Investment and Super', () =>{
       
        cy.get('.menu-toggle-icon > .icon-menu').click({force:true});
        cy.get('.mobile-navigation.reveal.transition').within(()=> {
            cy.get('[data-tracker-id="Investin"]').should('contain', 'Investing & super').click();
        })
        cy.title().should('eq', 'Investing & Super - CommBank');
        })
    
    
    it('Navigate to Business', () =>{
       
      
        cy.get('.menu-toggle-icon > .icon-menu').click({force:true});
        cy.get('.mobile-navigation.reveal.transition').within(()=> {
            cy.get('[data-tracker-id="Business"]').should('contain', 'Business').click();
        })
        cy.title().should('eq', 'Business - CommBank');
        
    });
    it('Navigate to Institutional', () =>{
       
      
        cy.get('.menu-toggle-icon > .icon-menu').click({force:true});
        cy.get('.mobile-navigation.reveal.transition').within(()=> {
            cy.get('[data-tracker-id="Institutional"]').should('contain', 'Institutional').click();
        })
        cy.title().should('eq', 'Institutional - CommBank');
        
    });
    });




});





 

  