import { Box, Button, IconButton, List, ListItem } from "@mui/material";
import Link from "next/link";
import AccountMenu from "./profile";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useSession } from "next-auth/react";

const HeaderNavigation = () => {
  const { data: session } = useSession();

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
          <ListItem
            sx={{
              "&:hover": {
                color: "#001935",
                fontWeight: "bolder",
              },
            }}
          >
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

        {session ? <AccountMenu /> : <Button variant="outlined"> Login</Button>}
      </Box>
    </>
  );
};

export default HeaderNavigation;
