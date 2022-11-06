const {
  getBlogs,
  readBlog,
  createBlog,
  deleteBlog,
  updateBlog,
  getUserBlogs,
} = require("../controller/blogs.controller");
const authRequire = require("../middleware/auth.middelware");

const blogs = require("express").Router();

/*==========Protect the blog routes by middleware======= */
blogs.use(authRequire);

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

/*=========get users blogs========= */
blogs.get("/", getUserBlogs);

module.exports = blogs;
