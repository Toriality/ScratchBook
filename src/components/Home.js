import React from "react";
import Navbar from "./Navbar";
import CreateNote from "./PostNote";
import NotesList from "./NotesList";
import { Component } from "react";
import Box from "@mui/material/Box";

class Home extends Component {
  render() {
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
