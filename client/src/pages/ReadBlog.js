import React from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";
import useFetch from "../hooks/useFetch";

const ReadBlog = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useFetch(`/api/blogs/${id}`);
  const { darkMode } = useDarkMode();

  return (
    <>
      <div className="py-3 container" style={{ minHeight: "100vh" }}>
        {isLoading && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <Spinner animation="border" role="status" variant="success">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}

        {error && <p className="text-danger">{error}</p>}
        {data && (
          <article>
            <h1 className="display-4 fw-normal">{data.title}</h1>
            <p
              className={`text-${
                darkMode ? "warning" : "primary"
              } fs-5 fw-semibold`}
            >
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
