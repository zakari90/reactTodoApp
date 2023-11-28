import React from "react";
import AddTodoForm from "./components/addTodoForm";
import ScrollableElement from "./components/todoPlaceHolder";
import { Col, Container, Row } from "react-bootstrap";

function App() {

  
  return (
    <Container className="mt-5">
    <Row className="justify-content-center">
      <Col xs={12} sm={10} md={8} lg={4}>
        <AddTodoForm/>
        <ScrollableElement/>
      </Col>
    </Row>
   </Container>

  );
}

export default App;
