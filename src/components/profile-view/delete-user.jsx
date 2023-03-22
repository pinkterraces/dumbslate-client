import { useState } from "react";

import { Row, Col, CardGroup, Card, Form, Button, } from "react-bootstrap";

export const DeleteUser = ({ user }) => {

  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(storedToken ? storedToken : null);

/*   const [username, setUserName] = useState(user.Username);
  const [password, setPassword] = useState(user.Password);
  const [email, setEmail] = useState(user.Email);
  const [birthdate, setBirthdate] = useState(user.Birthdate); */

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://dumbslate.herokuapp.com/users/${user.Username}`, {
      method: "DELETE",
      //body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if (res.ok) {
        console.log("dataRes: ", res.json());
        alert("User Deleted!");
        setToken(null)
        localStorage.clear();
      } else {
        alert("User could not be found");
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
              <Card.Title className="ms-3 mt-3"><h2>Delete Account</h2></Card.Title>
              <Card.Body>
                <Form onSubmit={handleSubmit} >

                  <Button className="mt-3 rounded-0" variant="light" type="submit">Delete</Button>

                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </>
  );
}