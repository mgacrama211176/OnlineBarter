import * as React from "react";
import Image from "next/image";
import nothing from "../public/images/nothing.jpg";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

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

        display: {
          xs: "block",
          sm: "block",
          md: "flex",
        },
        textAlign: {
          xs: "center",
          md: "left",
        },
        border: {
          xs: "1px solid #f3f3f3",
          md: "none",
        },
        height: "100%",
        margin: "10px 10px",
      }}
    >
      <CardActionArea
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "flex",
          },

          paddingInline: "10px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: {
              xs: "100%",
              md: "500px",
            },
            height: {
              xs: "150px",
              md: "150px",
            },
          }}
        >
          <Image
            src={nothing}
            alt="Nothing Phone"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </Box>
        <CardContent
          sx={{
            height: "100%",
          }}
        >
          <Typography gutterBottom variant="h5">
            Nothing Phone (1)
            <Typography variant="body2" color="text.secondary">
              Date Posted: 10/20/2023
            </Typography>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginBlock: "20px" }}
          >
            This OLED panel rivals flagship models like the Pixel 6 when it
            comes to resolution, and it delivers a dynamic refresh rate that can
            go from 60 to 120Hz – this is a fancy way of saying that it'll make
            scrolling and animations look smooth and feel more responsive to
            your touch.
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "30%",
          },
          display: "flex",
          flexFlow: "column wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <ButtonGroup
            aria-label="vertical outlined button group"
            variant="text"
            sx={{
              width: "100%",
              height: "50px",
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
