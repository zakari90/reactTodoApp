import React, { useEffect, useState } from "react";
import { Container, Row, Accordion, Button, Alert } from "react-bootstrap";
import axios from "axios"
import AddTodoForm from "./addTodoForm";

const ScrollableElement = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null); // State to store the selected todo for editing
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (elementId) => {
    axios
      .delete(`http://localhost:5000/${elementId}`)
      .then((response) => {
        console.log(response.data);
        setShowAlert(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (title) => {
    // Set the selectedTodo when the "Edit" button is clicked
    setSelectedTodo({ title });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [showAlert]);

  return (
    <Container className="mt-3">
      <Row>
        <div
          style={{
            maxHeight: "550px",
            overflowY: "auto",
            border: "1px solid #ccc",
          }}
        >
          {todos.map((todo) => (
            <Accordion key={todo._id}>
              <Accordion.Item eventKey={todo._id}>
                <Accordion.Header>
                  {todo.title}
                </Accordion.Header>
                <Accordion.Body>
                  <p>{todo.description}</p>
                  <div className="mt-2 d-flex flex-row justify-content-between">
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(todo._id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="info"
                      onClick={() => handleEdit(todo.title)}
                    >
                      Edit
                    </Button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        </div>
      </Row>

      {/* Alert to show when delete button is clicked */}
      <Alert
        show={showAlert}
        variant="danger"
        onClose={() => setShowAlert(false)}
        dismissible
        className="fixed-top "
        style={{ width: "80%", margin: "0 auto" }}
      >
        <Alert.Heading>Delete Alert</Alert.Heading>
        <p>This is the alert content. You can customize it as needed.</p>
      </Alert>

      {/* Pass selectedTodo to AddTodoForm when it's set */}
      {selectedTodo && (
        <AddTodoForm
          title={selectedTodo.title}
          onClearSelectedTodo={() => setSelectedTodo(null)} // Clear selectedTodo when needed
        />
      )}
    </Container>
  );
};

export default ScrollableElement;
