import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Typography, Box, CircularProgress } from "@mui/material/";

import Navbar from "./Navbar";

import { connect } from "react-redux";
import { viewNote, deleteNote } from "../store/actions/notesActions";

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
        {this.props.user ? (
          selected.user === this.props.user._id ? (
            <Link
              to="/"
              onClick={() => {
                this.props.deleteNote(selected._id);
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  mt: 5,
                  color: "red",
                  "&:hover": {
                    fontWeight: "bold",
                    cursor: "pointer",
                  },
                }}
              >
                Delete note
              </Typography>
            </Link>
          ) : null
        ) : null}
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

const mapStateToProps = (state) => ({
  notes: state.notes,
  user: state.users.user,
});

export default connect(mapStateToProps, { viewNote, deleteNote })(ViewNote);
