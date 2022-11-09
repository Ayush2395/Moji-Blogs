const { getCategorizedBlogs } = require("../controller/blogs.controller");

const category = require("express").Router();
/*=========get categorized blogs========= */
category.get("/", getCategorizedBlogs);

module.exports = category;
