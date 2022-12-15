/// <reference types="cypress" />
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe("Registrar Usuario", () => {
  before(() => {
    cy.viewport(1600, 950);
    cy.visit("http://localhost:3000");
  });

  it("Iniciar Sesion con Google", () => {
    cy.get(".icono-google").click();
  });
});
