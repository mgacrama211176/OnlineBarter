import React from "react";
import useLogin from "../hooks/login/useLogin";

//COMPONENTS
import {
  InputBoxContainer,
  loginButton,
  textfield,
} from "../../library/authPage/mediAuth";

//MUI
import { Box, TextField, Button, InputAdornment } from "@mui/material";

//ICONS
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Register = () => {
  const { formik, showPassword, setshowPassword } = useLogin();
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        variant="outlined"
        label="Full Name"
        sx={textfield}
        {...formik.getFieldProps("fullName")}
        error={formik.touched.fullName && Boolean(formik.errors.fullName)}
        helperText={formik.touched.fullName && formik.errors.fullName}
      />
      <TextField
        variant="outlined"
        label="Email"
        {...formik.getFieldProps("email")}
        sx={textfield}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        variant="outlined"
        label="Password"
        sx={textfield}
        type={!showPassword.password ? "password" : "text"}
        {...formik.getFieldProps("password")}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{ cursor: "pointer" }}
              onClick={() =>
                setshowPassword((prevState) => ({
                  ...prevState,
                  password: !prevState.password,
                }))
              }
            >
              {showPassword.password ? (
                <VisibilityOffIcon />
              ) : (
                <VisibilityIcon />
              )}
            </InputAdornment>
          ),
        }}
      />
      <TextField
        variant="outlined"
        label="Verify Password"
        sx={textfield}
        type={!showPassword.cpassword ? "password" : "text"}
        {...formik.getFieldProps("cpassword")}
        error={formik.touched.cpassword && Boolean(formik.errors.cpassword)}
        helperText={formik.touched.cpassword && formik.errors.cpassword}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{ cursor: "pointer" }}
              onClick={() =>
                setshowPassword((prevState) => ({
                  ...prevState,
                  cpassword: !prevState.cpassword,
                }))
              }
            >
              {showPassword.cpassword ? (
                <VisibilityOffIcon />
              ) : (
                <VisibilityIcon />
              )}
            </InputAdornment>
          ),
        }}
      />
      <Button type="submit" variant="outlined" sx={loginButton}>
        Register
      </Button>
    </form>
  );
};

export default Register;
