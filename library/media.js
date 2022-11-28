import { styled } from "@mui/material/styles";

//Responsive themes
export const BoxContainer = styled("div")(({ theme }) => ({
  border: "solid #D9D9D9 1px",
  borderRadius: "0px 10px 10px 0px",
  display: "flex",
  flexFlow: "wrap row",
  fontFamily: "'Bellefair', serif",
  justifyContent: "center",
  alignContent: "center",
  width: "50%",

  [theme.breakpoints.down("md")]: {
    border: "none",
    width: "80%",
  },

  [theme.breakpoints.down("sm")]: {
    border: "none",
    width: "110%",
  },
}));

export const ImgGone = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
