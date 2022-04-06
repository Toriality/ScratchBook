import React from "react";
import Navbar from "../components/navbar.component";
import CreateNote from "../components/create-note.component";
import NotesList from "../components/notes-list.component";
import { Component } from "react";
import Box from "@mui/material/Box";
import { withStyles } from "@mui/styles";

const useStyles = (theme) => ({
  root: {
    margin: theme.spacing(3) + " 10%",
  },
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Navbar />
        <Box className={classes.root}>
          <CreateNote />
          <NotesList />
        </Box>
      </>
    );
  }
}

export default withStyles(useStyles)(Home);
