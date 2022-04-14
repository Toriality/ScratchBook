import React, { Component } from "react";
import { CircularProgress, Typography, Paper, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getNotes } from "../store/actions/notesActions";

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
                  <Link to={note._id}>
                    <Paper>
                      <Typography variant="h6">{note.title}</Typography>
                      <Typography variant="p">
                        {note.desc.substring(0, 400)}
                      </Typography>
                    </Paper>
                  </Link>
                </Grid>
              );
            } else return null;
          })}
        </Grid>
      </>
    );
  }

  render() {
    console.log(this.props.notes);
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

const mapStateToProps = (state) => ({ notes: state.notes });

export default connect(mapStateToProps, { getNotes })(NotesList);
