import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";

import LoginModal from "./Auth/LoginModal";
import Logout from "./Auth/Logout";
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

  authLinks = () => {
    return <Logout />;
  };

  guestLinks = () => {
    return (
      <>
        <RegisterModal />
        <LoginModal />
      </>
    );
  };

  render() {
    const { isAuthenticated } = this.props.users;

    const authLinks = <Logout />;

    const guestLinks = (
      <>
        <RegisterModal />
        <LoginModal />
      </>
    );
    console.log(isAuthenticated);

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
          {isAuthenticated ? authLinks : guestLinks}
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, null)(Navbar);
