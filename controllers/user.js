const User = require("../models/user");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

//@desc Create a user
//@route POST /api/v1/users/
//@access Private/Admin
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(201).json({ success: true, data: user });
});

// exports.read = (req, res) => {
//   return res.json(req.user);
// };

// exports.userById = async (req, res, next, id) => {
//   try {
//     const user = await User.findById(id).select("-password");
//     req.user = user;
//     next();
//   } catch (error) {
//     console.log("THIS YOUR ERROR", error);
//     if (!user) {
//       return res.status(400).json({ error: "User not found" });
//     }
//     return res.status(400).json({ error: `${error.message}` });
//   }
// };
