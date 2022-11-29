import { Box, Button, IconButton, List, ListItem } from "@mui/material";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

const HeaderNavigation = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: {
            lg: "space-between",
          },
          gap: {
            xs: "5px",
            sm: "10px",
          },
        }}
      >
        <List
          sx={{
            display: {
              xs: "none",
              md: "flex",
              lg: "flex",
            },
          }}
        >
          <ListItem>
            <Link href="/">Whats New?</Link>
          </ListItem>
          <ListItem>
            <Link href="/">
              <Button
                variant="contained"
                sx={{
                  width: "120px",
                  color: "#fff",
                  "&:hover": {
                    fontWeight: "bold",
                  },
                }}
              >
                List Item
              </Button>
            </Link>
          </ListItem>
        </List>

        <NotificationsIcon
          sx={{
            display: { md: "inline-block" },
            fontSize: {
              xs: "25px",
              md: "30px",
            },
          }}
        />
        <AccountCircleIcon
          sx={{
            fontSize: {
              xs: "30px",
              md: "40px",
            },
          }}
        />
      </Box>
    </>
  );
};

export default HeaderNavigation;
