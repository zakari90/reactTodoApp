import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import axios from "axios";


const AddTodoForm = ({ title: initialTitle, onClearSelectedTodo }) => {
  const [title, setTitle] = useState(initialTitle || "");
  const [description, setDescription] = useState("");

  const AddTodo = () => {
    if (title && description) {
      axios
        .post("http://localhost:5000/", {
          title: title,
          description: description,
        })
        .then((req) => {
          console.log(req.data);
          onClearSelectedTodo(); // Clear selectedTodo after adding todo
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            value={title}
            onChange={(element) => {
              setTitle(element.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            value={description}
            onChange={(element) => {
              setDescription(element.target.value);
            }}
          />
        </Form.Group>

        <Container className="mt-2 d-flex flex-row justify-content-center ">
          <Button variant="primary" type="submit" onClick={AddTodo}>
            Add todo
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default AddTodoForm;
