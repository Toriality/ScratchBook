import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const useStyles = (theme) => ({
  paper: {
    minHeight: "24ch",
    padding: theme.spacing(2),
  },
  italic: {
    fontStyle: "italic",
    color: "#b0b0b0",
    display: "inline-block",
  },
});

class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = { notes: [], loading: true };
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
                            {note.desc.substring(0, 400)}{" "}
                            <Typography className={classes.italic}>
                              (...)
                            </Typography>
                          </Typography>
                          <Typography variant="p">{note.private}</Typography>
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
                        <Typography variant="p">{note.private}</Typography>
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
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <Typography variant="h6">Most recent notes:</Typography>
        {this.state.loading ? <CircularProgress /> : renderNotes()}
      </>
    );
  }
}

export default withStyles(useStyles)(NotesList);
