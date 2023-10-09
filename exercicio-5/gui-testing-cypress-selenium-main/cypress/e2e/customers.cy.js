describe('customers', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();
  });
  // Remove .only and implement others test cases!
  it.only('update a customer phone number', () => {
    // Click in customers in side menu
    cy.clickInFirst('a[href="/admin/customers/"]');
    // Type in value input to search for specify customer
    cy.get('[id="criteria_search_value"]').type('@gmail');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in edit of the last customer
    cy.get('*[class^="ui labeled icon button "]').last().click();
    // Edit customer phone number
    cy.get('[id="sylius_customer_phoneNumber"]').scrollIntoView().clear().type('999.999.9999');
    // Click on Save changes button
    cy.get('[id="sylius_save_changes_button"]').scrollIntoView().click();

    // Assert that customer has been updated
    cy.get('body').should('contain', 'Customer has been successfully updated.');
  });
  it('test case 2', () => {
    // Implement your test case 2 code here
  });
  it('test case 3', () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
