//PACKAGES
import useLogin from "../../hooks/login/useLogin";

//COMPONENT
import {
  loginButton,
  mediaButton,
  textfield,
} from "../../library/authPage/mediAuth";

//MUI
import { TextField, Button, InputAdornment } from "@mui/material";

//ICONS
import { FcGoogle } from "react-icons/fc";
import { RiFacebookBoxFill } from "react-icons/ri";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const LogIn = () => {
  const { formikSignIn, showPassword, setshowPassword, GoogleSignInHandler } =
    useLogin();

  return (
    <>
      <form onSubmit={formikSignIn.handleSubmit}>
        <TextField
          variant="outlined"
          label="Email"
          sx={textfield}
          {...formikSignIn.getFieldProps("loginEmail")}
          error={
            formikSignIn.touched.loginEmail &&
            Boolean(formikSignIn.errors.loginEmail)
          }
          helperText={
            formikSignIn.touched.loginEmail && formikSignIn.errors.loginEmail
          }
        />
        <TextField
          variant="outlined"
          label="Password"
          type={!showPassword.password ? "password" : "text"}
          sx={textfield}
          {...formikSignIn.getFieldProps("loginPassword")}
          error={
            formikSignIn.touched.loginPassword &&
            Boolean(formikSignIn.errors.loginPassword)
          }
          helperText={
            formikSignIn.touched.loginPassword &&
            formikSignIn.errors.loginPassword
          }
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
        <Button type="submit" variant="outlined" sx={loginButton}>
          Login
        </Button>
      </form>

      <Button variant="outlined" sx={mediaButton} onClick={GoogleSignInHandler}>
        Sign in using Google
        <FcGoogle size={30} />
      </Button>

      <Button variant="outlined" sx={mediaButton}>
        Sign in using Facebook
        <div>
          <RiFacebookBoxFill size={30} color={"#475993"} />
        </div>
      </Button>
    </>
  );
};

export default LogIn;
