import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";

function Header() {
  const [state, setState] = React.useState({
    top: false,
  });
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, top: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          ["Search", ""],
          ["Favorites", "favorites"],
        ].map((text, index) => (
          <ListItem key={text[0]} disablePadding>
            <Link to={text[1]} style={{ textDecoration: 'none', color: "black"}}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <SearchIcon /> : <FavoriteIcon />}
                </ListItemIcon>
                <ListItemText primary={text[0]} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(!state.top)}
            >
              <MenuIcon />
              <Drawer
                anchor={"top"}
                open={state["top"]}
                onClose={() => {
                  toggleDrawer(!state.top);
                }}
              >
                {list("top")}
              </Drawer>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Current page
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <h2>WELCOME TO GIFSTAGRAM</h2>
    </>
  );
}

export default Header;
