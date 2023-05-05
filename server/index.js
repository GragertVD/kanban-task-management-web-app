const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const authRouter = require("./routes/auth.routes");

const app = express();
const PORT = config.get("serverPort");

app.use("/api/auth", authRouter);

const start = async () => {
  console.log("Start App");
  try {

    mongoose
      .connect(config.get("dbURL"))
      .then(() => console.log("Connect to DB"))
      .cath((err) => console.log("DB error", err));
    
    app.listen(PORT, () => {
      console.log('Server started on port', PORT);
    });
  } catch (error) {
    
  }
}

start();