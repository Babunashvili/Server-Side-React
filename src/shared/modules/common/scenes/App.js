import React, { Component } from "react";
import { Route } from "react-router-dom";
import routes from "../../../routes";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div>
        {routes.map((route, i) => <Route key={i} {...route} />)}
      </div>
    );
  }
}

export default App;
