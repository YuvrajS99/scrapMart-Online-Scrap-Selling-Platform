const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://yuvasanap2025_db_user:4fsdbdqvtu@cluster0.og7uw93.mongodb.net/?appName=Cluster0"
    );
    console.log("MongoDB Atlas connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
