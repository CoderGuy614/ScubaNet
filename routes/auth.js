const express = require("express");

const router = express.Router();

const { signup } = require("../controllers/auth");

router.post("/user/signup", signup);

module.exports = router;
