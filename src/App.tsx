import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

const App: React.FC<{}> = () => (
  <Router>
    <Header>
      <h1>Ezra Brooks</h1>
    </Header>
    <Switch>
      <Route exact path="/">
        <Portfolio />
      </Route>
      <Route path="/resume">
        <Resume />
      </Route>
    </Switch>
  </Router>
);

export default App;
