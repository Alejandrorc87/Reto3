describe('Feature - Votar', () => {
    it('TC - 005 | FE |  Validar que se pueda votar por el auto "Pagani"', () => {
        cy.visit("https://buggy.justtestit.org/");
        cy.get('.input-sm').type('Alejandro.rosas87@gmail.com');
        cy.get('[name="password"]').type('Admin#231');
        cy.get('.btn-success').click();
        cy.scrollTo(0,100);
        cy.get(':nth-child(3) > .card > a > .img-fluid').click();
        cy.scrollTo(0,100);
        cy.get(':nth-child(3) > :nth-child(2) > a').click();
        cy.scrollTo(0,100);
        cy.get('tbody > :nth-child(1) > :nth-child(2) > a').click();
        cy.get('#comment').type('Testing with Cypresssss');
        cy.get('.btn').click();
        cy.get('.card-text').should('contain','Thank you for your vote!');
        cy.screenshot();
    });
});