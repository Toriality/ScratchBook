import React from "react";
import Navbar from "./Navbar";
import CreateNote from "./PostNote";
import NotesList from "./NotesList";
import { Component } from "react";
import Box from "@mui/material/Box";

import Dashboard from "./Dashboard";
import WelcomePage from "./WelcomePage";
import { connect } from "react-redux";

function Home(props) {
  const { isAuthenticated } = props.users;
  return <>{isAuthenticated ? <Dashboard /> : <WelcomePage />}</>;
}

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, null)(Home);
