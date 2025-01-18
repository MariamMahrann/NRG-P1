import "cypress-iframe";

class DroppablePage {
  // 1.Go to URL
  visit() {
    cy.visit(Cypress.env("secondScenarioUrl"));
  }

  // 2. Perform the drag and drop of the ‘Drag me to my target’ box to ‘Dropped!’ box.
  loadIframe(iframeSelector = "iframe[src='droppable/default.html']") {
    cy.frameLoaded(iframeSelector);
  }

  performDragAndDrop(
    draggableSelector = "#draggable",
    droppableSelector = "#droppable"
  ) {
    cy.iframe("iframe[src='droppable/default.html']").within(() => {
      const validateDropSuccess = () => {
        cy.get(droppableSelector)
          .should("have.class", "ui-state-highlight")
          .and("contain.text", "Dropped!");
      };
      cy.get(draggableSelector).trigger("mousedown", { which: 1 });
      cy.get(droppableSelector).trigger("mousemove", { which: 1 });
      cy.get(droppableSelector).trigger("mouseup", { force: true });

      // Validate drop success
      validateDropSuccess();
    });
  }
}

export default new DroppablePage();
