import { useState } from "react";

import { Container, Row, Col, CardGroup, Card, Form, Button, } from "react-bootstrap";

export const SearchBar = ({ user }) => {

  const storedToken = localStorage.getItem("token");
  const [token] = useState(storedToken ? storedToken : null);

  const [username, setUserName] = useState(user.Username);
  const [password, setPassword] = useState(user.Password);
  const [email, setEmail] = useState(user.Email);
  const [birthdate, setBirthdate] = useState(user.Birthdate);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthdate: birthdate
    };

  };

  console.log("username: ", username);

  return (
    <>
      <Row>
        <Col>
          <CardGroup className="mb-5">
            <Card className="mb-3 text-bg-dark border-0 rounded-0">
              <Card.Title className="ms-3 mt-3"><h2>Update Profile</h2></Card.Title>
              <Card.Body>
                <Form onSubmit={handleSubmit} >

                  <Form.Group>
                    <Form.Label>New Username: </Form.Label>
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

     

                  <Button className="mt-3 rounded-0" variant="light" type="submit">Submit</Button>

                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </>
  );
}