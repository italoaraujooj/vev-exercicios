describe('shipping methods', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();
  });
  // Remove .only and implement others test cases!
  it.only('change amount of fashion web store to fedex', () => {
    // Click in shipping methods in side menu
    cy.clickInFirst('a[href="/admin/shipping-methods/"]');
    // Type in value input to search for specify shipping method
    cy.get('[id="criteria_search_value"]').type('fedex');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in edit of the last shipping method
    cy.get('*[class^="ui labeled icon button "]').last().click();
    // Type 9 in amount field of fashion web store
    cy.get('[id="sylius_shipping_method_configuration_FASHION_WEB_amount"]').clear().type('9');
    // Click on Save changes button
    cy.get('[id="sylius_save_changes_button"]').scrollIntoView().click();

    // Assert that shipping method has been updated
    cy.get('body').should('contain', 'Shipping method has been successfully updated.');
  });
  it('test case 2', () => {
    // Implement your test case 2 code here
  });
  it('test case 3', () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
