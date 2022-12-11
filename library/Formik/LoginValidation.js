export const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.loginEmail) {
    errors.loginEmail = "Email Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.loginEmail)
  ) {
    errors.loginEmail = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password.length < 8 && values.password.length > 20) {
    errors.password = "Password must not be less than 8 or greater than 20";
  } else if (values.password.includes(" ")) {
    errors.password = "Password must not contain spaces";
  }

  if (!values.loginPassword) {
    errors.loginPassword = "Password Required";
  } else if (
    values.loginPassword.length < 8 &&
    values.loginPassword.length > 20
  ) {
    errors.loginPassword =
      "Password must not be less than 8 or greater than 20";
  } else if (values.loginPassword.includes(" ")) {
    errors.loginPassword = "Password must not contain spaces";
  }

  if (!values.fullName) {
    errors.fullName = "Full Name Required";
  }

  return errors;
};
