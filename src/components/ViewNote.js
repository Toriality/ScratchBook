import React from "react";
import { Component } from "react";
import { Typography, Box, CircularProgress } from "@mui/material/";

import Navbar from "./Navbar";

import { connect } from "react-redux";
import { viewNote } from "../store/actions/notesActions";

class ViewNote extends Component {
  componentDidMount() {
    const id = window.location.pathname.slice(1);
    this.props.viewNote(id);
  }

  renderNote() {
    const { selected } = this.props.notes;
    return (
      <Box sx={{ m: "2.5em 10%", whiteSpace: "pre-line" }}>
        <Typography variant="h6">{selected.title}</Typography>
        <Typography>{selected.desc}</Typography>
      </Box>
    );
  }

  render() {
    const { notes } = this.props;
    return (
      <>
        <Navbar />
        {notes.loading ? <CircularProgress /> : this.renderNote()}
      </>
    );
  }
}

const mapStateToProps = (state) => ({ notes: state.notes });

export default connect(mapStateToProps, { viewNote })(ViewNote);
