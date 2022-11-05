import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const ReadBlog = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(`/api/blogs/${id}`);

  return (
    <>
      {isLoading && (
        <Spinner
          className="position-absolute"
          animation="border"
          role="status"
          variant="success"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {error && <div className="text-danger">{error}</div>}
      <Container className="mt-3">
        <Row>
          <Col>
            {data && (
              <article>
                <h1 className="display-4 fw-normal">{data.title}</h1>
                <h3 className="fs-4 text-success">
                  <span className="text-info">Written by:</span> {data.author}
                </h3>
                <p className="fs-5">{data.content}</p>
              </article>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReadBlog;
