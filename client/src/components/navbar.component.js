import React from "react";
import { withStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Component } from "react";
import { Link } from "react-router-dom";

const useStyles = (theme) => ({
  menuButton: {
    marginRight: theme.spacing(3),
  },
  appbar: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0 ,0.125)",
    color: "black",
  },
  title: {
    color: "rgba(0,0,0  , 0.35)",
    flexGrow: 1,
  },
});

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            className={classes.menuButton}
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">ScratchBook</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(useStyles)(Navbar);
