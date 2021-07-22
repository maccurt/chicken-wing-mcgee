describe('baseline.spec.js', () => {

    before(() => {
        cy.visit('');
    });


    describe('Name of the group', () => {
        it('title should be correct', () => {
            cy.title().should('equal', 'Hot Wing McGee');
        });

        it('the url should contain /home', () => {
            cy.url().should('contain', '/home');
        });

    });

});