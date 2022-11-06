import React, { useState } from "react";
import { Alert, Button, InputGroup, Spinner } from "react-bootstrap";
import { Form } from "react-bootstrap";
import useLogin from "../hooks/useLogin";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import useDarkMode from "../hooks/useDarkMode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const { darkMode } = useDarkMode();

  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);

    if (!login) {
      return;
    }

    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          {error && <Alert variant="danger">{error}</Alert>}
          <div
            className={`card rounded-4 shadow bg-gradient ${
              darkMode ? "bg-dark text-white" : "bg-light text-dark"
            }`}
          >
            <div className="card-body">
              <div className="card-title fs-2 text-center fw-normal">Login</div>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="type here"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <InputGroup>
                    <InputGroup.Text onClick={() => setShow(!show)}>
                      {show ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </InputGroup.Text>
                    <Form.Control
                      id="password"
                      type={show ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="type here"
                    />
                  </InputGroup>
                </Form.Group>
                {isLoading ? (
                  <Button variant="primary" className="w-100" disabled>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </Button>
                ) : (
                  <button type="submit" className="btn btn-success w-100">
                    Login
                  </button>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
