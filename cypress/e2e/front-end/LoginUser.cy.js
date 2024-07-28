describe('Feature - Login', () => {
    it('TC - 004 FE | Login | Validar que un usuario registrado se pueda logear correctamente - UI', () => {
        cy.visit("https://buggy.justtestit.org/");
        cy.get('.input-sm').type('Alejandro.rosas87@gmail.com');
        cy.get('[name="password"]').type('Admin#231');
        cy.get('.btn-success').click();
        cy.get(':nth-child(3) > .nav-link').should('contain','Logout');
        cy.get(':nth-child(2) > .nav-link').click();
        cy.scrollTo(0,500);
        cy.get('#gender').clear();
        cy.get('#gender').type('Male');
        cy.get('#age').clear();
        cy.get('#age').type('37');
        cy.get('#address').clear();
        cy.get('#address').type('Privada Cerro Azul 335,Tijuana, Mexico');
        cy.get('#phone').clear();
        cy.get('#phone').type('6641238039');
        cy.get('#hobby').select('Hiking');
        cy.get('.btn-default').click();
        cy.get(':nth-child(1) > .result').should('contain','The profile has been Loged successful');
        cy.screenshot();
    });
});