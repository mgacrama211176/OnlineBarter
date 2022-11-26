import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import barter from "../public/images/barter.jpg";
import { Bellefair } from "@next/font/google";
import Link from "next/link";

const belleFair = Bellefair({
  weight: "400",
});

const Logo = () => {
  return (
    <Link href="/">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Image
          alt="logo"
          src={barter}
          placeholder="blur"
          width={80}
          height={80}
        />

        <Typography
          className={belleFair.className}
          variant="h1"
          sx={{ fontSize: "40px", color: "#2EA8D1" }}
        >
          Pamatigayon
        </Typography>
      </Box>
    </Link>
  );
};
export default Logo;
