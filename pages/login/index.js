import React from "react";
import { Container, Box } from "@mui/material";

const container = {
  display: "flex",
  border: "1px solid black",
};

const index = () => {
  return (
    <Container sx={container}>
      <Box>Login</Box>
      <Box>Login</Box>
    </Container>
  );
};

export default index;
