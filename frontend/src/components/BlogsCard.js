import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogsCard = ({ blog }) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text>{blog.author}</Card.Text>
          <Link to={`/blog/${blog._id}`}>Read more</Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default BlogsCard;
