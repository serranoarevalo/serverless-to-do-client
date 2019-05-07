import React from "react";
import { Auth } from "aws-amplify";
import styled from "styled-components";
import { useSetUser } from "../userContext";
import useInput from "../hooks/useInput";

const Container = styled.div``;

const Form = styled.form``;

const Input = styled.input``;

const Button = styled.button``;

export default () => {
  const email = useInput("");
  const password = useInput("");
  const setUser = useSetUser("");
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await Auth.signIn(email.value, password.password);
      setUser({
        isLoggedIn: true
      });
      localStorage.setItem("loggedIn", true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          {...email}
          placeholder="Email"
          name="email"
          type="email"
          required={true}
        />
        <Input
          {...password}
          placeholder="Password"
          name="password"
          type="password"
          required={true}
        />
        <Button>Log In</Button>
      </Form>
    </Container>
  );
};
