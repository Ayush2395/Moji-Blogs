import React from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ReadBlog = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useFetch(`/api/blogs/${id}`);

  return (
    <>
      <div className="container my-3 py-3">
        {isLoading && (
          <Spinner animation="border" role="status" variant="success">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {error && <p className="text-danger">{error}</p>}
        {data && (
          <article>
            <h1 className="display-4 fw-normal">{data.title}</h1>
            <p className="text-primary fs-5 fw-semibold">
              Written by: <span className="text-info">{data.author}</span>
            </p>
            <p className="fs-4">{data.content}</p>
          </article>
        )}
      </div>
    </>
  );
};

export default ReadBlog;
