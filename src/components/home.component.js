import React from "react";
import Navbar from "../components/navbar.component";
import CreateNote from "../components/create-note.component";
import NotesList from "./NotesList";
import { Component } from "react";
import Box from "@mui/material/Box";
import { withStyles } from "@mui/styles";

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Navbar />
        <Box sx={{ m: "2.5em 10%" }}>
          <CreateNote />
          <NotesList />
        </Box>
      </>
    );
  }
}

export default Home;
