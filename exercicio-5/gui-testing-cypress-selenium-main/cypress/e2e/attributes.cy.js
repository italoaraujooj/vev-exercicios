describe('attributes', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();
  });
  // Remove .only and implement others test cases!
  it.only('testing edit attribute position', () => {
    // Click in products in side menu
    cy.clickInFirst('a[href="/admin/product-attributes/"]');
    // Type in value input to search for specify attribute
    cy.get('[id="criteria_code_value"]').type('dress_collection');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in edit of the remain attribute
    cy.clickInFirst('*[class^="ui labeled icon button "]');
    // Edit attribute position
    cy.get('[id="sylius_product_attribute_position"]').clear().type('10');
    // Click on Save changes button
    cy.get('[id="sylius_save_changes_button"]').scrollIntoView().click();

    // Assert that attribute has been updated
    cy.get('body').should('contain', 'Product attribute has been successfully updated.');
  });
  it('test case 2', () => {
    // Implement your test case 2 code here
  });
  it('test case 3', () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
