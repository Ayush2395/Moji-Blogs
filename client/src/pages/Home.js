import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import BlogCards from "../components/BlogCards";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data: blogs, error, isLoading } = useFetch("/api/blogs");
  return (
    <>
      <div className="container" style={{ minHeight: "100vh" }}>
        <h1 className="display-4 fw-normal my-4">Recents Blogs</h1>
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
        {error && <p className="text-danger">{error}</p>}
        <Row>
          {blogs &&
            blogs.map((blog) => (
              <Col xs="12" sm="6" md="6" lg="4" key={blog._id} className="mb-3">
                <BlogCards blog={blog} />
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
};

export default Home;
