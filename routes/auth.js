const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

const {
  signup,
  signin,
  signout,
  test,
  requireSignin,
} = require("../controllers/auth");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.get("/test", authMiddleware, test);

module.exports = router;
