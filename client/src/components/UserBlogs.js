import React from "react";
import {
  Alert,
  Button,
  ButtonGroup,
  Card,
  Col,
  Row,
  Spinner,
} from "react-bootstrap";
import useFetch from "../hooks/useFetch";

const UserBlogs = () => {
  const { data, error, isLoading } = useFetch("/api/userblogs");

  return (
    <>
      <div className="container">
        {isLoading && (
          <Spinner animation="border" role="status" variant="success">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {error && <Alert variant="danger">{error}</Alert>}
        <h1 className="display-5 my-3 text-center">Your published blog</h1>
        <Row>
          {data &&
            data.map((blog) => (
              <Col xs="12" sm="12" md="6" lg="4" key={blog._id}>
                <Card>
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{blog.createdAt.slice(0, 10)}</Card.Text>
                    <ButtonGroup className="w-100">
                      <Button variant='outline-warning'>Edit</Button>
                      <Button variant='outline-danger'>Delete</Button>
                    </ButtonGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
};

export default UserBlogs;
