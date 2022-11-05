const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

/*=========create token for each user========= */
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: 3 * 24 * 60 * 60 });
};

/*===========Create new user======== */
const createNewUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.signup(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(406).json({ error: error.message });
  }
};
const loginExistingUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(406).json({ error: error.message });
  }
};

module.exports = { createNewUser, loginExistingUser };
