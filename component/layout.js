import Header from "./header/header";
import { useRouter } from "next/router";
import { Be_Vietnam_Pro } from "@next/font/google";
import { Box } from "@mui/material";

const beVeitnam = Be_Vietnam_Pro({
  weight: "400",
});

const Layout = (props) => {
  const router = useRouter();

  return (
    <Box sx={{ maxWidth: "1440px", margin: "0 auto" }}>
      {router.pathname !== "/login" && <Header />}
      <main className={beVeitnam.className}>{props.children}</main>
    </Box>
  );
};

export default Layout;
