import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";

import RegisterModal from "./Auth/RegisterModal";

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
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
        <Toolbar
          sx={{
            width: "90%",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" sx={{ flexGrow: "1" }}>
            <Link to="/">ScratchBook</Link>
          </Typography>
          <RegisterModal />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
