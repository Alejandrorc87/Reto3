describe('Feature Register-User', () => {
    it('TC - 001 BE | Register | Registrar un usuario Buggy Cars', () => {
        cy.request("POST", "https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod/users", {
            "username": "alejandro.rosas2@hotmail.com", 
            "firstName": "Salem Alejandro",
            "lastName": "Rosas",
            "password": "Admin#123",
            "confirmPassword": "Admin#123"
        }).then((response)=> {
            expect(response.status).to.eq(201);
            expect(response.body).to.not.be.null;
        });
    });

});