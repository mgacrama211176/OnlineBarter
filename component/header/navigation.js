import { Box, List, ListItem } from "@mui/material";
import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";

const HeaderNavigation = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <List>
        <ListItem>
          <Link href="/">Whats New?</Link>
        </ListItem>
      </List>

      <IoIosNotifications size={30} />

      <Link href="../../login">
        <MdAccountCircle size={40} />
      </Link>
    </Box>
  );
};

export default HeaderNavigation;
