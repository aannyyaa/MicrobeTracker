import React, {createRef} from 'react';
import { Button, Menu, MenuItem, ListItemIcon } from '@material-ui/core';
import { Home, Map, Room, LocationCity } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function NavMenu() {
  const [anchor, setAnchor] = React.useState(null);

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };


  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
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
    </div>
  );
}
