describe('product reviews', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();
  });
  // Remove .only and implement others test cases!
  it.only('changing rating of specify product review', () => {
    // Click in product reviews in side menu
    cy.clickInFirst('a[href="/admin/product-reviews/"]');
    // Type in value input to search for specify product review
    cy.get('[id="criteria_title_value"]').type('voluptatem');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in edit of the last product review
    cy.get('*[class^="ui labeled icon button "]').last().click();
    // Edit product review rating
    cy.get('[for="sylius_product_review_rating_4"]').scrollIntoView().click();
    // Click on Save changes button
    cy.get('[id="sylius_save_changes_button"]').scrollIntoView().click();

    // Assert that product review has been updated
    cy.get('body').should('contain', 'Product review has been successfully updated.');
  });
  it('test case 2', () => {
    // Implement your test case 2 code here
  });
  it('test case 3', () => {
    // Implement your test case 3 code here
  });

  // Implement the remaining test cases in a similar manner
});
