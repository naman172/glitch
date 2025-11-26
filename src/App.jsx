import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Utilities
import "./App.css";

//Pages
import Landing from "./pages/landing";

class App extends Component {
  render() {
    return (
      <div style={{ height: "inherit" }}>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Landing slide={0} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
