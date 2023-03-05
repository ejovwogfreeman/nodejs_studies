const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`mongo db connected at ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;
