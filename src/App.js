import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ViewNote from "./components/view-note.component";
import Home from "./components/home.component";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./styles/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/:id" exact component={ViewNote} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
