export const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password.length < 8 && values.password.length > 20) {
    errors.password = "Password must not be less than 8 or greater than 20";
  } else if (values.password.includes(" ")) {
    errors.password = "Password must not contain spaces";
  }

  if (!values.cpassword) {
    errors.cpassword = "Password Required";
  } else if (values.cpassword.length < 8 && values.cpassword.length > 20) {
    errors.cpassword = "Password must not be less than 8 or greater than 20";
  } else if (values.password.includes(" ")) {
    errors.cpassword = "Password must not contain spaces";
  } else if (values.password !== values.cpassword) {
    errors.cpassword = "Passowrd did not match!";
  }

  if (!values.fullName) {
    errors.fullName = "Full Name Required";
  } else if (values.fullName.trim() === "") {
    errors.fullName = "Please Enter Valid Name";
  }

  return errors;
};
