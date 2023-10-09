describe('currencies', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();
  });
  // Remove .only and implement others test cases!
  it.only('validate that cannot create the same currency twice', () => {
    // Click in currencies in side menu
    cy.clickInFirst('a[href="/admin/currencies/"]');
    // Click on create button
    cy.get('*[class^="ui labeled icon button  primary "]').click();
    // Select Euro currency
    cy.get('#sylius_currency_code').select('EUR');

    // Click on create button
    cy.get('*[class^="ui labeled icon primary button"]').scrollIntoView().click();
    // Assert that cannot create the same currency twice
    cy.get('body').should('contain', 'This form contains errors.').and('contain', 'Currency code must be unique.');
  });
  it('test case 2', () => {
    // Implement your test case 2 code here
  });
  it('test case 3', () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
