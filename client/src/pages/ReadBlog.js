import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import BlogCard from "../components/blogs/BlogCard";

const ReadBlog = () => {
  const { id } = useParams();
  const { data, error } = useFetch(`/api/blogs/${id}`);
  const { data: blogs } = useFetch(`/api/blogs`);
  return (
    <>
      {error?.msg && (
        <div
          className={`${
            error?.error
              ? "bg-red-200 text-danger border border-danger rounded-md"
              : "bg-green-200 text-success border border-success rounded-md"
          } w-full py-3 px-2 my-3`}
        >
          {error?.msg}
        </div>
      )}
      {error?.error && (
        <div className="px-3 py-2 border border-solid border-warning rounded-md my-3">
          Loading...
        </div>
      )}
      <div className="grid grid-cols-3 gap-x-10">
        <div className="col-span-2">
          <h1 className="text-6xl">{data && data.title}</h1>
          <p className="text-info">
            Written by:{" "}
            <span className="text-primary">{data && data.author}</span>
          </p>
          <p className="text-info">
            Published on:{" "}
            <span className="text-primary">
              {data && data.createdAt.slice(0, 10)}
            </span>
          </p>
          <hr className="my-5" />
          <p className="text-xl text-justify">{data && data.content}</p>
        </div>
        <div className="col">
          <h1 className="text-3xl text-center mb-5">More blogs</h1>
          {blogs &&
            blogs.map((blog) => (
              <div className="blogs sticky top-0">
                <BlogCard blog={blog} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ReadBlog;
