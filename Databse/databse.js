// database.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log('Attempting to connect to MongoDB...');
    await mongoose.connect("mongodb+srv://nikhilharshe123:YRNyPZeAkeQe5obg@cluster0.e2oqopp.mongodb.net/QRCode");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
