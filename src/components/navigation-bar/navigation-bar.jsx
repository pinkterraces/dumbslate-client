import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar bg="secondary" text="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Dumbslate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user && (
              <>
                <Nav.Link as={Link} to="/">All Movies</Nav.Link>
                <Nav.Link
                onClick={onLoggedOut}
                >Log out
                </Nav.Link>
              </>
            )}
            {!user && (
              <>
                <Nav.Link as={Link} to="/signup">Sign up</Nav.Link>
                <Nav.Link as={Link} to="/login">Log in</Nav.Link>
              </>
            )}  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
