import React from 'react';
import { Button, Menu, MenuItem, ListItemIcon } from '@material-ui/core';
import { Home, Map, Room, LocationCity } from '@material-ui/icons';
import { unstable_createMuiStrictModeTheme, ThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const theme = unstable_createMuiStrictModeTheme();

export default function NavMenu() {
  const [anchorEl, setAnchor] = React.useState(null);

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <Link to="/">
              <p>Home</p>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Map />
            </ListItemIcon>
            <Link to="/map">
              <p>Map</p>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Room />
            </ListItemIcon>
            <Link to="/graph-location">
              <p>Track a Location</p>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LocationCity />
            </ListItemIcon>
            <Link to="/graph-area">
              <p>Track a Borough</p>
            </Link>
          </MenuItem>
        </Menu>
      </ThemeProvider>
    </React.StrictMode>
  );
}
