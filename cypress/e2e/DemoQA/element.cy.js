
describe("ElementTest", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/elements");
  });
  it("TestBoxTest", () => {
    cy.get("#item-0").click();
    cy.get("#userName").type("Israel Robertson");
    cy.get("#userEmail").type("israel@example.com");
    cy.get("#currentAddress").type("PO.Box 11");
    cy.get("#permanentAddress").type("PO.BOX 34 B");
    cy.get("#submit").click();
    cy.get('#name').should('contain','Israel Robertson');
    cy.get('#email').should('contain','israel@example.com');
  });
it.skip('CheckboxTest', () => {
    cy.get("#item-1").click();
    cy.wait(50000)
    cy.get('tree-node-home').check();
});

it.only('RadioButton', () => {
    cy.get("#item-2").click();
    cy.get('#impressiveRadio').check({ force: true });
    cy.get('.text-success').should('have.text','Impressive');
});
it('Web Table', () => {
    cy.get('#addNewRecordButton').click();
    cy.get('#firstName').type('Jacob');
    cy.get('#lastName').type('Kofi')
    cy.get('#userEmail').type('jacabkofi@gmail.com')
    cy.get('#age').type('28')
    cy.get('#salary').type('3800')
    cy.get('#department').type('Test Automation')
    cy.get("#submit").click();
});

});
