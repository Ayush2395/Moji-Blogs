import React from "react";
import BlogForm from "../components/BlogForm";
import UserBlogs from "../components/UserBlogs";

const CreateBlogs = () => {
  return (
    <>
      <div className="h-auto container">
        <BlogForm />
        <UserBlogs />
      </div>
    </>
  );
};

export default CreateBlogs;
