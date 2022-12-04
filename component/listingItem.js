import * as React from "react";
import Image from "next/image";
import nothing from "../public/images/nothing.jpg";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  ButtonGroup,
  Box,
} from "@mui/material";

const buttons = [
  <Button key="one">View Listing</Button>,
  <Button key="two">Remove Listing</Button>,
];

export default function MultiActionAreaCard() {
  return (
    <Card
      variant="none"
      sx={{
        maxWidth: "100%",
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
        },
        paddingBlock: "5px",
        height: "210px",
      }}
    >
      <CardActionArea
        sx={{ display: "flex", flexDirection: "row", paddingInline: "10px" }}
      >
        <Image src={nothing} alt="Nothing Phone" width={230} height={180} />
        <CardContent
          sx={{
            height: "100%",
          }}
        >
          <Typography gutterBottom variant="h5">
            Nothing Phone (1)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This OLED panel rivals flagship models like the Pixel 6 when it
            comes to resolution, and it delivers a dynamic refresh rate that can
            go from 60 to 120Hz – this is a fancy way of saying that it'll make
            scrolling and animations look smooth and feel more responsive to
            your touch.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Date Posted: 10/20/2023
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box
        sx={{
          width: "400px",
          display: "flex",
          alignItems: "center",
          flexFlow: "column wrap",
          paddingBlock: "20px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <ButtonGroup
            aria-label="vertical outlined button group"
            variant="text"
            sx={{
              width: "100%",
              height: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {buttons}
          </ButtonGroup>
        </Box>
        <Box sx={{ marginTop: "10px", width: "100%", textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            You currently have 10 offers
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
