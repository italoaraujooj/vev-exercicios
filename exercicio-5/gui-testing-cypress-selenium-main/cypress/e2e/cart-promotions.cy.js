describe('cart promotions', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();
  });
  // Remove .only and implement others test cases!
  it.only('increase percentage of christmas promotion', () => {
    // Click in cart promotions in side menu
    cy.clickInFirst('a[href="/admin/promotions/"]');
    // Type in value input to search for specify cart promotion
    cy.get('[id="criteria_search_value"]').type('christmas');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in edit of the remain cart promotion
    cy.get('*[class^="ui labeled icon button "]').last().click();
    // Edit cart promotion percentage inside configuration
    cy.get('[id="sylius_promotion_actions_0_configuration_percentage"]').scrollIntoView().clear().type('10');
    // Click on Save changes button
    cy.get('[id="sylius_save_changes_button"]').scrollIntoView().click();

    // Assert that cart promotion name has been updated
    cy.get('body').should('contain', 'Promotion has been successfully updated.');
  });
  it('test case 2', () => {
    // Implement your test case 2 code here
  });
  it('test case 3', () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
