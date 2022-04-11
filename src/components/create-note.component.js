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

class CreateNote extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onChangePrivate = this.onChangePrivate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      desc: "",
      private: false,
      notes: [],
      noteAdded: "",
      noteLink: "",
      open: false,
    };
  }

  setOpen(bool) {
    this.setState({
      open: bool,
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDesc(e) {
    this.setState({
      desc: e.target.value,
    });
  }

  onChangePrivate(e) {
    this.setState({
      private: e.target.checked,
    });
  }

  onChangeNoteAdded(str) {
    this.setState({
      noteAdded: str,
    });
  }

  onChangeNoteLink(str) {
    this.setState({
      noteLink: str,
    });
  }

  async onSubmit(e) {
    e.preventDefault();

    const note = {
      title: this.state.title,
      desc: this.state.desc,
      private: this.state.private,
    };

    console.log(note);

    await axios
      .post("https://my-scratch-book.herokuapp.com/notes", note)
      .then((res) => {
        console.log(res.data);
      });

    this.setOpen(true);

    axios
      .get("https://my-scratch-book.herokuapp.com/notes/find_last")
      .then((res) => {
        this.onChangeNoteAdded("Note added with the ID of " + res.data[0]._id);
        this.onChangeNoteLink(res.data[0]._id);
      });
  }

  render() {
    const { classes } = this.props;

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
              label="Title"
              placeholder="Insert a title here..."
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
            {/* 'Description' label */}
            <TextField
              required
              id="standard-multiline-static"
              label="Description"
              multiline
              rows={26}
              placeholder="Insert the text here..."
              value={this.state.desc}
              onChange={this.onChangeDesc}
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
                value={this.state.private}
                onChange={this.onChangePrivate}
                control={<Checkbox color="primary" />}
                label="Private"
                labelPlacement="start"
                sx={{ marginBottom: "0.1rem" }}
              />
            </Grid>
            {/* 'Post added with the ID of' alert */}
            <Grid item xs={9} marginLeft={3}>
              <Collapse in={this.state.open}>
                <Alert
                  severity="success"
                  sx={{ minHeight: 0, "&:hover": { boxShadow: "none" } }}
                >
                  <Link to={this.state.noteLink}>{this.state.noteAdded}</Link>
                </Alert>
              </Collapse>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default CreateNote;
