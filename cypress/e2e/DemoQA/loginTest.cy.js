
describe("validate login functionality", () => {
  it("login in with valid cridentails", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    /* cy.get('input[name="username"]').type("Admin");
     cy.get('input[name="password"]').type("admin123");
     cy.get('button[type="submit"]').click();
     cy.get(".oxd-text--h6").should("have.text", "Dashboard");*/
    //---- Using xpath -- //
    cy.xpath("//input[@placeholder='Username']").type("Admin");
    cy.xpath("//input[@placeholder='Password']").type("admin123");
    cy.xpath("//button[normalize-space()='Login']").click()
    cy.get(".oxd-text--h6").should("have.text", "Dashboard");
    


  });
});
