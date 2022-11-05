import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useLogout from "../hooks/useLogout";

const Navmenu = () => {
  const { user } = useAuth();
  const { logout } = useLogout();
  return (
    <>
      <Navbar sticky="top" bg="light" expand="lg" collapseOnSelect={true}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            Moji Blog
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {user && (
                <div className="d-flex">
                  <Nav.Link as={NavLink} to="/create-blog">
                    Create Blog
                  </Nav.Link>
                  <Button onClick={logout} variant="outline-danger">
                    Logout
                  </Button>
                </div>
              )}
              {!user && (
                <div className="d-flex">
                  <Nav.Link as={NavLink} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/signup">
                    Signup
                  </Nav.Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navmenu;
