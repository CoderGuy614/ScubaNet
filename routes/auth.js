const express = require("express");

const router = express.Router();

const { signup, signin } = require("../controllers/auth");

router.post("/user/signup", signup);
router.post("/user/signin", signin);

module.exports = router;
