import { Component } from "react";
import { connect } from "react-redux";
import { Box, Modal, Button, Typography, TextField } from "@mui/material";

import { login } from "../../store/actions/usersActions";

class LoginModal extends Component {
  state = {
    modal: false,
    username: "",
    password: "",
    msg: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const { isAuthenticated } = this.props;
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

    const user = {
      username,
      password,
    };

    // Attempt to log-in
    this.props.login(user);
  };

  render() {
    return (
      <>
        <Button variant="contained" onClick={this.toggle}>
          Log In
        </Button>
        <Modal open={this.state.modal} onClose={this.toggle}>
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
              Log in
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
                  required
                  name="username"
                  label="Username"
                  placeholder="Your username"
                  onChange={this.onChange}
                />
                <TextField
                  required
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Your password"
                  onChange={this.onChange}
                />
                <Button variant="contained" type="submit">
                  Log in
                </Button>
              </Box>
            </form>
          </Box>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginModal);
