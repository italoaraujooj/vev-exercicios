describe('payments', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();
  });
  // Remove .only and implement others test cases!
  it.only('complete a new payment', () => {
    // Click in payments in side menu
    cy.clickInFirst('a[href="/admin/payments/"]');
    // Type in value input to search for specify payment
    cy.get('.ui > .sylius-filters > .sylius-filters__field > .field > #criteria_state').select('new');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in complete of the first payment listed
    cy.clickInFirst('*[class^="ui loadable teal labeled icon button"]');

    // Assert that payment has been completed
    cy.get('body').should('contain', 'Payment has been completed.');
  });
  it('test case 2', () => {
    // Implement your test case 2 code here
  });
  it('test case 3', () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
