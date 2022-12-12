//PACKAGES
import { useState } from "react";
import Head from "next/head";
import { Be_Vietnam_Pro } from "@next/font/google";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import { validate } from "../../library/Formik/LoginValidation";

//COMPONENTS
import Logo from "../../component/logo";
import Image from "next/image";
import SignInImg from "../../public/images/signIn.jpeg";

//MUI
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";

//ICONS
import { FcGoogle } from "react-icons/fc";
import { RiFacebookBoxFill } from "react-icons/ri";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

//Responsive themes
import { BoxContainer, ImgGone } from "../../library/media";
import { get } from "react-hook-form";

const BeVietnamPro = Be_Vietnam_Pro({
  weight: "100",
});
const container = {
  display: "flex",
  justifyContent: "center",
};

const InputBoxContainer = {
  display: "flex",
  flexFlow: "wrap column",
  gap: "20px",
  width: "80%",
  marginBottom: "20px",
};

const ButtonHoverEffect = {
  "&:hover": {
    fontWeight: "bold",
    textDecoration: "underline",
  },
};

const loginButton = {
  backgroundColor: "#2EA8D1",
  color: "white",
  fontWeight: "bold",
  height: "3rem",
  "&:hover": {
    backgroundColor: "#2EA8D1",
    color: "white",
  },
};

const mediaButton = {
  display: "flex",
  gap: "45px",
};

const imgContainer = {
  display: "block",
};

const ImgStyle = {
  width: "100%",
  borderRadius: "10px 0px 0px 10px",
};

const Slogan = {
  color: "#8C8888",
  width: "70%",
  textAlign: "center",
  fontSize: "14px",
  margin: "10px 0px 30px 0px ",
};

const AuthPage = () => {
  const [login, setLogin] = useState(true);
  const [showPassword, setshowPassword] = useState({
    password: false,
    cpassword: false,
  });

  const GoogleSignInHandler = async () => {
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  };
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      loginEmail: "",
      loginPassword: "",
      password: "",
      cpassword: "",
    },
    validate: validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "25px",
      }}
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap"
          rel="stylesheet"
        />
        <title>Login</title>
        <meta desc="This is where the users can create or login on their account to use the service."></meta>
      </Head>

      {/* START OF FORM */}
      <Container sx={container}>
        <Box sx={{ objectFit: "cover" }}>
          <ImgGone>
            <div sx={imgContainer}>
              <Image
                src={SignInImg}
                style={ImgStyle}
                width="100%"
                height="100%"
              />
            </div>
          </ImgGone>
        </Box>
        {/* INPUT BOXES */}
        {login ? (
          <>
            <BoxContainer>
              <div>
                <Logo />
              </div>
              <Typography
                variant="body"
                className={BeVietnamPro.className}
                sx={Slogan}
              >
                Trade your items so that it can benefit others
              </Typography>
              <Box sx={InputBoxContainer}>
                <TextField
                  variant="outlined"
                  label="Email"
                  {...formik.getFieldProps("loginEmail")}
                  error={
                    formik.touched.loginEmail &&
                    Boolean(formik.errors.loginEmail)
                  }
                  helperText={
                    formik.touched.loginEmail && formik.errors.loginEmail
                  }
                />
                <TextField
                  variant="outlined"
                  label="Password"
                  {...formik.getFieldProps("loginPassword")}
                  error={
                    formik.touched.loginPassword &&
                    Boolean(formik.errors.loginPassword)
                  }
                  helperText={
                    formik.touched.loginPassword && formik.errors.loginPassword
                  }
                />
                <Button variant="outlined" sx={loginButton}>
                  Login
                </Button>

                <Button
                  variant="outlined"
                  sx={mediaButton}
                  onClick={GoogleSignInHandler}
                >
                  Sign in using Google
                  <FcGoogle size={30} />
                </Button>

                <Button variant="outlined" sx={mediaButton}>
                  Sign in using Facebook
                  <div>
                    <RiFacebookBoxFill size={30} color={"#475993"} />
                  </div>
                </Button>
              </Box>
              <Typography
                variant="body"
                className={BeVietnamPro.className}
                sx={{
                  color: "#8C8888",
                  width: "70%",
                  textAlign: "center",
                  fontSize: "14px",
                  margin: "10px",
                }}
              >
                Dont have an account?
                <Button sx={ButtonHoverEffect} onClick={() => setLogin(false)}>
                  Signup
                </Button>
              </Typography>
            </BoxContainer>
          </>
        ) : (
          <>
            <BoxContainer>
              <div>
                <Logo />
              </div>
              <Typography
                variant="body"
                className={BeVietnamPro.className}
                sx={Slogan}
              >
                Trade your items so that it can benefit others
              </Typography>
              <Box sx={InputBoxContainer}>
                <TextField
                  variant="outlined"
                  label="Full Name"
                  {...formik.getFieldProps("fullName")}
                  error={
                    formik.touched.fullName && Boolean(formik.errors.fullName)
                  }
                  helperText={formik.touched.fullName && formik.errors.fullName}
                />
                <TextField
                  variant="outlined"
                  label="Email"
                  {...formik.getFieldProps("email")}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  variant="outlined"
                  label="Password"
                  type={!showPassword.password ? "password" : "text"}
                  {...formik.getFieldProps("password")}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
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
                  type={!showPassword.cpassword ? "password" : "text"}
                  {...formik.getFieldProps("cpassword")}
                  error={
                    formik.touched.cpassword && Boolean(formik.errors.cpassword)
                  }
                  helperText={
                    formik.touched.cpassword && formik.errors.cpassword
                  }
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
                <Button
                  variant="outlined"
                  sx={loginButton}
                  onClick={formik.handleSubmit}
                >
                  Register
                </Button>
              </Box>
              <Typography
                variant="body"
                className={BeVietnamPro.className}
                sx={{
                  color: "#8C8888",
                  width: "70%",
                  textAlign: "center",
                  fontSize: "14px",
                  margin: "10px",
                }}
              >
                {login ? "Dont have an account?" : "Already have an account? "}
                <Button
                  sx={ButtonHoverEffect}
                  onClick={() => {
                    login ? setLogin(false) : setLogin(true);
                  }}
                >
                  {login ? "Signup" : "Login"}
                </Button>
              </Typography>
            </BoxContainer>
          </>
        )}
      </Container>
    </Container>
  );
};

export default AuthPage;
