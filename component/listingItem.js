import * as React from "react";
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
    <Card sx={{ maxWidth: "100%", display: "flex", flexDirection: "row" }}>
      <CardActionArea sx={{ display: "flex", flexDirection: "row" }}>
        <CardMedia
          component="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSh-jnwAqvpzDODKJhZ8VAkI_aqGTMMgf0bw&usqp=CAU"
          alt="green iguana"
          sx={{ backgroundRepeat: "no-repeat", backgroundSize: "auto" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
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
      <Box>
        <Typography variant="body2" color="text.secondary">
          Status
        </Typography>
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
          variant="contained"
        >
          {buttons}
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" color="text.secondary">
          Offers
        </Typography>
        <Typography variant="body2" color="text.secondary">
          You have 10 offers
        </Typography>
      </Box>
    </Card>
  );
}
