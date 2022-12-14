export const SignInValidation = (values) => {
  const errors = {};

  if (!values.loginEmail) {
    errors.loginEmail = "Email Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.loginEmail)
  ) {
    errors.loginEmail = "Invalid email address";
  }

  if (!values.loginPassword) {
    errors.loginPassword = "Password Required";
  } else if (
    values.loginPassword.length < 8 ||
    values.loginPassword.length > 20
  ) {
    errors.loginPassword =
      "Password must not be less than 8 or greater than 20";
  } else if (values.loginPassword.includes(" ")) {
    errors.loginPassword = "Password must not contain spaces";
  }

  return errors;
};
