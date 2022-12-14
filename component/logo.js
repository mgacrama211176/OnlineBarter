import { Box, Typography, Button, IconButton } from "@mui/material";
import Image from "next/image";
import barter from "../public/images/barter.jpg";
import { Bellefair } from "@next/font/google";

import Link from "next/link";

import TemporaryDrawer from "./header/drawer/drawer";

const BelleFair = Bellefair({
  weight: "400",
});

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "inline-block",
                lg: "inline-block",
              },
            }}
          >
            <Image
              alt="logo"
              src={barter}
              placeholder="blur"
              width={80}
              height={80}
            />
          </Box>

          <Typography
            className={BelleFair.className}
            variant="h1"
            sx={{
              fontSize: "40px",
              color: "#2EA8D1",
              display: { xs: "none", md: "none", lg: "inline-block" },
            }}
          >
            Pamatigayon
          </Typography>
        </Box>
      </Link>

      <Box
        sx={{
          display: { xs: "inline-block", sm: "inline-block", md: "none" },
        }}
      >
        <TemporaryDrawer />
      </Box>
    </>
  );
};
export default Logo;
