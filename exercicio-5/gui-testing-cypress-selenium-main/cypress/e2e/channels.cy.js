describe('channels', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();
  });
  // Remove .only and implement others test cases!
  it.only('update the city of Fashion Web Store channel', () => {
    // Click in channels in side menu
    cy.clickInFirst('a[href="/admin/channels/"]');
    // Select only enabled channels
    cy.get('[id="criteria_enabled"]').select('Yes');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in edit of the last channel
    cy.get('*[class^="ui labeled icon button "]').last().click();
    // Change the country value
    cy.get('[id="sylius_channel_shopBillingData_city"]').scrollIntoView().clear().type('Town Town');
    // Click on Save changes button
    cy.get('[id="sylius_save_changes_button"]').scrollIntoView().click();

    // Assert that channel has been updated
    cy.get('body').should('contain', 'Channel has been successfully updated.');
  });
  it('test case 2', () => {
    // Implement your test case 2 code here
  });
  it('test case 3', () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
