const {
  getBlogs,
  readBlog,
  createBlog,
  deleteBlog,
  updateBlog,
} = require("../controller/blogs.controller");

const blogs = require("express").Router();

/*==========Get all blogs========= */
blogs.get("/", getBlogs);

/*===========Read the Blogs========= */
blogs.get("/:id", readBlog);

/*============Create blogs========= */
blogs.post("/", createBlog);

/*============Delete blogs========= */
blogs.delete("/:id", deleteBlog);

/*===========Update blogs=========== */
blogs.patch("/:id", updateBlog);

module.exports = blogs;
