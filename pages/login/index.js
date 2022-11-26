import React from "react";
import { Container, Box, Typography, TextField } from "@mui/material";
import Logo from "../../component/logo";
import Head from "next/head";
import { Be_Vietnam_Pro } from "@next/font/google";

const BeVietnamPro = Be_Vietnam_Pro({
  weight: "100",
});
const container = {
  display: "flex",
};

const index = () => {
  return (
    <Container sx={container}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap"
          rel="stylesheet"
        />
        <title>Login</title>
      </Head>
      <Box sx={{ objectFit: "cover" }}>
        <div>
          <img src="https://images.pexels.com/photos/4050346/pexels-photo-4050346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        </div>
      </Box>
      <Box
        sx={{
          border: "solid black 1px",
          display: "flex",
          flexFlow: "wrap row",
          fontFamily: "'Bellefair', serif",
          justifyContent: "center",
          alignContent: "center",
          // color: "#2EA8D1,",
        }}
      >
        {/* <div>
          <Logo />
        </div> */}
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
          "Trade your items so that it can benefit others"
        </Typography>
        <TextField variant="outlined" label="Email" />
      </Box>

      <Box></Box>
    </Container>
  );
};

export default index;
