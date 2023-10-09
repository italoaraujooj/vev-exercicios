describe('locales', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();
  });
  // Remove .only and implement others test cases!
  it.only('validate filters bar with contains value', () => {
    // Click in locales in side menu
    cy.clickInFirst('a[href="/admin/locales/"]');
    // Type in value input to search for specify locale
    cy.get('[id="criteria_code_value"]').type('en');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in edit of the last locale
    cy.get('*[class^="ui labeled icon button "]').last().click();

    // Assert that locale is English (United States)
    cy.get('body').should('contain', 'English (United States)');
  });
  it('test case 2', () => {
    // Implement your test case 2 code here
  });
  it('test case 3', () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
