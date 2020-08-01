const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

router.route("/").post(createUser).get(getUsers);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
