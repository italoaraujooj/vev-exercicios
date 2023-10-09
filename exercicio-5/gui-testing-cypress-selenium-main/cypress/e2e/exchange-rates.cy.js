describe('exchange rates', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();
  });
  // Remove .only and implement others test cases!
  it.only('create a new exchange rate between USD and EUR', () => {
    // Click in exchange rates in side menu
    cy.clickInFirst('a[href="/admin/exchange-rates/"]');
    // Click on create button
    cy.get('*[class^="ui labeled icon button  primary "]').click();
    // Select US Dollar Source currency
    cy.get('#sylius_exchange_rate_sourceCurrency').select('USD');
    // Type ratio to 5
    cy.get('#sylius_exchange_rate_ratio').type('5');
    // Click on create button
    cy.get('*[class^="ui labeled icon primary button"]').scrollIntoView().click();

    // Assert that exchange rate has been created
    cy.get('body').should('contain', 'Exchange rate has been successfully created.');
  });
  it('test case 2', () => {
    // Implement your test case 2 code here
  });
  it('test case 3', () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
