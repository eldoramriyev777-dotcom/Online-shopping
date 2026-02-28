import React, { useState } from "react";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Typography,
  ListItemIcon
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

const ProfileMenu = ({ user, onLogout, onProfile }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    handleClose();
    onProfile();
  };

  const handleLogout = () => {
    handleClose();
    onLogout();
  };

  return (
    <Box>
      <IconButton onClick={handleClick} size="small">
        <Avatar
          sx={{ width: 40}}
          src={user?.avatar}
        >
          {user?.firstName?.charAt(0) + user?.lastName?.charAt(0)}
        </Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography fontWeight={600}>
            {user?.firstName + " " + user?.lastName}
          </Typography>
          <Typography variant="body2" color="blue">
            {user?.email}
          </Typography>
        </Box>

        <Divider />

        <MenuItem onClick={handleProfile}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          {user?.role}
        </MenuItem>

        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ProfileMenu;
