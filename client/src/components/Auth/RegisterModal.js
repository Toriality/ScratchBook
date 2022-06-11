import React, { Component } from "react";
import { Button, Modal, Box, Typography, TextField } from "@mui/material";
import { connect } from "react-redux";
import { register } from "../../store/actions/usersActions";

const format = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

class RegisterModal extends Component {
  state = {
    modal: false,
    username: "",
    invalid: false,
    password: null,
    msg: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { isAuthenticated } = this.props;
    if (prevState.username !== this.state.username) {
      this.setState({
        invalid: this.state.username.match(format),
      });
    }
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    // Create user object
    const newUser = {
      username,
      password,
    };

    // Attempt to register
    this.props.register(newUser);
  };

  render() {
    return (
      <>
        <Button variant="contained" onClick={this.toggle}>
          Register
        </Button>
        <Modal
          open={this.state.modal}
          onClose={this.toggle}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 500,
              bgcolor: "background.paper",
              border: "2px solid black",
              boxShadow: 24,
              p: 5,
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              mb={2}
            >
              Register a new user
            </Typography>
            <form onSubmit={this.onSubmit}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  "& .MuiTextField-root": {
                    mb: 2,
                  },
                }}
              >
                <TextField
                  error={this.state.invalid}
                  helperText={this.state.invalid ? "Invalid username" : null}
                  required
                  name="username"
                  label="Username"
                  placeholder="Create a username"
                  onChange={this.onChange}
                />
                <TextField
                  required
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Enter a password"
                  onChange={this.onChange}
                />
                <Button variant="contained" type="submit">
                  Register
                </Button>
              </Box>
            </form>
            <Typography variant="body2" sx={{ mt: 2 }}>
              This will sign you up with a new user. If you already have an
              account log in here{/*TODO: Login link*/}
            </Typography>
          </Box>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated,
});

export default connect(mapStateToProps, { register })(RegisterModal);
