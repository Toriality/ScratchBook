import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ViewNote from "./components/view-note.component";
import Home from "./components/home.component";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background: linear-gradient(  127deg,  rgba(255, 248, 185, 0.8),  rgba(0, 255, 0, 0) 70.71%),linear-gradient(336deg, rgba(255, 185, 120, 0.8), rgba(0, 0, 255, 0) 70.71%) !important;
        }
      `,
    },
  },
  palette: {
    primary: {
      main: "rgb(255, 200, 105)",
    },
  },
  typography: {},
});

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
