import React, { useState } from "react";
import useAppState from "../hooks/useAppState";
import useAuth from "../hooks/useAuth";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("All");
  const [error, setError] = useState({ error: false, msg: null });
  const { user } = useAuth();
  const { dispatch } = useAppState();

  console.log(category);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title === "" || author === "" || content === "" || category === "") {
      return setError({ error: true, msg: "All fields are required" });
    }

    const response = await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError({ error: true, msg: json.error });
    }
    if (response.ok) {
      setError({ error: false, msg: null });
      dispatch({ type: "create-blog", payload: json });
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="card">
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
          <h1 className="text-center text-5xl text-warning font-semibold">
            Create your blog
          </h1>
          <hr className="my-5" />
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-5">
              <div className="form-group mb-3">
                <label htmlFor="title" className="form-label block mb-3">
                  Title
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="title"
                  type="text"
                  className="form-control w-full border border-solid border-success rounded-md px-3 h-10 outline-none"
                  placeholder="type here"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="author" className="form-label block mb-3">
                  Author
                </label>
                <input
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  id="author"
                  type="text"
                  className="form-control w-full border border-solid border-success rounded-md px-3 h-10 outline-none"
                  placeholder="type here"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="category" className="form-label block mb-3">
                  Category
                </label>
                <input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  id="category"
                  type="text"
                  className="form-control w-full border border-solid border-success rounded-md px-3 h-10 outline-none"
                  placeholder="type All or Learn"
                />
              </div>
            </div>
            <div className="form-group my-3">
              <label htmlFor="content" className="form-label block mb-3">
                Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                id="content"
                type="text"
                className="form-control w-full border border-solid border-success rounded-md px-3 outline-none resize-none h-28 py-3"
                placeholder="type here"
              ></textarea>
            </div>
            <button
              disabled={error?.error}
              type="submit"
              className="px-3 py-2 rounded-md bg-primary text-white my-5 w-52 shadow-md"
            >
              Publish Blog
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
