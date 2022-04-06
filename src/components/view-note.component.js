import React from "react";
import { Component } from "react";
import { withStyles } from "@mui/styles";
import { Typography, Box } from "@mui/material/";
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
    };
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
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Navbar />
        <Box className={classes.root}>
          <Typography variant="h6">{this.state.note.title}</Typography>
          <Typography>{this.state.note.desc}</Typography>
        </Box>
      </>
    );
  }
}

export default withStyles(useStyles)(ViewNote);
