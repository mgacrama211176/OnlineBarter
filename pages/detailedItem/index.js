import React from "react";
import Image from "next/image";
import Card from "../../component/card";
import { Container, Box, Typography, Button } from "@mui/material";

const ContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexFlow: "wrap column",
  marginTop: "20px",
};

const ButtonHover = {
  "&:hover": {
    bgcolor: "#2EA8D1",
    color: "white",
  },
};

const index = () => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <Container sx={ContainerStyle}>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <Box>
          <Image
            loader={myLoader}
            src="https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Picture of the author"
            width={250}
            height={250}
          />
        </Box>
        <Box>
          <Typography variant="h5">Pre-owned Gadgets</Typography>
          <Typography variant="h5">Views: 12</Typography>
          <Typography variant="h5">Trade For: PS3 + Sweets</Typography>
          <Typography variant="h5">Trade Reasons : No longer Needed</Typography>
          <Typography variant="h5">Purchase Date: 10/10/2010</Typography>
          <Typography variant="h5">Address: Admin City</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Button variant="outlined" sx={ButtonHover}>
              Trade
            </Button>
            <Button variant="outlined" sx={ButtonHover}>
              Chat Trader
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          border: "1px solid black",
          borderRadius: "10px",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <Typography
          sx={{
            borderBottom: "1px solid black",
            backgroundColor: "gray",
            borderRadius: "10px 10px 0px 0px",
            color: "white",
          }}
        >
          DESCRIPTION
        </Typography>
        <Typography variant="h5">
          lorem asa ka lorem, lorem asa ka lorem, lorem asa ka lorem, lorem asa
          ka lorem, lorem asa ka lorem, lorem asa ka lorem, lorem asa ka lorem,
          lorem asa ka lorem, lorem asa ka lorem, lorem asa ka lorem, lorem asa
          ka lorem,
        </Typography>
      </Box>
      <Box>
        <Typography>Similar Trades</Typography>
        <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Box>
      </Box>
    </Container>
  );
};

export default index;
