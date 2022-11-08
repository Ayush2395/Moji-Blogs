import React from "react";
import { Link } from "react-router-dom";

const BlogCards = ({ blog }) => {
  return (
    <>
      <div className="card h-52 px-3 py-2">
        <h1 className="text-pink-400 text-2xl font-semibold">{blog.title}</h1>
        <p className="text-sm text-green-600">
          Written by: <span className="text-red-400">{blog.author}</span>
        </p>
        <p>{blog.createdAt.slice(0, 10)}</p>
        <Link
          className="w-full relative top-[20px] font-semibold px-3 py-2 border border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-white"
          to={`/blog/${blog._id}`}
        >
          Read more
        </Link>
      </div>
    </>
  );
};

export default BlogCards;
