import React, { useState } from "react";
import { Alert, Card, Col, Form, Row } from "react-bootstrap";
import useAuth from "../hooks/useAuth";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setIsLoading(false);

    const response = await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ title, author, content }),
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setIsLoading(true);
    }
    if (response.ok) {
      console.log(json);
      setIsLoading(false);
      setError("Your blog is published");
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="w-100" style={{ maxWidth: "600px" }}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Card className="mt-5 mx-auto">
            <Card.Body>
              <Card.Title className="fs-2 text-center text-warning">
                Create your blog
              </Card.Title>
              <hr />
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xs="12" sm="6" md="6" lg="6">
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="title">Title</Form.Label>
                      <Form.Control
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="title here"
                        id="title"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="12" sm="6" md="6" lg="6">
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="author">Writer</Form.Label>
                      <Form.Control
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        type="text"
                        placeholder="writer's name"
                        id="author"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="content">Content</Form.Label>
                  <Form.Control
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    as="textarea"
                    id="content"
                    type="text"
                    placeholder="type here"
                  />
                </Form.Group>
                <button
                  disabled={isLoading}
                  type="submit"
                  className="btn btn-outline-primary shadow"
                >
                  Publish Blog
                </button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default BlogForm;
