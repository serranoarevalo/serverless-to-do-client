import React, { useState } from "react";
import { Auth } from "aws-amplify";
import styled from "styled-components";

const Container = styled.div``;

const Form = styled.form``;

const Input = styled.input``;

const Button = styled.button``;

export default () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const request = await Auth.signIn(form.email, form.password);
      console.log(request);
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
        />
        <Input
          onChange={onChange}
          value={form.password}
          placeholder="Password"
          name="password"
        />
        <Button>Log In</Button>
      </Form>
    </Container>
  );
};
