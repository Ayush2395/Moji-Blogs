const authRequire = require("../middleware/auth.middelware");
const blogModel = require("../models/blog.model");

const userBlogs = require("express").Router();

userBlogs.use(authRequire);

userBlogs.get("/", async (req, res) => {
  try {
    const user_id = req.user.id;
    const blog = await blogModel.find({ user_id }).sort({ createdAt: -1 });
    res.json(blog);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = userBlogs;
