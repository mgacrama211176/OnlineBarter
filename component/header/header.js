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
        padding: "0 20px",
        justifyContent: "space-between",
        maxWidth: "1440px",
        margin: "0 auto",
        alignItems: "center",
        borderBottom: "1px solid #e3e3e3",
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
