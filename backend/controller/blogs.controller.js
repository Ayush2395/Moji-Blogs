// const mongoose = require("mongoose");
const blogs = require("../models/blog.model");

const handleError = (error) => {
  console.log(error);
};

/*==========get all the blogs============ */
const getBlogs = async (req, res) => {
  try {
    const blog = await blogs.find().sort({ createdAt: -1 });
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ error: "No blogs found" });
  }
};

/*=============read a particular blog=========== */
const readBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await blogs.findById(id);
    res.status(200).json(blog);
  } catch (error) {
    const errors = handleError(error);
    res.status(400).json(error);
  }
};

/*============create new blogs=========== */
const createBlog = async (req, res) => {
  const { title, author, content, category } = req.body;
  try {
    const user_id = req.user.id;
    const blog = await blogs.create({
      title,
      author,
      content,
      user_id,
      category,
    });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: "All fields are required" });
  }
};

/*============delete a particular blog========== */
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await blogs.findByIdAndDelete(id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ error: "No such blog" });
  }
};

/*=============update the blog============ */
const updateBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await blogs.findByIdAndUpdate(id, { ...req.body });
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ error: "no such blogs." });
  }
};

/*=============get users blogs========== */
const getUserBlogs = async (req, res) => {
  try {
    const user_id = req.user.id;
    const blog = await blogs.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ error: "No such blogs found." });
  }
};

/*==============get categorized blogs========== */
const getCategorizedBlogs = async (req, res) => {
  const { category } = req.body;
  console.log(category);
  try {
    const blog = await blogs.find({ category: "Learn" });
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ error: "No blogs" });
  }
};

module.exports = {
  getBlogs,
  readBlog,
  createBlog,
  deleteBlog,
  updateBlog,
  getUserBlogs,
  getCategorizedBlogs,
};
