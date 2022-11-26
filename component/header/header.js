import { Box } from "@mui/material";
import Logo from "../logo";
import HeaderNavigation from "./navigation";
import HeaderSearch from "./headerSearch";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-evenly",
        maxWidth: "1440px",
        alignItems: "center",
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
    </Box>
  );
};

export default Header;
