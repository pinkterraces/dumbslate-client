import React from "react";
import { useState } from "react";

import {Container, Row, Col, CardGroup, Card, Form, Button, } from "react-bootstrap";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password
    };

    fetch("https://dumbslate.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    }).then((response) => response.json())
      .then((data) => {
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user)); //key value pair
          localStorage.setItem("token", data.token);
          onLoggedIn(data.user, data.token);
        } else {
          alert("Login Failed");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };

  return (
    <>
      <Container /*style={{border: "1px solid black"}}*/>
        <Row>
          <Col>
            <h1 className="mt-3 mb-3" >Welcome!</h1>
            <CardGroup className="">
              <Card className="mb-3 text-bg-dark border-0 rounded-0">
                <Card.Title className="ms-3 mt-3"><h2>Login</h2></Card.Title>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>

                    <Form.Group>
                      <Form.Label>Username: </Form.Label>
                      <Form.Control
                        type="text"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                        minLength="5"
                        className="rounded-0"
                      >
                      </Form.Control>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Password: </Form.Label>
                      <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength="8"
                        className="rounded-0"
                      >
                      </Form.Control>
                    </Form.Group>

                    <Button className="mt-3 rounded-0" variant="light" type="submit">Submit</Button>

                  </Form>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};
