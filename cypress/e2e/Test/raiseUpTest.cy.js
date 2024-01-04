/// <reference types='cypress' />

describe("RaiseUp Test", () => {
    beforeEach(() => {
      cy.visit("https://hubtel.com");
      cy.get("#navbarNavDropdown2 > ul")
        .eq(1)
        .find("li")
        .eq(2)
        .trigger("mouseover")
        .click();
      cy.get('[aria-labelledby="navbarDropdownMenuLink"] .dropdown-item')
        .contains("RaiseUp for Schools")
        .click();
    });
  
    it("Verify INSTALL RAISEUP link", () => {
      cy.validateLinkStatus(".mt-4 > .btn");
    });
  
    it("Confirm that image at right side on RaiseUp page exists", () => {
      cy.get('img[src="https://explore.hubtel.com/wp-content/themes/explorehubtel/images/schools-app.png"]').should("exist");
    });
  
    it("Verify the number of cards, the card images, headers, and descriptions", () => {
      cy.get(".g-xl-5 > div").as("cards");
  
      // Verify the number of cards
      cy.get("@cards").should("have.length", 6);
  
      // Loop through each card
      cy.get("@cards").each((card) => {
        // Verify that the card is visible
        cy.wrap(card).should("be.visible");
  
        // Verify the card image has a non-empty src attribute
        cy.wrap(card).find("img").should("have.attr", "src").and("not.be.empty");
  
        // Verify the text content of the h5 (header)
        cy.wrap(card).find("h5").invoke("text").then((text) => {
          expect(text.trim()).to.not.be.empty;
        });
  
        // Verify the text content of the h6 (description)
        cy.wrap(card).find("h6").invoke("text").then((text) => {
          expect(text.trim()).to.not.be.empty;
        });
      });
    });
  
    it("Verify GET YOUR CHILD'S SCHOOL TO SIGN UP link", () => {
      cy.validateLinkStatus('a[href="https://raiseup.hubtel.com/signup"]');
    });
  });
