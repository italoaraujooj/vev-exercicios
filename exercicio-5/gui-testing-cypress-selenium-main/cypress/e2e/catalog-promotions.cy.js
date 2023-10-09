describe('catalog promotions', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();
  });
  // Remove .only and implement others test cases!
  it.only('shows of especify catalog promotion exposes the correct product and discount', () => {
    // Click in catalog promotions in side menu
    cy.clickInFirst('a[href="/admin/catalog-promotions/"]');
    // Select inactive promotions in search tab
    cy.get('[id="criteria_state"]').select('Inactive');
    // Type in value input to search for specify catalog promotion
    cy.get('[id="criteria_search_value"]').type('autumn');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in shows of the remain catalog promotion
    cy.get('*[class^="ui labeled icon button "]').each(($btn, index) => {
      if (index == 1) cy.wrap($btn).click();
    });

    // Assert that shows page has important informations
    cy.get('body').should('contain', 'Knitted_wool_blend_green_cap').and('contain', 'Percentage discount').and('contain', '50%');
  });
  it('test case 2', () => {
    // Implement your test case 2 code here
  });
  it('test case 3', () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
