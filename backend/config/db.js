const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${connect.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
