import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

const BlogCards = ({ blog }) => {
  const { darkMode } = useDarkMode();
  return (
    <>
      <Card
        className={`shadow rounded-4 ${
          darkMode ? "bg-dark text-white" : "bd-light text-dark"
        }`}
      >
        <Card.Body>
          <Card.Title className="fs-4">{blog.title}</Card.Title>
          <Card.Text>
            written by: <span className="text-primary">{blog.author}</span>{" "}
          </Card.Text>
          <Card.Text>
            Pubished on:{" "}
            <span className="text-success">{blog.createdAt.slice(0, 10)}</span>
          </Card.Text>
          <Card.Text>
            <Link
              className="text-decoration-none btn btn-outline-secondary w-100"
              to={`/blog/${blog._id}`}
            >
              Read
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default BlogCards;
