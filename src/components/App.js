import React from "react";
import { Route, Switch } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "../screens/Home";
import Nav from "./Nav";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <GlobalStyles />
    </>
  );
}

export default App;
