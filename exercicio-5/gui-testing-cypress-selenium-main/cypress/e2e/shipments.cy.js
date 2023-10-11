describe('shipments', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();
  });
  // Remove .only and implement others test cases!
  it('ship a ready shipment', () => {
    // Click in shipments in side menu
    cy.clickInFirst('a[href="/admin/shipments/"]');
    // Type in value input to search for specify shipment
    cy.get('.ui > .sylius-filters > .sylius-filters__field > .field > #criteria_state').select('ready');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in Ship of the first shipment listed
    cy.clickInFirst('*[class^="ui labeled icon teal button"]');

    // Assert that shipment has been shipped
    cy.get('body').should('contain', 'Shipment has been successfully shipped.');
  });

  it('shipping method is UPS', () => {
    // Click in shipments in side menu
    cy.clickInFirst('a[href="/admin/shipments/"]');
    // Type in value input to search for specify shipment method
    cy.get('.ui > .sylius-filters > .sylius-filters__field > .field > #criteria_method').select('ups');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Assert that the objects shipped by the UPS method are there:
    cy.get('.ui > .sylius-filters > .sylius-filters__field > .field > #criteria_method').should('have.value', 'UPS');

  });

  it('shipping method is DHL Express', () => {
    // Click in shipments in side menu
    cy.clickInFirst('a[href="/admin/shipments/"]');
    // Type in value input to search for specify shipment method
    cy.get('.ui > .sylius-filters > .sylius-filters__field > .field > #criteria_method').select('dhl express');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Assert that the objects shipped by the DHL method are there:
    cy.get('.ui > .sylius-filters > .sylius-filters__field > .field > #criteria_method').should('have.value', 'DHL Express');
  });

  it('shipping method is FedEx', () => {
    // Click in shipments in side menu
    cy.clickInFirst('a[href="/admin/shipments/"]');
    // Type in value input to search for specify shipment method
    cy.get('.ui > .sylius-filters > .sylius-filters__field > .field > #criteria_method').select('fedex');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Assert that the objects shipped by the FedEx method are there:
    cy.get('.ui > .sylius-filters > .sylius-filters__field > .field > #criteria_method').should('have.value', 'FedEx');
  });

  it('clear filters', () => {
    cy.clickInFirst('a[href="/admin/shipments/"]');
    cy.get('*[class^="ui labeled icon button"]').click();
    cy.get('.ui > .sylius-filters > .sylius-filters__field > .field > #criteria_state').should('have.value', 'All');
    cy.get('.ui > .sylius-filters > .sylius-filters__field > .field > #criteria_channel').should('have.value', 'All');
    cy.get('.ui > .sylius-filters > .sylius-filters__field > .field > #criteria_method').should('have.value', 'All');
  });

  it('on page one', () => {
    cy.clickInFirst('a[href="/admin/shipments/"]');
    cy.get('.ui > .sylius-grid-nav > .sylius-grid-nav__pagination > .pagination menu > .disabled item > #text').should('contain', 'Previous');
    cy.get('.ui > .sylius-grid-nav > .sylius-grid-nav__pagination > .pagination menu > .active item > #text').should('contain', '1');
  });

  it('on last page', () => {
    cy.clickInFirst('a[href="/admin/shipments/"]');
    cy.get('.ui > .sylius-grid-nav > .sylius-grid-nav__pagination > .pagination menu > .disabled item > #text').should('contain', 'Next');
  });



  // Implement the remaining test cases in a similar manner
});
