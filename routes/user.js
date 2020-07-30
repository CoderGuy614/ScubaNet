const express = require("express");
const router = express.Router();

const { userById, read } = require("../controllers/user");
const { requireSignin, isAuth } = require("../controllers/auth");

router.get("/user/:userId", read);

router.param("userId", userById);

module.exports = router;
