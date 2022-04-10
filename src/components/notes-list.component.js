import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import { CircularProgress, Typography, Paper, Grid } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = (theme) => ({
  paper: {
    minHeight: "24ch",
    padding: theme.spacing(2),
  },
});

class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = { notes: [], loading: true };
    this.renderNotes = this.renderNotes.bind(this);
  }

  renderNotes() {
    const { classes } = this.props;
    return (
      <>
        <Grid container spacing={3}>
          {this.state.notes
            .reverse()
            .slice(0, 21)
            .map((note) => {
              if (note.private === false) {
                if (note.desc.length > 400) {
                  return (
                    <Grid item xs={6}>
                      <Link to={note._id}>
                        <Paper className={classes.paper}>
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
                  <Grid item xs={6}>
                    <Link to={note._id}>
                      <Paper className={classes.paper}>
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

  componentDidMount() {
    axios
      .get("https://my-scratch-book.herokuapp.com/notes/")
      .then((response) => {
        this.setState({
          notes: response.data,
          loading: false,
        });
      })
      .catch((error) => {
        console.log("Error while connecting to the database");
      });
  }

  render() {
    return (
      <>
        <Typography variant="h6">Most recent notes:</Typography>
        {this.state.loading ? <CircularProgress /> : this.renderNotes()}
      </>
    );
  }
}

export default withStyles(useStyles)(NotesList);
