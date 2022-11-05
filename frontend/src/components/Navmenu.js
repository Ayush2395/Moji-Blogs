import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link,NavLink } from "react-router-dom";

const Navmenu = () => {
  return (
    <>
      <Navbar sticky="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Moji Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="/signup">
                Signup
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navmenu;
