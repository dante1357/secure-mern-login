const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		require: true,
	},
	// osUsername: {
	// 	type: String,
	// 	required: false,
	// 	unique: true,
	// },
	// mfa: {
	// 	type: Boolean,
	// 	require: false,
	// },
	// lastLoginAt: {
	// 	type: Date,
	// 	require: false,
	// },
	// isActive: {
	// 	type: Boolean,
	// 	required: false,
	// },
	// userIP: {
	// 	type: String,
	// 	required: false,
	// 	unique: true,
	// },
});

module.exports = mongoose.model("User", userSchema);
