import React from "react";
import { Card } from "react-bootstrap";

const Page404 = () => {
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "600px" }}>
          <Card>
            <Card.Body>
              <Card.Title className="display-4 text-center">
                Sorry, page not found
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Page404;
