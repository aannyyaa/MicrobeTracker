import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
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
          <Link to="/">
            <h2>Home</h2>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="graph-location">
            <h2>Graph by Location</h2>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="graph-area">
            <h2>Graph for an Area</h2>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
