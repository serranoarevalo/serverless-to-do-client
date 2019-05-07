import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useUser, useSetUser } from "../userContext";
import { Auth } from "aws-amplify";

const Nav = styled.nav``;

const SLink = styled(Link)``;

export default () => {
  const user = useUser();
  const setUser = useSetUser();
  const handleLogOut = async () => {
    await Auth.signOut();
    setUser({
      isLoggedIn: false
    });
    localStorage.removeItem("loggedIn");
  };
  return (
    <Nav>
      {user.isLoggedIn ? (
        <SLink to="/log-out" onClick={handleLogOut}>
          Log Out
        </SLink>
      ) : (
        <>
          <SLink to="/log-in">Log In</SLink>
          <SLink to="/sign-up">Sign Up</SLink>
        </>
      )}
    </Nav>
  );
};
