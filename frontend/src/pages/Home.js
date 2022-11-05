import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import BlogsCard from "../components/BlogsCard";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const { data: blogs, error, isLoading } = useFetch("/api/blogs");
  return (
    <>
      <Container className="mt-5">
        <Row>
          {error && <div className="text-danger">{error}</div>}
          {isLoading && (
            <Spinner animation="border" role="status" variant="success">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {blogs &&
            blogs.map((blog) => (
              <Col key={blog._id}>
                <BlogsCard blog={blog} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
