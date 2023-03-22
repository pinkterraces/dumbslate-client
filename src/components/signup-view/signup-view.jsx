import { useState } from "react";

import { Container, Row, Col, CardGroup, Card, Form, Button, } from "react-bootstrap";

export const SignupView = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthdate: birthdate // needs to match in the backend
    };

    console.log("data: ", data);

    fetch("https://dumbslate.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    }).then((res) => {
      if (res.ok) {
        console.log("dataRes: ", res.json());
        alert("Signed Up!");
        //window.location.reload();
      } else {
        alert("Signup Failed");
      }
    });
  };

  return (

    <>
      <Container>
        <Row>
          <Col>
            <CardGroup className="mb-5">
              <Card className="mb-3 text-bg-dark border-0 rounded-0">
                <Card.Title className="ms-3 mt-3"><h2>Sign Up</h2></Card.Title>
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

                    <Form.Group>
                      <Form.Label>Email: </Form.Label>
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="rounded-0"
                      >
                      </Form.Control>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Birthdate: </Form.Label>
                      <Form.Control
                        type="date"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
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
