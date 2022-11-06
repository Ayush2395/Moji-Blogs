const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const authRequire = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    res.status(401).json({ error: "invalid token" });
  }
};

module.exports = authRequire;
