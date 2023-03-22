import { Row, Col, CardGroup, Card } from "react-bootstrap";

export const UserInfo = ({ user }) => {

  return (
    <>
      <Row>
        <Col>
          <CardGroup className="mb-5">
            <Card className="text-bg-dark border-0 rounded-0">
              <Card.Title className="ms-3 mt-3"><h2>My Profile</h2></Card.Title>
              <Card.Body>
                <Card.Text>Username: {user.Username}</Card.Text>
                <Card.Text>Email: {user.Email}</Card.Text>
                <Card.Text>Date of Birth: {user.Birthdate?.substring(0, 10)}</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </>
  );
}