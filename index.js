const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDb = require("./config/db");
const port = process.env.PORT || 5000;
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const poetRoute = require("./routes/poetRoute");
const categoryRoute = require("./routes/categoryRoute");

connectDb();

app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
