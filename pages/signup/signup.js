import Link from "next/link";

//MUI
import Container from "@mui/material/Container";
import { Typography, Box, TextField } from "@mui/material";

const signup = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Box
        sx={{
          margin: 0,
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translate(-50%, -30%)",
          color: "black",
          border: "1px solid black",
          borderRadius: "10px",
          display: "flex",
          flexFlow: "column wrap",
          alignItems: "center",
          padding: "15px",
        }}
      >
        <Typography variant="h4">WELCOME TO ONLINE BARTER!</Typography>
        <Typography variant="h4">SIGNUP!</Typography>
        <Typography variant="subtitle1">
          Welcome to online barter where others can make use of your old items!
        </Typography>
        <TextField variant="outlined" label="Email"></TextField>
      </Box>
      <Link href="/">
        <h2>
          <p>back</p>
        </h2>
      </Link>
    </Container>
  );
};

export default signup;
