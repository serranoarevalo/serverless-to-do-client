import React, { useState } from "react";
import { Auth } from "aws-amplify";
import styled from "styled-components";
import { useSetUser } from "../userContext";

const Container = styled.div``;

const Form = styled.form``;

const Input = styled.input``;

const Button = styled.button``;

export default () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const setUser = useSetUser();
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await Auth.signIn(form.email, form.password);
      setUser({
        isLoggedIn: true
      });
      localStorage.setItem("loggedIn", true);
    } catch (e) {
      console.log(e);
    }
  };
  const onChange = e => {
    const {
      target: { value, name }
    } = e;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  console.log(form);
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={onChange}
          value={form.email}
          placeholder="Email"
          name="email"
          type="email"
        />
        <Input
          onChange={onChange}
          value={form.password}
          placeholder="Password"
          name="password"
          type="password"
        />
        <Button>Log In</Button>
      </Form>
    </Container>
  );
};
