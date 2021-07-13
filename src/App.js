import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ViewNote from "./components/view-note.component";
import Home from "./components/home.component";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/:id" exact component={ViewNote} />
      </Router>
    </>
  );
}

export default App;
