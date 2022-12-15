/// <reference types="cypress" />
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe("Registrar Usuario", () => {
  before(() => {
    cy.viewport(1600, 950);
    cy.visit("http://localhost:3000");
  });

  it("Ir a Pagina de Registrar un Usuario", () => {
    //DIRIGIRSE A LA PAGINA DE REGISTRO
    cy.get(".titulo2").click();
    cy.visit("http://localhost:3000/register");

    //REGISTRAR CORREO DE USUARIO
    cy.get(".contenedorEmail")
      .find("input[type=email]")
      .type("prueba00@gmail.com");

    //REGISTRAR CONTRASEÑA DE USUARIO
    cy.get(".contenedorPassword")
      .find("input[type=password]")
      .type("123456789");

    //REGISTRAR CONFIRMACION DE CONTRASEÑA DE USUARIO
    cy.get(".contenedorConfirmPassword")
      .find("input[type=password]")
      .type("123456789");

    cy.get(".login-btn").click();
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe("Validacion de Campos para el Inicio de Sesión", () => {
  before(() => {
    cy.viewport(1600, 950);
    cy.visit("http://localhost:3000");
  });

  it("Validación de Correo Electronico y Contraseña", () => {
    cy.location("pathname").should("include", "");

    //VALIDAR DATOS DE CORREO ELECTRONICO
    cy.get(".contenedor")
      .find("input[type=text]")
      .type("prueba00@gmail.com")
      .as("email");
    cy.get("@email").should("have.value", "prueba00@gmail.com");

    //VALIDAR DATOS DE CONTRASEÑA
    cy.get(".contenedor")
      .find("input[type=password]")
      .type("123456789")
      .as("contraseña");
    cy.get("@contraseña").should("have.value", "123456789");
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
describe("Iniciar Sesión", () => {
  before(() => {
    cy.viewport(1600, 950);
    cy.visit("http://localhost:3000");
  });

  it("Iniciar Sesion con un Nuevo Usuario", () => {
    cy.get(".contenedor").find("input[type=text]").type("prueba00@gmail.com");
    cy.get(".contenedor").find("input[type=password]").type("123456789");
    cy.get(".login-btn").click();
  });

  it("Verificar Correo Electronico", () => {
    cy.viewport(1600, 950);

    cy.get(".verificador-btn", { timeout: 5000 }).click();
    cy.get(".modalButton").click();
  });
});
