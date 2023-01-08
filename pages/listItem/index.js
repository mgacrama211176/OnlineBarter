import React from "react";
import { Container, Box, Typography, TextField } from "@mui/material";
import { Button } from "../../library/theme";

const index = () => {
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          height: "auto",
          maxHeight: "100%",
          overflow: "auto",
          marginTop: "30px",
        }}
      >
        <Box sx={{ backgroundColor: "#E6F4F1" }}>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "30px", md: "50px" } }}
          >
            List your new Item
          </Typography>
        </Box>
        <hr />
        <Box
          sx={{
            display: "flex",
            justifyContent: { md: "space-evenly" },
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
        >
          {/* LEFT */}
          <div>
            <TextField id="Item Name" variant="outlined" label="Item Name" />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                justifyContent: { xs: "center" },
              }}
            >
              <Button>Upload</Button>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "12px" }, marginTop: "8px" }}
              >
                Upload Item Image
              </Typography>
            </Box>
          </div>

          <div>Right</div>
        </Box>
      </Container>
    </div>
  );
};

export default index;
