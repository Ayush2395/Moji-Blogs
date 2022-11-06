import React from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import BlogCards from "../components/BlogCards";
import BlogForm from "../components/BlogForm";
import useFetch from "../hooks/useFetch";

const CreateBlogs = () => {
  const { data: blogs, error, isLoading } = useFetch("/api/userblogs");

 

  return (
    <>
      <div className="h-auto container py-3">
        <BlogForm />
        {isLoading && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "60vh" }}
          >
            <Spinner animation="border" role="status" variant="success">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {error && <Alert variant="danger">{error}</Alert>}
        <h1 className="fs-2 text-center my-3">Your published blogs</h1>
        <Row>
          {blogs &&
            blogs.map((blog, idx) => (
              <Col className="mb-3" xs="12" sm="12" md="6" lg="4">
                <BlogCards key={idx} blog={blog} />
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
};

export default CreateBlogs;
