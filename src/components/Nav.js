import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useUser, useSetUser } from "../userContext";
import { Auth } from "aws-amplify";

const Nav = styled.ul``;

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
      <li>
        <SLink to="/">Home</SLink>
      </li>
      {user.isLoggedIn ? (
        <>
          <li>
            <SLink to="/create">Create</SLink>
          </li>
          <li>
            <SLink to="/log-out" onClick={handleLogOut}>
              Log Out
            </SLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <SLink to="/log-in">Log In</SLink>
          </li>
          <li>
            <SLink to="/sign-up">Sign Up</SLink>
          </li>
        </>
      )}
    </Nav>
  );
};
