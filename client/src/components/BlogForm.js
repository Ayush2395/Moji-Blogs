import React from "react";

const BlogForm = () => {
  return (
    <>
      <div className="card w-[680px] mx-auto">
        <h1 className="text-4xl text-center text-orange-400">Create your Blog</h1>
        <hr className="my-3" />
        <form className="my-5 mx-2 grid grid-cols-2 gap-4">
          <div className="form-group mb-3">
            <label htmlFor="title" className="form-label block text-xl mb-2">
              Title
            </label>
            <input
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
              placeholder="type here"
              className="form-control border border-solid border-slate-500 rounded-md h-52 outline-none px-2 w-full resize-none py-1"
              id="content"
            ></textarea>
          </div>
          <button className="bg-blue-500 text-white py-2 rounded-md shadow-md hover:shadow-xl hover:bg-green-400 duration-200">
            Publish Post
          </button>
        </form>
      </div>
    </>
  );
};

export default BlogForm;
