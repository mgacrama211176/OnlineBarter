import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const RatingStyle = {
  color: "#32AAD5",
  fontWeight: "bolder",
  display: "flex",
  alignItems: "center",
};

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">Barter Rating: </Typography>
      <Box sx={RatingStyle}>
        4.5
        <Rating name="read-only" value={value} readOnly sx={RatingStyle} />
      </Box>
    </Box>
  );
}
