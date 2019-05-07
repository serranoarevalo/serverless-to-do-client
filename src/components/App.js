import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "../screens/Home";
import Nav from "./Nav";
import LogIn from "../screens/LogIn";
import { useUser } from "../userContext";
import SignUp from "../screens/SignUp";

function App() {
  const user = useUser();
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        {!user.isLoggedIn && <Route path="/log-in" component={LogIn} />}
        {!user.isLoggedIn && <Route path="/sign-up" component={SignUp} />}
        <Redirect from="*" to="/" />
      </Switch>
      <GlobalStyles />
    </>
  );
}

export default App;
