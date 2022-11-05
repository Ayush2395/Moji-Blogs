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
          <Spinner animation="border" role="status" variant="success">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {error && <p className="text-danger">{error}</p>}
        <Row>
          {blogs &&
            blogs.map((blog) => (
              <Col key={blog._id}>
                <BlogCards blog={blog} />
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
};

export default Home;
