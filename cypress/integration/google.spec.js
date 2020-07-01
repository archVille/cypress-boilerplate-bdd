const url = 'https://sand-developerportal-lloydsapi.azurewebsites.net/';

describe('Cypress', () => {
  it('is working', () => {
    const title = 'Google';
    cy.visit(url);
    cy.title().should('include', title);
  });
});
