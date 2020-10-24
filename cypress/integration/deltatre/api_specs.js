describe(' API Calls', () => {
    var users;
    var name = 'Krishna Rungt';
    var username= "Bret";
    var url = 'https://jsonplaceholder.typicode.com/users'
    
    it('GET Users', ()=> {
        cy.request({
            method: 'GET',
            url: url, 
        }).then((resp) => {
            
            expect(resp.status).to.eq(200);
            users = resp.body;
            assert.typeOf(users, 'array', 'we have an array');
           expect(users).to.have.lengthOf.above(1);
        })
    })
    it("POST Users", () =>{
        cy.request({
            method: 'POST',
            url: url, 
          
            body: {
                
                    "id":11,
                    "name":name,
                    "username":username,
                    "email":"Sincere@april.biz",
                    "address":{
                        "street":"Kulas Light",
                        "suite":"Apt. 556",
                        "city":"Gwenborough",
                        "zipcode":"92998-3874",
                            "geo":{
                            "lat":"-37.3159",
                            "lng":"81.1496"
                        }
                    },
                    "phone":"1-770-736-8031 x56442",
                    "website":"hildegard.org",
                    "company":{
                        "name":"Romaguera-Crona",
                        "catchPhrase":"Multi-layered client-server neural-net",
                        "bs":"harness real-time e-markets"
                    }
               
            }
           
        }).then((resp) => {
            expect(resp.status).to.eq(201);
            expect(resp.body.name).eq(name);
            expect(resp.body.username).eq(username);   
        });
    });

})
      
