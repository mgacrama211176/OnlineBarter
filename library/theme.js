import { createTheme, styled } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2EA8D1",
    },
  },
});

export const Button = styled("button")(() => ({
  backgroundColor: "#E6F4F1",
  color: "#2EA8D1",
  cursor: "pointer",
  fontWeight: "bold",
  border: "none",
  margin: "5px",
  borderRadius: "5px",
  width: "10em",
  height: "2em",
  marginTop: "10px",

  "&:hover": {
    color: "white",
    backgroundColor: "#2EA8D1",
  },
}));
