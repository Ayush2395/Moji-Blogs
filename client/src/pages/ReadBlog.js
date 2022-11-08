import React from "react";
import { useParams } from "react-router-dom";
import BlogCards from "../components/BlogCards";
import useFetch from "../hooks/useFetch";

const ReadBlog = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(`/api/blogs/${id}`);
  const {
    data: blogs,
    error: errors,
    isLoading: spinner,
  } = useFetch(`/api/blogs`);

  return (
    <>
      <div className="grid py-5 grid-cols-3 gap-x-6">
        <div className="col-span-2" key={id}>
          {isLoading && <div className="loading">Loading...</div>}
          {error && <div className="error">{error}</div>}
          {isLoading ? null : (
            <article>
              <h1 className="text-6xl text-blue-400 mb-5">
                {data && data.title}
              </h1>
              <p className="text-md text-gray-600 font-semibold">
                Written by:{" "}
                <span className="text-orange-500 mb-5">
                  {data && data.author}
                </span>
              </p>
              <p className="text-md text-gray-600 font-semibold">
                Published on:
                <span className="text-orange-500 mb-5">
                  {data && data.createdAt.slice(0, 10)}
                </span>
              </p>
              <hr />
              <p className="text-xl mt-3 text-justify">
                {data && data.content}
              </p>
            </article>
          )}
        </div>
        <div className="recents-blogs">
          <h1 className="text-3xl my-5 text-center text-red-400">
            Recents blogs
          </h1>
          {spinner && <div className="loading">Loading...</div>}
          {errors && <div className="error">{errors}</div>}
          {blogs &&
            blogs.map((blog) => (
              <div className="sticky top-0 mb-5">
                <BlogCards blog={blog} key={blog._id} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ReadBlog;
