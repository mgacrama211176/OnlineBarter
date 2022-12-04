import React from "react";
import Listing from "../../component/listingItem";
import Head from "next/head";

import { Box, Typography } from "@mui/material";

const MyListing = () => {
  return (
    <Box sx={{ maxWidth: "1200px", margin: "50px auto" }}>
      <Head>
        <title>My Listings</title>
      </Head>
      <Typography variant="h4" sx={{ paddingLeft: "20px" }}>
        My Listing
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          paddingTop: "50px",
        }}
      >
        <Listing />
        <Listing />
        <Listing />
        <Listing />
      </Box>
    </Box>
  );
};

export default MyListing;
