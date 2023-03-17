const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// signup controller
const signup = async (req, res, next) => {
	// take user info for signup
	const { name, email, password } = req.body;
	// validate for existing user by email
	let existingUser;
	try {
		existingUser = await User.findOne({ email: email });
	} catch (error) {
		console.log(error);
	}
	if (existingUser) {
		return res
			.status(400)
			.json({ message: "User already exist! try different email." });
	}
	// hashing password
	const hashedPassword = bcrypt.hashSync(password);
	const user = new User({
		name, // its like name: name
		email,
		password: hashedPassword,
	});
	try {
		await user.save();
	} catch (error) {
		console.log(error);
	}
	return res.status(201).json({ message: user });
};

// login controller
const login = async (req, res, next) => {
	// take user information for login
	const { email, password } = req.body;
	// check for existing user
	let existingUser;
	try {
		existingUser = await User.findOne({ email: email });
	} catch (error) {
		return new Error(error);
	}
	if (!existingUser) {
		return res
			.status(400)
			.json({ message: "There is no user with that email. Please signup." });
	}
	const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
	if (!isPasswordCorrect) {
		return res.status(400).json({ message: "Wrong password / email" });
	}
	// generate token for authorization
	const token = jwt.sign({ id: existingUser.id }, process.env.JWT_SECRET_KEY, {
		expiresIn: "30s", // token expires time
	});
	// cookie setting
	res.cookie(String(existingUser._id), token, {
		path:'/', // by default its blank path
		expires: new Date(Date.now() +1000 * 30), // expire cookie in 30s 
		httpOnly: true, // to hide from front end user
		sameSite: "lax" // cookie is not sent on normal cross-site subsequent
	})
	return res
		.status(200)
		.json({ message: "User successfully logged", user: existingUser, token });
};

// verification user token for authorization
const verifyToken = (req, res, next) => {
	const cookies = req.headers.cookie; // take cookies that generated from login function
	const token = cookies.split("=")[1]; // split it from user id
	if (!token) {
		res.status(404).json({ message: "there is no token" });
	}
	jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, user) => {
		if (err) {
			return res.status(400).json({ message: "Invalid token." });
		}
		req.id = user.id;
	});
	// send id that we find out from token
	next() 
};

// get user from id after generating token
const getUser = async(req, res, next) =>{
	const userId = req.id;
	let user;
	try {
		user = await User.findById(userId,"-password") // -password: get all the details mines password
	} catch (error) {
		return new Error(error)
	}
	if(!user) return res.status(404).json({message:"User not found!"})
	return res.status(200).json({user})
} 

// export middleware controllers
exports.signup = signup;
exports.login = login;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
