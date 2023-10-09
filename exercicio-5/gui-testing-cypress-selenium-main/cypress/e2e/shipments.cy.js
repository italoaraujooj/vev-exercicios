describe('shipments', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();
  });
  // Remove .only and implement others test cases!
  it.only('ship a ready shipment', () => {
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
    cy.get('.ui > .sylius-filters > .sylius-filters__field > .field > #criteria_method').should('UPS');
    cy.get('*[class^="ui sortable stackable very basic celled table"]').should('contain', '19-09-2023 18:22:35');
    cy.get('*[class^="ui sortable stackable very basic celled table"]').should('contain', '07-12-2022 14:21:32');
    cy.get('*[class^="ui sortable stackable very basic celled table"]').should('contain', '28-11-2022 07:40:08');

  });
  it('shipping method is DHL Express', () => {
    // Click in shipments in side menu
    cy.clickInFirst('a[href="/admin/shipments/"]');
    // Type in value input to search for specify shipment method
    cy.get('.ui > .sylius-filters > .sylius-filters__field > .field > #criteria_method').select('dhl express');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Assert that the objects shipped by the DHL method are there:
    cy.get('.ui > .sylius-filters > .sylius-filters__field > .field > #criteria_method').should('DHL Express');
    cy.get('*[class^="ui sortable stackable very basic celled table"]').should('contain', '19-09-2023 01:31:33');
    cy.get('*[class^="ui sortable stackable very basic celled table"]').should('contain', '20-07-2023 17:33:47');
    cy.get('*[class^="ui sortable stackable very basic celled table"]').should('contain', '20-07-2023 06:27:33');
    cy.get('*[class^="ui sortable stackable very basic celled table"]').should('contain', '26-04-2023 07:37:47');
    cy.get('*[class^="ui sortable stackable very basic celled table"]').should('contain', '31-03-2023 15:52:00');
    cy.get('*[class^="ui sortable stackable very basic celled table"]').should('contain', '11-03-2023 00:10:02');
    cy.get('*[class^="ui sortable stackable very basic celled table"]').should('contain', '22-11-2022 20:56:00');
    cy.get('*[class^="ui sortable stackable very basic celled table"]').should('contain', '02-11-2022 03:17:13');
  });

  it('shipping method is FedEx', () => {
    // Click in shipments in side menu
    cy.clickInFirst('a[href="/admin/shipments/"]');
    // Type in value input to search for specify shipment method
    cy.get('.ui > .sylius-filters > .sylius-filters__field > .field > #criteria_method').select('fedex');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Assert that the objects shipped by the FedEx method are there:
    cy.get('.ui > .sylius-filters > .sylius-filters__field > .field > #criteria_method').should('FedEx');
    cy.get('*[class^="ui sortable stackable very basic celled table"]').should('contain', '15-05-2023 06:27:47');
    cy.get('*[class^="ui sortable stackable very basic celled table"]').should('contain', '07-05-2023 05:36:38');
    cy.get('*[class^="ui sortable stackable very basic celled table"]').should('contain', '08-04-2023 05:41:40');
    cy.get('*[class^="ui sortable stackable very basic celled table"]').should('contain', '30-03-2023 15:53:22');
    cy.get('*[class^="ui sortable stackable very basic celled table"]').should('contain', '03-03-2023 17:08:38');
    cy.get('*[class^="ui sortable stackable very basic celled table"]').should('contain', '17-01-2023 10:54:17');
    cy.get('*[class^="ui sortable stackable very basic celled table"]').should('contain', '02-01-2023 19:26:59');
  });

  it('clear filters', () => {
    cy.clickInFirst('a[href="/admin/shipments/"]');
    cy.get('*[class^="ui labeled icon button"]').click();
    cy.get('.ui > .sylius-filters > .sylius-filters__field > .field > #criteria_state').should('All');
    cy.get('.ui > .sylius-filters > .sylius-filters__field > .field > #criteria_channel').should('All');
    cy.get('.ui > .sylius-filters > .sylius-filters__field > .field > #criteria_method').should('All');
  });

  // Implement the remaining test cases in a similar manner
});
