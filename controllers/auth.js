const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");
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

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 36000000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: `${error.message}` });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 360000000 },
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token, { expire: new Date() + 99999 });
        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Server Error" });
  }
};

exports.requireSignin = expressJwt({
  secret: config.get("jwtSecret"),
  userProperty: "auth",
  algorithms: ["HS256"],
});

exports.signout = (req, res) => {
  res.json({ message: "Signout Successful" });
};

exports.isAuth = (req, res, next) => {
  console.log("IS AUTH MIDDLEWARE RAN");
  next();
};

exports.test = (req, res) => {
  res.json({ message: "TEST WAS SUCCESSFUL" });
};
