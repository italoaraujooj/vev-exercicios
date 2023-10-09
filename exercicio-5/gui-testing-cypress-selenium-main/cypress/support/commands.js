Cypress.Commands.add('login', (username, password) => {
  cy.visit('/admin');
  cy.get('[id="_username"]').type(username);
  cy.get('[id="_password"]').type(password);
  cy.get('.primary').click();
});

Cypress.Commands.add('clickInFirst', (element) => {
  cy.get(element).first().scrollIntoView().click();
});
