import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, seterror] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      seterror(json.error);
      setIsLoading(true);
    }

    if (response.ok) {
      seterror("Your blog is published");
      setIsLoading(false);
      setTitle("");
      setAuthor("");
      setContent("");
    }
  };

  return (
    <>
      <div className="card w-[680px] mx-auto">
        <h1 className="text-4xl text-center text-orange-400">
          Create your Blog
        </h1>
        <hr className="my-3" />
        <form
          onSubmit={handleSubmit}
          className="my-5 mx-2 grid grid-cols-2 gap-4"
        >
          <div className="form-group mb-3">
            <label htmlFor="title" className="form-label block text-xl mb-2">
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="form-control border border-solid border-slate-500 rounded-md h-10 outline-none px-2 w-full"
              id="title"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="author" className="form-label block text-xl mb-2">
              Writer's name
            </label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              className="form-control border border-solid border-slate-500 rounded-md h-10 outline-none px-2 w-full"
              id="author"
            />
          </div>
          <div className="form-group mb-3 col-span-2">
            <label htmlFor="content" className="form-label block text-xl mb-2">
              Your Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="type here"
              className="form-control border border-solid border-slate-500 rounded-md h-52 outline-none px-2 w-full resize-none py-1"
              id="content"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-500 text-white py-2 rounded-md shadow-md hover:shadow-xl hover:bg-green-400 duration-200 mb-3"
          >
            Publish Post
          </button>
          {error && (
            <div className={!isLoading ? "loading" : "error"}>{error}</div>
          )}
        </form>
      </div>
    </>
  );
};

export default BlogForm;
