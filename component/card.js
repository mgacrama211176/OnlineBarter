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
    <Card sx={{ maxWidth: 300 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Pre-Owned Iphone12"
          subheader="September 14, 2016"
        />
        <Typography variant="p" sx={{ fontSize: "12px", color: "gray" }}>
          12 views
        </Typography>
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
        <br />
        <Typography variant="body2" color="text.secondary">
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
          sx={{ fontSize: "12px", marginLeft: "auto" }}
        >
          View Listing
        </Button>
      </CardActions>
    </Card>
  );
}
