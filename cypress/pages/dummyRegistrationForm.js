class DummyRegistrationForm {
  // 1.Go to URL
  visit() {
    cy.visit(`${Cypress.env("firstScenarioUrl")}`);
  }

  // 2. Validate the form title ‘DUMMY REGISTRATION FORM’.
  validateHeader() {
    cy.contains("h3", "Dummy Registration Form").should("be.visible");
  }

  // 3. Validate the form is having the following items:
  validateLinks(links) {
    links.forEach(({ label, href }) => {
      cy.get(".text_popup")
        .contains("a", label)
        .should("exist")
        .and("have.attr", "href", href);
    });
  }

  // 4. Validate the form to have the following fields: Name, Phone, Email, Country, City, Username, Password.
  validateFields(fields) {
    fields.forEach((field) => {
      const selector = field === "country" ? "select" : "input";
      cy.get(`${selector}[name="${field}"]`).should("exist");
    });
  }

  // 5. Click the ‘Submit’ button, and validate the error message.
  validateEmptyFormSubmission() {
    cy.get('input[type="submit"]').filter(":visible").click();
    cy.get('input[name="name"]')
      .invoke("prop", "validationMessage")
      .should("equal", "Please fill out this field.");
  }

  // 6. Fill in all required data then click the ‘Submit’ button.
  fillForm(formData) {
    if (!formData || typeof formData !== "object") {
      throw new Error("formData is undefined or not an object");
    }

    Object.entries(formData).forEach(([field, value]) => {
      const selector = field === "country" ? "select" : "input";
      cy.get(`${selector}[name="${field}"]`)
        .filter(":visible")
        .type(value, { force: true });
    });
  }
  submitForm() {
    cy.get('input[type="submit"]').filter(":visible").click();
  }

  // 7&12 Assert the displayed message
  validateAlertMessage(selector, message) {
    cy.get(selector).should("be.visible").and("have.text", message);
  }

  // 8. Click on link ‘Signin’/'login'
  clickSignin() {
    cy.get(".text_popup").contains("a", "Signin").click();
  }

  // 9. Validate the new form is open with title ‘LOGIN’
  validateLoginHeader() {
    cy.contains("h3", "Login").should("be.visible");
  }
}

export default new DummyRegistrationForm();
