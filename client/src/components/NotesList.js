import React, { Component } from "react";
import { CircularProgress, Typography, Paper, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getNotes, deleteNote } from "../store/actions/notesActions";

class NotesList extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  renderNotes() {
    const { list } = this.props.notes;

    return (
      <>
        <Grid container spacing={3}>
          {list.reverse().map((note) => {
            if (note.private === false) {
              if (note.desc.length > 400) {
                return (
                  <Grid key={note._id} item xs={6}>
                    <Link to={note._id}>
                      <Paper>
                        <Typography variant="h6">{note.title}</Typography>
                        <Typography variant="p">
                          {note.desc.substring(0, 400)}
                          <Typography
                            sx={{
                              fontStyle: "italic",
                              color: "#b0b0b0",
                              display: "inline-block",
                            }}
                          >
                            (...)
                          </Typography>
                        </Typography>
                      </Paper>
                    </Link>
                  </Grid>
                );
              }
              return (
                <Grid key={note._id} item xs={6}>
                  <Paper
                    sx={{
                      "& a ": {
                        textDecoration: "none",
                        color: "inherit",
                        "&:hover": {
                          fontWeight: "bold",
                        },
                      },
                    }}
                  >
                    <Link to={note._id}>
                      <Typography variant="h6">{note.title}</Typography>
                      <Typography variant="p">
                        {note.desc.substring(0, 400)}
                      </Typography>
                    </Link>

                    {this.props.user ? (
                      note.user === this.props.user._id ? (
                        <Typography
                          variant="body2"
                          sx={{
                            zIndex: "1",
                            mt: 5,
                            color: "red",
                            "&:hover": {
                              fontWeight: "bold",
                              cursor: "pointer",
                            },
                          }}
                        >
                          <a onClick={() => this.props.deleteNote(note._id)}>
                            Delete note
                          </a>
                        </Typography>
                      ) : null
                    ) : null}
                  </Paper>
                </Grid>
              );
            } else return null;
          })}
        </Grid>
      </>
    );
  }

  render() {
    return (
      <>
        <Typography variant="h6" align="center" mb="16px">
          Most recent notes:
        </Typography>
        {this.props.notes.loading ? (
          <CircularProgress sx={{ margin: "0 50%" }} />
        ) : (
          this.renderNotes()
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  notes: state.notes,
  user: state.users.user,
});

export default connect(mapStateToProps, { getNotes, deleteNote })(NotesList);
