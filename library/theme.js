import { createTheme, styled } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2EA8D1",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1200,
      xxl: 1440,
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
