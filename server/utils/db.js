const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Db connected");
  } catch (error) {
    console.error("Db connection failed");
    process.exit(0);
  }
};

module.exports = connectDb;

// kNmlwLAKa1SeVMSI
