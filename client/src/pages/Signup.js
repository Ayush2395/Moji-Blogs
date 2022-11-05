import React, { useState } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { singup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await singup(email, password);
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
          <div className="card">
            <div className="card-body">
              <div className="card-title fs-2 text-center fw-normal">
                Signup
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="type here"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="type here"
                  />
                </div>
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
                    Signup
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
