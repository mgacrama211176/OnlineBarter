import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";

import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CreateIcon from "@mui/icons-material/Create";
import Box from "@mui/material/Box";

export const list = () => (
  <Box sx={{ width: "100%" }}>
    <List
      sx={{
        display: "flex",
        margin: "auto",
        width: "100%",
      }}
    >
      <ListItem
        sx={{
          "&:hover": {
            bgcolor: "red",
          },
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            margin: "auto",
          }}
        >
          <QuestionMarkIcon sx={{ fontSize: "25px" }} />
          What's New?
        </Link>
      </ListItem>
      <ListItem
        sx={{
          "&:hover": {
            bgcolor: "red",
          },
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            margin: "auto",
          }}
        >
          <CreateIcon sx={{ fontSize: "25px" }} />
          List Item
        </Link>
      </ListItem>
    </List>
  </Box>
);
