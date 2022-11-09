const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new Schema({
  email: {
    type: String,
    requried: [true, "Please enter your email"],
    unique: true,
  },
  password: {
    type: String,
    requried: [true, "Please enter your password"],
    minlength: [6, "Password should be of min 6 words."],
  },
});

/*========create user from mongoose static method======== */
userSchema.statics.signup = async function (email, password) {
  const isEmailExist = await this.findOne({ email });

  if (!email || !password) {
    throw Error("please enter your email and password");
  }

  if (isEmailExist) {
    throw Error("This email already registered");
  }

  if (!validator.default.isEmail(email)) {
    throw Error("Invalid Email");
  }

  if (!validator.default.isStrongPassword(password)) {
    throw Error("Password must contain special character");
  }

  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });
  return user;
};

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (!user) throw Error("User Doesn't exists");

  if (!email || !password) throw Error("Enter email and password");

  if (!validator.default.isEmail(email)) throw Error("invalid email");

  const matchPass = await bcrypt.compare(password, user.password);

  if (!matchPass) throw Error("wrong password");

  return user;
};

module.exports = mongoose.model("user", userSchema);
