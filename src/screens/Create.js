import React, { useState } from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { API } from "aws-amplify";

const Container = styled.div``;

const Form = styled.form``;

const Input = styled.textarea``;

const Button = styled.button``;

export default ({ history }) => {
  const content = useInput("I really want to eat food");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    if (content.value === "" || content.value.length < 10) {
      return;
    } else {
      setLoading(true);
      try {
        await API.post("notes", "/notes", {
          body: {
            content: content.value
          }
        });
        setLoading(false);
        history.push("/");
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    }
  };
  const handleFileChange = e => {
    const {
      target: { files }
    } = e;
    const file = files[0];
    if (file.size > 5000000) {
      return;
    }
    setFile(file);
  };

  return (
    <Container>
      <h1>Create Note</h1>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="file">File</label>
          <input id="file" type="file" onChange={handleFileChange} />
        </div>
        <div>
          <Input {...content} placeholder="Note" required={true} />
        </div>
        <Button>Add Note</Button>
        {loading && "Loading..."}
      </Form>
    </Container>
  );
};
