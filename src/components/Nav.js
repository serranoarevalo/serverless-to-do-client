import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav``;

const SLink = styled(Link)``;

export default () => (
  <Nav>
    <SLink to="/log-in">Log In</SLink>
    <SLink to="/sign-up">Sign Up</SLink>
  </Nav>
);
