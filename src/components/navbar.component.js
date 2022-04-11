import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      /* Since the MuiAppBar is also a MuiPaper, it is necessary to make adjustments to the sx */
      <AppBar
        position="static"
        sx={{
          alignItems: "center",
          minHeight: "100%",
          boxShadow: "none",
          padding: 0,
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" sx={{ flexGrow: "1" }}>
            <Link to="/">ScratchBook</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
