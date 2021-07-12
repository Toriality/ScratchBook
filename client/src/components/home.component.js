import React from "react";
import Navbar from "../components/navbar.component";
import CreateNote from "../components/create-note.component";
import NotesList from "../components/notes-list.component";
import { Component } from "react";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  root: {
    margin: theme.spacing(3),
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
