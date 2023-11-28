import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form fields
    setUsername('');
    setPassword('');
  };

  return (
    
    <Container className="mt-5">
      <Row className="justify-content-center">
      <Col xs={12} sm={10} md={6} lg={4}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <Button className='mt-2' variant="primary" type="submit">
          Login
        </Button>
        <Link to="/signup">Don't have an account? Sign up here.</Link>
      </Form>
      </Col>
      </Row>
    </Container>
  );
};


  export default Login;