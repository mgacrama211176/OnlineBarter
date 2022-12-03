import * as React from "react";
import { list } from "../../../library/media-Drawer";

import Drawer from "@mui/material/Drawer";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <Box>
      <Box
        sx={{
          display: { xs: "inline-block", sm: "inline-block", md: "none" },
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon sx={{ color: "gray" }} />
        </IconButton>
      </Box>

      <Drawer anchor="top" open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </Box>
  );
}
