import { useState } from "react";

import { Container, Row, Col, CardGroup, Card, Form, Button, } from "react-bootstrap";

export const UpdateUserInfo = ({ user }) => {

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

    fetch(`https://dumbslate.herokuapp.com/users/${user.Username}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if (res.ok) {
        console.log("dataRes: ", res.json());
        alert("User updated!");
        
      } else {
        alert("User could not be updated");
      }
    })
    .then(() => {
      window.location.reload();
    });
  };

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

                  <Form.Group>
                    <Form.Label>Password: </Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength="8"
                      className="rounded-0"
                      placeholder="Password"
                    >
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>New Email: </Form.Label>
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
                    <Form.Label>New Birthdate: </Form.Label>
                    <Form.Control
                      type="date"
                      value={birthdate.substring(0, 10)}
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
    </>
  );
}