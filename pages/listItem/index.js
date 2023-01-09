import React from "react";
import { Container, Box, Typography, TextField } from "@mui/material";
import { Button } from "../../library/theme";
import Image from "next/image";

const index = () => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          height: "auto",
          maxHeight: "100%",
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
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: { md: "space-evenly" },
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
            }}
          >
            {/* LEFT */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: { md: "50%" },
              }}
            >
              <TextField id="Item Name" variant="outlined" label="Item Name" />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                  justifyContent: { xs: "center" },
                  flexDirection: "column",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button>Upload</Button>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: { xs: "12px" }, marginTop: "8px" }}
                  >
                    Upload Item Image
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    flexFlow: "nowrap row",
                    justifyContent: "center",
                    marginTop: "10px",
                    width: "100%",
                    padding: "10px",
                    border: "1px solid black",
                    overflowY: "scroll",
                  }}
                >
                  <Image
                    width={100}
                    height={100}
                    alt="item Image"
                    src={
                      "https://images.pexels.com/photos/4926899/pexels-photo-4926899.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    }
                    loader={myLoader}
                  />
                  <Image
                    width={100}
                    height={100}
                    alt="item Image"
                    src={
                      "https://images.pexels.com/photos/4926899/pexels-photo-4926899.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    }
                    loader={myLoader}
                  />
                  <Image
                    width={100}
                    height={100}
                    alt="item Image"
                    src={
                      "https://images.pexels.com/photos/4926899/pexels-photo-4926899.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    }
                    loader={myLoader}
                  />
                  <Image
                    width={100}
                    height={100}
                    alt="item Image"
                    src={
                      "https://images.pexels.com/photos/4926899/pexels-photo-4926899.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    }
                    loader={myLoader}
                  />
                  <Image
                    width={100}
                    height={100}
                    alt="item Image"
                    src={
                      "https://images.pexels.com/photos/4926899/pexels-photo-4926899.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    }
                    loader={myLoader}
                  />
                  <Image
                    width={100}
                    height={100}
                    alt="item Image"
                    src={
                      "https://images.pexels.com/photos/4926899/pexels-photo-4926899.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    }
                    loader={myLoader}
                  />
                  <Image
                    width={100}
                    height={100}
                    alt="item Image"
                    src={
                      "https://images.pexels.com/photos/4926899/pexels-photo-4926899.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    }
                    loader={myLoader}
                  />
                  <Image
                    width={100}
                    height={100}
                    alt="item Image"
                    src={
                      "https://images.pexels.com/photos/4926899/pexels-photo-4926899.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    }
                    loader={myLoader}
                  />
                </Box>
              </Box>
            </Box>

            <Box
              sx={{ display: "flex", gap: 2, flexDirection: { xs: "column" } }}
            >
              <TextField id="Reason" variant="outlined" label="Trade Reason" />
              <TextField id="Looking" variant="outlined" label="Looking for" />
              <TextField
                id="purchaseDate"
                variant="outlined"
                label="Date Purchased"
                type="date"
                focused="true"
              />
              <TextField id="category" variant="outlined" label="Category" />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              marginTop: "10px",
            }}
          >
            <TextField
              id="Address"
              variant="outlined"
              label="Address"
              fullWidth
            />
            <TextField
              id="preferred"
              variant="outlined"
              label="Preferred meetup Location"
              fullWidth
            />
            <TextField
              id="Description"
              variant="outlined"
              label="Description"
              fullWidth
              maxRows={4}
              multiline
            />
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "center", margin: "5px" }}
          >
            <Button>Save</Button>
            <Button>Exit</Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default index;
