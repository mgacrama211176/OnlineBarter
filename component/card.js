import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";

import { Box, Button } from "@mui/material";

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: {
          md: 350,
          lg: 300,
        },
        paddingInline: "10px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "primary.main" }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Pre-Owned Iphone12"
          subheader="10/22/21"
          sx={{
            fontSize: {
              md: "9px",
              lg: "16px",
            },
          }}
        />
      </Box>
      <CardMedia
        component="img"
        height="194"
        image="https://cdn.shopify.com/s/files/1/0569/0189/4295/products/IMG_0769_grande.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          TF: PS3
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date Purchased: 10/22/22
        </Typography>
        <Typography variant="p" sx={{ fontSize: "12px", color: "gray" }}>
          12 views
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: "20px" }}
        >
          Description: <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          doloribus?
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <LocalOfferRoundedIcon />
        </IconButton>
        <Button
          variant="outlined"
          sx={{
            fontSize: "12px",
            marginLeft: "auto",
            "&:hover": {
              bgcolor: "#2EA8D1",
              color: "white",
            },
          }}
        >
          View Listing
        </Button>
      </CardActions>
    </Card>
  );
}
