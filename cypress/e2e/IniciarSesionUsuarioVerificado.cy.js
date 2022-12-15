/// <reference types="cypress" />
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe("Iniciar Sesion Usuario ya verificado", () => {
  before(() => {
    cy.viewport(1600, 950);
    cy.visit("http://localhost:3000");
  });

  it("Iniciar Sesion con un Usuario ya verificado", () => {
    cy.viewport(1600, 950);

    cy.get(".contenedor")
      .find("input[type=text]")
      .type("marketplaceganaderia@gmail.com");
    cy.get(".contenedor").find("input[type=password]").type("76680886");
    cy.get(".login-btn").click();
  });

  it("Ir a Datos del Usuario", () => {
    cy.viewport(1800, 1050);
    cy.contains("VER PERFIL").click();
  });

  it("Editar los Datos del Usuario", () => {
    cy.viewport(1800, 1050);
    cy.wait(3500);

    cy.get(".botonEditar").click();
    cy.get(".inputNombre")
      .find("input[type=fullName]")
      .type("Luis Andrés Flores Loza");

    cy.get(".botonEditar2").click();
    cy.get(".inputFecha").find("input[type=birthdayDate]").type("13/03/2000");

    cy.get(".botonEditar3").click();
    cy.get(".inputTelefono")
      .find("input[type=phoneNumber]")
      .type("+591 76680886");

    cy.get(".botonAceptar").click({ multiple: true });
  });
});
