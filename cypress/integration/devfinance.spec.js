/// <reference types="cypress" />

// get - mapear elementos usando seletor
// contains - mapear elemento usando texto

describe("DevFinance", () => {
  it.only("Adicionar três novas transações e excluir a segunda", () => {
    cy.visit("https://devfinance-agilizei.netlify.app/#");

    cy.get("a[onclick*=open]").click();
    cy.get("#description").type("Freela");
    cy.get("#amount").type("12");
    cy.get("#date").type("2021-11-03");
    cy.contains("button", "Salvar").click();

    cy.get("table tbody tr").should("have.length", 1);

    cy.get("a[onclick*=open]").click();
    cy.get("#description").type("Freela");
    cy.get("#amount").type("-20");
    cy.get("#date").type("2021-11-03");
    cy.contains("button", "Salvar").click();

    cy.get("table tbody tr").should("have.length", 2);

    cy.get("a[onclick*=open]").click();
    cy.get("#description").type("Teste");
    cy.get("#amount").type("300");
    cy.get("#date").type("2021-11-03");
    cy.contains("button", "Salvar").click();

    cy.get("table tbody tr").should("have.length", 3);

    cy.get("table tbody tr").eq(1).find("img[onclick*=remove]").click();
  });
});
