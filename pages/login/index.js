//PACKAGES
import Head from "next/head";
import useLogin from "../../component/hooks/login/useLogin";
import { Be_Vietnam_Pro } from "@next/font/google";

import Image from "next/image";

//COMPONENTS
import Logo from "../../component/logo";
import SignInImg from "../../public/images/signIn.jpeg";
import LogIn from "../../component/login/signIn";
import Register from "../../component/login/signUp";
import {
  ButtonHoverEffect,
  container,
  imgContainer,
  ImgStyle,
  InputBoxContainer,
  Slogan,
} from "../../library/authPage/mediAuth";

//MUI
import { Container, Box, Typography, Button } from "@mui/material";

//Responsive themes
import { BoxContainer, ImgGone } from "../../library/media";

const BeVietnamPro = Be_Vietnam_Pro({
  weight: "100",
});

const AuthPage = () => {
  const { login, setLogin } = useLogin();
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
                alt="sign in"
                style={ImgStyle}
                width="100%"
                height="100%"
              />
            </div>
          </ImgGone>
        </Box>
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
              {login ? (
                <Box sx={InputBoxContainer}>
                  <LogIn />
                </Box>
              ) : (
                <Box sx={InputBoxContainer}>
                  <Register />
                </Box>
              )}
              Dont have an account?
              <Button
                sx={ButtonHoverEffect}
                onClick={() => setLogin((prevState) => !prevState)}
              >
                Signup
              </Button>
            </Typography>
          </BoxContainer>
        </>
      </Container>
    </Container>
  );
};

export default AuthPage;
