const User = require("../models/user");

exports.read = (req, res) => {
  return res.json(req.profile);
};

exports.userById = async (req, res, next, id) => {
  try {
    const user = await User.findById(id).select("-password");
    req.profile = user;
    next();
  } catch (error) {
    console.log(error);
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    return res.status(400).json({ error: `${error.message}` });
  }
};
