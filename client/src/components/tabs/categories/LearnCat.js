import React from "react";
import useFetch from "../../../hooks/useFetch";
import BlogCard from "../../blogs/BlogCard";

const TechCat = () => {
  const { data: blogs, error } = useFetch("/api/query");

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
      <div className="grid grid-cols-3 w-full gap-10">
        {blogs &&
          blogs.map((blog) => (
            <div className="col">
              <BlogCard blog={blog} key={blog._id} />
            </div>
          ))}
      </div>
    </>
  );
};

export default TechCat;
