import React from "react";
import { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Box, CircularProgress } from "@material-ui/core/";
import axios from "axios";
import Navbar from "./navbar.component";

const useStyles = (theme) => ({
  root: {
    margin: theme.spacing(3),
    whiteSpace: "pre-line",
  },
});

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
      <Box className={classes.root}>
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
        console.log(error);
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

export default withStyles(useStyles)(ViewNote);
