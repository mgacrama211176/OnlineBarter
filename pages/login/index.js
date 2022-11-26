import React, { useState } from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import Logo from "../../component/logo";
import Head from "next/head";
import { Be_Vietnam_Pro } from "@next/font/google";
import Link from "next/link";

//ICONS
import { FcGoogle } from "react-icons/fc";
import { RiFacebookBoxFill } from "react-icons/ri";

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

const ThumbnailIcons = {
  width: "30px",
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
};

const mediaButton = {
  display: "flex",
  gap: "45px",
};

const ImgStyle = {
  width: "100%",
  borderRadius: "10px 0px 0px 10px",
  display: { md: "none" },
};

const index = () => {
  const [login, setLogin] = useState("true");

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px",
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
          <div>
            <img
              src="https://images.pexels.com/photos/4050346/pexels-photo-4050346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              style={ImgStyle}
            ></img>
          </div>
        </Box>
        {/* INPUT BOXES */}
        {login ? (
          <>
            <Box
              sx={{
                border: "solid black 1px",
                borderRadius: "0px 10px 10px 0px",
                display: "flex",
                flexFlow: "wrap row",
                fontFamily: "'Bellefair', serif",
                justifyContent: "center",
                alignContent: "center",
                width: "50%",
              }}
            >
              <div>
                <Logo />
              </div>
              <Typography
                variant="body"
                className={BeVietnamPro.className}
                sx={{
                  color: "#8C8888",
                  width: "70%",
                  textAlign: "center",
                  fontSize: "14px",
                  margin: "10px 0px 30px 0px ",
                }}
              >
                "Trade your items so that it can benefit others"
              </Typography>
              <Box sx={InputBoxContainer}>
                <TextField variant="outlined" label="Email" />
                <TextField variant="outlined" label="Password" />
                <Button variant="outlined" sx={loginButton}>
                  Login
                </Button>

                <Button variant="outlined" sx={mediaButton}>
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
                "Dont have an account?
                <Button sx={ButtonHoverEffect} onClick={() => setLogin(false)}>
                  Signup
                </Button>
                "
              </Typography>
            </Box>
          </>
        ) : (
          <>
            <Box
              sx={{
                border: "solid black 1px",
                borderRadius: "0px 10px 10px 0px",
                display: "flex",
                flexFlow: "wrap row",
                fontFamily: "'Bellefair', serif",
                justifyContent: "center",
                alignContent: "center",
                width: "50%",
              }}
            >
              <div>
                <Logo />
              </div>
              <Typography
                variant="body"
                className={BeVietnamPro.className}
                sx={{
                  color: "#8C8888",
                  width: "70%",
                  textAlign: "center",
                  fontSize: "14px",
                  margin: "10px 0px 30px 0px ",
                }}
              >
                "Trade your items so that it can benefit others"
              </Typography>
              <Box sx={InputBoxContainer}>
                <TextField variant="outlined" label="Full Name" />
                <TextField variant="outlined" label="Email" />
                <TextField
                  variant="outlined"
                  label="Password"
                  type="password"
                />
                <TextField
                  variant="outlined"
                  label="Verify Password"
                  type="password"
                />
                <Button variant="outlined" sx={loginButton}>
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
            </Box>
          </>
        )}
      </Container>
    </Container>
  );
};

export default index;
