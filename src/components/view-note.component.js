import React from "react";
import { Component } from "react";
import { Typography, Box, CircularProgress } from "@mui/material/";
import axios from "axios";

import Navbar from "./navbar.component";

class ViewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [],
      loading: true,
    };
    this.renderNote = this.renderNote.bind(this);
  }
  renderNote() {
    const { classes } = this.props;
    return (
      <Box sx={{ m: "2.5em 10%", whiteSpace: "pre-line" }}>
        <Typography variant="h6">{this.state.note.title}</Typography>
        <Typography>{this.state.note.desc}</Typography>
      </Box>
    );
  }
  componentDidMount() {
    axios
      .get(
        "https://my-scratch-book.herokuapp.com/notes/id" +
          window.location.pathname
      )
      .then((response) => {
        this.setState({
          note: response.data,
          loading: false,
        });
      })
      .catch((error) => {
        console.log("Error while trying to display this note");
      });
  }
  render() {
    return (
      <>
        <Navbar />
        {this.state.loading ? <CircularProgress /> : this.renderNote()}
      </>
    );
  }
}
export default ViewNote;
