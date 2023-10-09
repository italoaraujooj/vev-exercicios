describe('zones', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();
  });
  // Remove .only and implement others test cases!
  it.only('change scope of rest of the world zone', () => {
    // Click in zones in side menu
    cy.clickInFirst('a[href="/admin/zones/"]');
    // Type in value input to search for specify zone
    cy.get('[id="criteria_name_value"]').type('World');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in edit of the remain zone
    cy.get('*[class^="ui labeled icon button "]').last().click();
    // Edit zone scope to shipping
    cy.get('#sylius_zone_scope').select('shipping');
    // Click on Save changes button
    cy.get('[id="sylius_save_changes_button"]').scrollIntoView().click();

    // Assert that zone scope has been updated
    cy.get('body').should('contain', 'Zone has been successfully updated.');
  });
  it('test case 2', () => {
    // Implement your test case 2 code here
  });
  it('test case 3', () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
