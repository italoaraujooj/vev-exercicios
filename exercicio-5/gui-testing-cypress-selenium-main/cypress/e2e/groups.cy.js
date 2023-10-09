describe('groups', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();
  });
  // Remove .only and implement others test cases!
  it.only('update the name of Wholesale group', () => {
    // Click in groups in side menu
    cy.clickInFirst('a[href="/admin/customer-groups/"]');
    // Type in value input to search for specify group
    cy.get('[id="criteria_search_value"]').type('wholesale');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in edit of the last group
    cy.get('*[class^="ui labeled icon button "]').last().click();
    // Edit group name
    cy.get('[id="sylius_customer_group_name"]').scrollIntoView().clear().type('Wholesale 100');
    // Click on Save changes button
    cy.get('[id="sylius_save_changes_button"]').scrollIntoView().click();

    // Assert that group has been updated
    cy.get('body').should('contain', 'Customer group has been successfully updated.');
  });
  it('test case 2', () => {
    // Implement your test case 2 code here
  });
  it('test case 3', () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
