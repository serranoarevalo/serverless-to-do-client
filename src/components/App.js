import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "../screens/Home";
import Nav from "./Nav";
import LogIn from "../screens/LogIn";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/log-in" component={LogIn} />
        <Redirect from="*" to="/" />
      </Switch>
      <GlobalStyles />
    </>
  );
}

export default App;
