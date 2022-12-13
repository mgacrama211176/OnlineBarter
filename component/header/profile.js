import * as React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

//Components
import { profileList } from "../../library/media-profile";

//MUI
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Button, Typography } from "@mui/material";
import Image from "next/image";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { data: session } = useSession();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    signOut();
  };

  return (
    <React.Fragment>
      <Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {session.user?.image ? (
              <Image
                src={session.user.image}
                alt={session.user.name}
                width={40}
                height={40}
                style={{ borderRadius: "100%" }}
              />
            ) : (
              <Avatar sx={{ width: 30, height: 30 }}>
                {session.user?.name?.substring(0, 1)}
              </Avatar>
            )}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {profileList.map((list, index) =>
          list.title !== "Logout" ? (
            <Link href={`/${list.link}`} key={index}>
              <MenuItem>
                <ListItemIcon>
                  <list.icon fontSize="small" />
                </ListItemIcon>
                {list.title}
              </MenuItem>
            </Link>
          ) : (
            <MenuItem onClick={logoutHandler} key={index}>
              <ListItemIcon>
                <list.icon fontSize="small" />
              </ListItemIcon>
              {list.title}
            </MenuItem>
          )
        )}
      </Menu>
    </React.Fragment>
  );
}
