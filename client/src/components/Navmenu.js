import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useDarkMode from "../hooks/useDarkMode";
import useLogout from "../hooks/useLogout";

const Navmenu = () => {
  const { user } = useAuth();
  const { logout } = useLogout();
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <>
      <Navbar
        sticky="top"
        variant={darkMode ? "dark" : "light"}
        bg={darkMode ? "dark" : "light"}
        expand="lg"
        collapseOnSelect
        className={darkMode ? "shadow" : "shadow-sm"}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Moji Blog
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Form.Check
                  onClick={() => setDarkMode(!darkMode)}
                  className="mt-2"
                  type="switch"
                />
              </Nav.Item>
              {user && (
                <div className="d-flex">
                  <Nav.Link as={NavLink} to="/create-blogs">
                    Create Blog
                  </Nav.Link>
                  <Button
                    className="mx-3 shadow"
                    onClick={logout}
                    variant="outline-danger"
                  >
                    Logout
                  </Button>
                </div>
              )}
              {!user && (
                <div className="d-flex">
                  <Nav.Link as={NavLink} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link className="mx-3" as={NavLink} to="/signup">
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
