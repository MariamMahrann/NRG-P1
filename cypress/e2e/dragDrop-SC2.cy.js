import droppablePage from "../pages/droppablePage";

describe("Drag and Drop Test", () => {
  it("Drags and drops using coordinates", () => {
    // Visit the page
    droppablePage.visit();

    // Ensure iframe is loaded
    droppablePage.loadIframe();

    // Perform drag-and-drop within the iframe and validate success
    droppablePage.performDragAndDrop();
  });
});
