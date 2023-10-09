describe('orders', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();
  });
  // Remove .only and implement others test cases!
  it.only('details of an order shows correct values', () => {
    // Click in orders in side menu
    cy.clickInFirst('a[href="/admin/orders/"]');
    // Type in value input to search for specify order
    cy.get('[id="criteria_total_greaterThan"]').type('500');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in details of the remain order
    cy.clickInFirst('*[class^="ui labeled icon button "]');

    // Assert that details page shows important informations
    cy.get('body').should('contain', 'Order total').and('contain', 'Payments').and('contain', 'Shipments').and('contain', 'Customer since').and('contain', 'Shipping');
  });
  it('test case 2', () => {
    // Implement your test case 2 code here
  });
  it('test case 3', () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
