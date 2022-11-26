import React from "react";
import { Container, Box } from "@mui/material";
import Logo from "../../component/logo";
import Head from "next/head";
import Link from "next/link";

const container = {
  display: "flex",
  border: "1px solid black",
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
          // color: "#2EA8D1,",
        }}
      >
        <div>
          <Logo />
        </div>
        <div>
          <h1>Pamatigayon</h1>
        </div>
      </Box>
    </Container>
  );
};

export default index;
