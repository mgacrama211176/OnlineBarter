import React from "react";
import Head from "next/head";
import SignIn from "../../public/images/signIn.jpeg";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";

import {
  Container,
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  styled,
} from "@mui/material";

import { FaMapMarkerAlt } from "react-icons/fa";
import { TbMessageDots } from "react-icons/tb";
import Rating from "../../component/rating";
import { Button } from "../../library/theme";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ProfilePage = () => {
  const { data: session } = useSession();

  return (
    <Container sx={{ marginTop: "50px" }}>
      <Head>
        <title>Profile</title>
      </Head>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 10 }}>
        {/* TRADE INFORMATION CONTAINER */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Image
            loader={myLoader}
            src={SignIn}
            alt="Profile Image"
            width={320}
            height={320}
          />
          <Button variant="contained">Edit Photo</Button>
          <Box>
            <Typography variant="h5">Trade Record</Typography>
            <Typography variant="h6">Total Trade Transaction: 200</Typography>
            <Typography variant="h6">Total Items Listed: 50</Typography>
            <Typography variant="h6">Successful Trades: 150</Typography>
          </Box>
        </Box>

        {/* RIGHT SIDE INFORMATION CONTAINER */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box>
              {session ? (
                <h1>{session.user?.name}</h1>
              ) : (
                <h1>Resha Valentine</h1>
              )}

              <h2>
                <FaMapMarkerAlt />
                Cebu City
              </h2>
            </Box>
          </Box>
          <Rating />
          <Box>
            <Button
              variant="contained"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              Send Message <TbMessageDots />
            </Button>
            <Box>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="right">Username:</TableCell>
                      <TableCell align="left">Emminence_of_Shadow</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="right">Account:</TableCell>
                      <TableCell align="left">Verified</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="right">Member Since:</TableCell>
                      <TableCell align="left">11/11/2011</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="right">Phone Number:</TableCell>
                      <TableCell align="left">0912 223 23123</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="right">Address:</TableCell>
                      <TableCell align="left">admin City</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="right">Email:</TableCell>
                      <TableCell align="left">
                        immortalEmperorXuyin@wuxia.com
                      </TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 5 }}>
              <Button variant="contained">Edit Profile</Button>

              <Button variant="contained">Edit Password</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfilePage;
