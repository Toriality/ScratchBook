import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { withStyles } from "@mui/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import { Alert } from "@mui/lab";
import Collapse from "@mui/material/Collapse";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";

const useStyles = (theme) => ({
  text: { minWidth: "100%" },
  formBody: {
    marginBottom: theme.spacing(4),
    flexDirection: "column",
    display: "flex",
  },
  formSubmit: { margin: theme.spacing(3) },
  formSubmitGrid: { alignItems: "center" },
  formLabel: { marginBottom: "0.1rem" },
  successAlert: { alignContent: "flex-end" },
});

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

  onSubmit(e) {
    e.preventDefault();

    const note = {
      title: this.state.title,
      desc: this.state.desc,
      private: this.state.private,
    };

    console.log(note);

    axios
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
        <form onSubmit={this.onSubmit}>
          <Box className={classes.formBody}>
            <TextField
              className={classes.text}
              required
              id="standard-required"
              label="Title"
              placeholder="Insert a title here..."
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
            <TextField
              className={classes.text}
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
          <Box className={classes.formSubmit}>
            <Grid container spacing={0} className={classes.formSubmitGrid}>
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
                  className={classes.formLabel}
                />
              </Grid>
              <Grid item xs={9} className={classes.successAlert}>
                <Collapse in={this.state.open}>
                  <Alert severity="success">
                    <Link to={this.state.noteLink}>{this.state.noteAdded}</Link>
                  </Alert>
                </Collapse>
              </Grid>
            </Grid>
          </Box>
        </form>
      </div>
    );
  }
}

export default withStyles(useStyles)(CreateNote);
