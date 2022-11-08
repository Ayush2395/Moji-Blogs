import React from "react";
import BlogCards from "../components/BlogCards";
import BlogForm from "../components/BlogForm";
import useFetch from "../hooks/useFetch";

const CreateBlogs = () => {
  const { data: blogs, error, isLoading } = useFetch("/api/userblogs");

  return (
    <>
      <div className="h-full container py-3">
        <BlogForm />

        <h1 className="text-5xl my-6 text-center">Your published blogs</h1>

        {isLoading && <div className="loading">Loading...</div>}
        {error && <div className="error">{error}</div>}

        <div className="grid grid-cols-3 gap-x-5 gap-y-6">
          {blogs &&
            blogs.map((blog) => (
              <div className="blog">
                <BlogCards blog={blog} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CreateBlogs;
