import React, { Component } from "react";

// Styles
import "./App.css";
import theme from "./styles/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<ViewNote />} />
          </Routes>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
