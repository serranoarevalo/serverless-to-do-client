import React, { useState } from "react";
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
  const confirmPassword = useInput("");
  const confirmationCode = useInput("");
  const [confirming, setConfirming] = useState(false);
  const setUser = useSetUser();
  const handleSignUp = async e => {
    e.preventDefault();
    if (password.value !== confirmPassword.value) {
      return;
    }
    try {
      await Auth.signUp({
        username: email.value,
        password: password.value
      });
      localStorage.setItem("loggedIn", true);
      setConfirming(true);
    } catch (e) {
      console.log(e);
    }
  };

  const handleConfirm = async e => {
    e.preventDefault();
    try {
      await Auth.confirmSignUp(email.value, confirmationCode.value);
      await Auth.signIn(email.value, password.value);
      setUser({
        isLoggedIn: true
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      {confirming ? (
        <Form onSubmit={handleConfirm}>
          <Input
            {...confirmationCode}
            placeholder="Confirmation Code"
            name="email"
            type="text"
            required={true}
          />
          <Button>Confirm Email</Button>
        </Form>
      ) : (
        <Form onSubmit={handleSignUp}>
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
          <Input
            {...confirmPassword}
            placeholder="Confirm Password"
            name="password"
            type="password"
            required={true}
          />
          <Button>Log In</Button>
        </Form>
      )}
    </Container>
  );
};
