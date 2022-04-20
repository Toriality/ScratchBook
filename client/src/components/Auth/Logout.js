import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Button } from "@mui/material";

import { logout } from "../../store/actions/usersActions";

class Logout extends Component {
  render() {
    return (
      <Fragment>
        <Button variant="contained" onClick={this.props.logout}>
          Log out
        </Button>
      </Fragment>
    );
  }
}

export default connect(null, { logout })(Logout);
