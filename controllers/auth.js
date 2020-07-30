const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const expressJwt = require("express-jwt");

exports.signup = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    return res.status(200).json({ message: "User successfully created" });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: `${error.message}` });
  }
};
