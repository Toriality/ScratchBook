import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Grid,
  Box,
  Collapse,
  Checkbox,
  FormControlLabel,
  Button,
  TextField,
} from "@mui/material";
import { Alert } from "@mui/lab";

import { connect } from "react-redux";
import { postNote } from "../store/actions/notesActions";

class PostNote extends Component {
  state = {
    title: undefined,
    desc: undefined,
    isPrivate: false,
  };

  onChange = (e) => {
    if (e.target.name === "isPrivate") {
      this.setState({
        isPrivate: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { title, desc, isPrivate } = this.state;

    const note = { title, desc, private: isPrivate };

    this.props.postNote(note);
  };

  render() {
    const { user_note } = this.props.notes;

    return (
      <div className="App">
        {/* Start of the form */}
        <form onSubmit={this.onSubmit}>
          {/* Form body */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: 4,
            }}
          >
            {/* 'Title' field */}
            <TextField
              required
              id="standard-required"
              name="title"
              label="Title"
              placeholder="Insert a title here..."
              onChange={this.onChange}
            />
            {/* 'Description' label */}
            <TextField
              required
              id="standard-multiline-static"
              name="desc"
              label="Description"
              multiline
              rows={26}
              placeholder="Insert the text here..."
              onChange={this.onChange}
            />
          </Box>

          {/* Submit button and options */}
          <Grid container alignItems="center" marginBottom={3}>
            <Grid item>
              <Button variant="contained" type="submit">
                Create note
              </Button>
            </Grid>
            <Grid item>
              <FormControlLabel
                onChange={this.onChange}
                control={<Checkbox color="primary" />}
                name="isPrivate"
                label="Private"
                labelPlacement="start"
                sx={{ marginBottom: "0.1rem" }}
              />
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ notes: state.notes });

export default connect(mapStateToProps, { postNote })(PostNote);
