import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <>
      <div className="card">
        <h1 className="title text-xl font-semibold text-primary">
          {blog.title}
        </h1>
        <p className="text-sm font-semibold">
          Written by: <span className="text-danger">{blog.author}</span>
        </p>
        <p className="text-sm font-semibold">
          Published on:{" "}
          <span className="text-danger">{blog.createdAt.slice(0, 10)}</span>
        </p>
        <Link to={`/blog/${blog._id}`}>
          <button className="w-full py-2 px-1 bg-success my-2 mt-5 text-white rounded-md shadow-md">
            Read more
          </button>
        </Link>
      </div>
    </>
  );
};

export default BlogCard;
