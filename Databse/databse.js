// database.js
const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URL } = process.env;

const connectDB = async () => {
  try {
    console.log('Attempting to connect to MongoDB...');
    await mongoose.connect(MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
