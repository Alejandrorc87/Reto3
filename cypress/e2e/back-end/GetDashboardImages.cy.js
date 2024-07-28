describe('Feature - Dashboard', () => {
    
it('TC - 002 BE | Dahsboard | Validated to get images from Dashboard', () => {
    cy.request("GET", "https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod/dashboard",        
    ).then((response)=> {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;
        cy.log(JSON.stringify(response.body));
    });
});
});