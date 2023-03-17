// Adding requirements
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser");

// Adding middleware
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);

main().catch((err) => console.log(err));

async function main() {
	mongoose.set("strictQuery", true);
	await mongoose.connect("mongodb://127.0.0.1:27017/AccTech");
	app.listen(5000, () => {
		console.log("app connected to mongoDB and server run on port 5000");
	});
}
