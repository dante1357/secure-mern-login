const express = require("express");
const {
	signup,
	login,
	verifyToken,
	getUser
} = require("../controllers/user-controller");

const router = express.Router();

// declare the signup route with its controller
router.post("/signup", signup);
// declare the login route with its controller
router.post("/login", login);
// declare the user route with its controller
router.get("/user", verifyToken, getUser);

module.exports = router;
