import dummyRegistrationForm from "../pages/dummyRegistrationForm";
import { links } from "../support/formData";
import formData from "../support/formData";

describe("Dummy Registration Form Tests", () => {
  const fields = [
    "name",
    "phone",
    "email",
    "country",
    "city",
    "username",
    "password",
  ];

  beforeEach(() => {
    dummyRegistrationForm.visit();
  });

  it("Validates the Registration Form fields and actions", () => {
    dummyRegistrationForm.validateHeader();

    dummyRegistrationForm.validateLinks(links);

    dummyRegistrationForm.validateFields(fields);

    dummyRegistrationForm.validateEmptyFormSubmission();

    dummyRegistrationForm.fillForm(formData);

    dummyRegistrationForm.submitForm();

    dummyRegistrationForm.validateAlertMessage(
      "#alert",
      "This is just a dummy form, you just clicked SUBMIT BUTTON"
    );

    dummyRegistrationForm.clickSignin();
    dummyRegistrationForm.validateLoginHeader();

    dummyRegistrationForm.fillForm({
      username: formData.username,
      password: formData.password,
    });

    dummyRegistrationForm.submitForm();

    dummyRegistrationForm.validateAlertMessage(
      "#alert1",
      "This is just a dummy form, you just clicked LOGIN"
    );
  });
});
