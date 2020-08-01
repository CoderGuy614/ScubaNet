const express = require("express");
const router = express.Router({ mergeParams: true });

const { createUser } = require("../controllers/user");

// const test = () => console.log("SUCCESS");

router.route("/").post(createUser);

module.exports = router;
