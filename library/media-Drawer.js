import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import Box from "@mui/material/Box";

export const list = (anchor) => (
  <Box sx={{ width: "200px" }} role="presentation">
    <List>
      <ListItem
        sx={{
          "&:hover": {
            bgcolor: "red",
          },
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <AccountCircleIcon sx={{ fontSize: "25px" }} />
          My Profile
        </Link>
      </ListItem>
      <ListItem
        sx={{
          "&:hover": {
            bgcolor: "red",
          },
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FeaturedPlayListIcon sx={{ fontSize: "25px" }} />
          My Listings
        </Link>
      </ListItem>

      <ListItem
        sx={{
          "&:hover": {
            bgcolor: "red",
          },
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <LocalOfferIcon sx={{ fontSize: "25px" }} />
          My Offers
        </Link>
      </ListItem>

      <ListItem
        sx={{
          "&:hover": {
            bgcolor: "red",
          },
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <SwapHorizIcon sx={{ fontSize: "25px" }} />
          Sent Offers
        </Link>
      </ListItem>
    </List>
  </Box>
);
