export {};

describe("Add New TodoItem", () => {
  it("find new added item", () => {
    cy.visit("http://localhost:3000");
    cy.dataCy("input-text").focus().type("Review Pull Request");
    cy.dataCy("add-new-btn").click();
    cy.dataCy("todo-list").contains("Review Pull Request");
  });

  it('remove a item', () => {
    cy.dataCy('todo-list').contains("Review Pull Request").dataCy("remove-btn").click()
    cy.dataCy('todo-list').contains("Review Pull Request").should('not.exist')
  })
});
