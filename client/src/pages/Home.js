import React from "react";
import useFetch from "../hooks/useFetch";
import BlogCards from "../components/BlogCards";

const Home = () => {
  const { data: blogs, error, isLoading } = useFetch("/api/blogs");
  return (
    <>
      {error && <div className="error">{error}</div>}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center h-full gap-x-10 gap-y-5 w-100 mx-5 py-5">
        {isLoading && <div className="loading">Loading...</div>}
        {blogs &&
          blogs.map((blog) => (
            <div className="col">
              <BlogCards blog={blog} key={blog._id} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
