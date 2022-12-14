import useLogin from "../../hooks/login/useLogin";

//COMPONENTS
import { textfield } from "../../library/authPage/mediAuth";

//MUI
import {
  Box,
  TextField,
  Button,
  InputAdornment,
  Alert,
  Typography,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Snackbar from "@mui/material/Snackbar";

//ICONS
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Register = () => {
  const {
    error,
    state,
    success,
    setSucess,
    isLoading,
    formik,
    showPassword,
    setshowPassword,
  } = useLogin();
  console.log(isLoading);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography variant="p" sx={{ color: "red" }}>
        {error}
      </Typography>
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
      <Box
        sx={{
          mt: "20px",
          position: "relative",
          width: "100%",
          display: "flex",
        }}
      >
        <Button
          fullWidth
          variant="contained"
          type="submit"
          disabled={isLoading}
          sx={{ color: "white", height: "56px" }}
        >
          Register
        </Button>
        {isLoading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-12px",
              marginLeft: "-12px",
            }}
          />
        )}
      </Box>

      <Snackbar
        color="white"
        anchorOrigin={state}
        open={success}
        onClose={() => setSucess(false)}
        autoHideDuration={2000}
        key={state}
      >
        <Alert onClose={success} severity="success">
          Data Succesfully Added
        </Alert>
      </Snackbar>
    </form>
  );
};

export default Register;
