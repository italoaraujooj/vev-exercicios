describe('tax categories', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();
  });
  // Remove .only and implement others test cases!
  it.only('create a new tax category', () => {
    // Click in tax categories in side menu
    cy.clickInFirst('a[href="/admin/tax-categories/"]');
    // Click on create button
    cy.get('*[class^="ui labeled icon button  primary "]').click();
    // Type category code
    cy.get('[id="sylius_tax_category_code"]').type('44');
    // Type category name
    cy.get('[id="sylius_tax_category_name"]').type('44');
    // Type category description
    cy.get('[id="sylius_tax_category_description"]').type('4444');

    // Click on create button
    cy.get('*[class^="ui labeled icon primary button"]').scrollIntoView().click();
    // Assert that tax category has been created.
    cy.get('body').should('contain', 'Tax category has been successfully created.');
  });
  it('test case 2', () => {
    // Implement your test case 2 code here
  });
  it('test case 3', () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
