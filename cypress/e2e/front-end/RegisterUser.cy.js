describe('Feature - Register User', () => {
    it('TC - 003 FE |User  Register | Validar que un usuario pueda ser registrado correctamente - UI', () => {
        cy.visit("https://buggy.justtestit.org/");
        cy.get('.btn-success-outline').click();
        cy.get('#username').type("Alejandro.rosas87@gmail.com");
        cy.get('#firstName').type('Manuel');
        cy.get('#lastName').type('Rosas Collantes');
        cy.get('#password').type('Admin#231');
        cy.get('#confirmPassword').type('Admin#231');
        cy.get('.btn-default').click();
        cy.get('.result').should('contain','Registration is successful');
        cy.screenshot();
    });
});