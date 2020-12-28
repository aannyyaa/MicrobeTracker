import React from 'react';
import { Button, Menu, MenuItem, ListItemIcon} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Home, Map, Room, LocationCity } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #000000',
  },
})((props) => (
  <Menu
    elevation={0}
    git
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'top',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

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
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
      >
        Menu
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleClose}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <Link to="/">
            <p>Home</p>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
        <ListItemIcon>
            <Map />
          </ListItemIcon>
          <Link to="/map">
            <p>Map</p>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
        <ListItemIcon>
            <Room />
          </ListItemIcon>
          <Link to="/graph-location">
            <p>Track a Location</p>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
        <ListItemIcon>
            <LocationCity />
          </ListItemIcon>
          <Link to="/graph-area">
            <p>Track a Borough</p>
          </Link>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
