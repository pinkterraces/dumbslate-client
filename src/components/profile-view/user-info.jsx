import { Row, Col, CardGroup, Card, Button, } from "react-bootstrap";

export const UserInfo = ({ username, email, birthdate }) => {

  return (
    <>
        <Row>
          <Col>
            <CardGroup className="mb-5">
              <Card className="mb-3 text-bg-dark border-0 rounded-0">
              <Card.Title className="ms-3 mt-3"><h2>My Profile</h2></Card.Title>
                <Card.Body>
                  <Card.Text>Username: {username}</Card.Text>
                  <Card.Text>Email: {email}</Card.Text>
                  <Card.Text>Date of Birth: {birthdate}</Card.Text>
                  <Button className="mt-3 rounded-0" variant="light" type="submit">Edit</Button>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
    </>
  );
}