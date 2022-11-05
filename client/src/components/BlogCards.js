import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogCards = ({ blog }) => {
  return (
    <>
      <Card>
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
