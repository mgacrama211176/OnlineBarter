import React from "react";
import Listing from "../../component/listingItem";
import { Box } from "@mui/material";

const MyListing = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Listing />
      <Listing />
      <Listing />
      <Listing />
    </Box>
  );
};

export default MyListing;
