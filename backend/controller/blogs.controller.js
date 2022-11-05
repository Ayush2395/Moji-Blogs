// const mongoose = require("mongoose");
const blogs = require("../models/blog.model");

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
    res.status(404).json({ error: "No such blog found" });
  }
};

/*============create new blogs=========== */
const createBlog = async (req, res) => {
  const { title, author, content } = req.body;
  try {
    const blog = await blogs.create({ title, author, content });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
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

module.exports = { getBlogs, readBlog, createBlog, deleteBlog, updateBlog };
