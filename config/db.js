const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const mongo = process.env.MONGO_URL;

const connectDb = async () => {
  const conn = await mongoose.connect(mongo);
  console.log(
    `MongoDB Connected to ${conn.connection.host}`
  );
};

module.exports = connectDb;
