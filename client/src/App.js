import React, { Component } from "react";

// Styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import theme from "./styles/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Router
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import ViewNote from "./components/ViewNote";
import Home from "./components/Home";

// Redux
import { Provider } from "react-redux";
import store from "./store/store";
import { loadUser } from "./store/actions/usersActions";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/:id" exact component={ViewNote} />
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
