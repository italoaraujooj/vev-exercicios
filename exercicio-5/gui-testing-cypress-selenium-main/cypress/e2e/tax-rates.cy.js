describe('tax rates', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();
  });
  // Remove .only and implement others test cases!
  it.only('validate filter applied through cancel button', () => {
    // Click in tax rates in side menu
    cy.clickInFirst('a[href="/admin/tax-rates/"]');
    // Type in value input to search for specify tax rate
    cy.get('[id="criteria_search_value"]').type('7');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in edit of the last tax rate
    cy.get('*[class^="ui labeled icon button "]').last().click();
    // Click on cancel button
    cy.get('.admin-layout__content > .ui > .ui > .ui > .ui:nth-child(2)').click();

    // Assert that we are back to the listing page with the filter applied
    cy.get('body').should('contain', 'Clothing Sales Tax 7%').and('not.contain', 'Sales Tax 20%');
  });
  it('test case 2', () => {
    // Implement your test case 2 code here
  });
  it('test case 3', () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
