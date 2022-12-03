import { Box } from "@mui/material";
import Logo from "../logo";
import HeaderNavigation from "./navigation";
import HeaderSearch from "./headerSearch";
import TemporaryDrawer from "./drawer/drawer";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: {
          xs: "row nowrap",
          sm: "row wrap",
        },
        padding: "0 20px",
        justifyContent: {
          xs: "center",
          sm: "space-between",
        },
        maxWidth: "1440px",
        margin: "0 auto",
        alignItems: "center",
        borderBottom: "1px solid #e3e3e3",
        paddingBlock: {
          xs: " 20px",
          sm: "20px",
          md: "0px",
        },
      }}
    >
      <Box>
        <Logo />
      </Box>

      <Box>
        <HeaderSearch />
      </Box>

      <Box>
        <HeaderNavigation />
      </Box>

      {/* <TemporaryDrawer /> */}
    </Box>
  );
};

export default Header;
