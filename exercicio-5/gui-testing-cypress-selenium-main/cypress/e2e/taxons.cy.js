describe('taxons', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();
  });
  // Remove .only and implement others test cases!
  it.only('edit dresses and see effect', () => {
    // Click in taxons in side menu
    cy.clickInFirst('a[href="/admin/taxons/new"]');
    // Click in dresses's more operations (...)
    cy.get('li:nth-child(3) > .sylius-tree__item > .sylius-tree__action > form > .ui > .ellipsis').click();
    // Click in edit item in dropdown
    cy.get('li:nth-child(3) > .sylius-tree__item > .sylius-tree__action > form > .ui > .menu > .item:nth-child(2)').click();
    // Edit dresses name
    cy.get('[id="sylius_taxon_translations_en_US_name"]').clear().type('Dresses Top');
    // Click on Save changes button
    cy.get('[id="sylius_save_changes_button"]').scrollIntoView().click();

    cy.visit('/');
    // Assert that Dresses is renamed to Dresses Top
    cy.get('body').should('contain', 'Dresses Top');
  });
  it('test case 2', () => {
    // Implement your test case 2 code here
  });
  it('test case 3', () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
