import React from "react";
import { Card, Container } from "react-bootstrap";

const Page404 = () => {
  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "600px" }}>
          <Card>
            <Card.Body>
              <Card.Title className="display-4 text-center">Page not found</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default Page404;
