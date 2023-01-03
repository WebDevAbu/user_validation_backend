const express = require("express");
// const mysql = require("mysql");/
const cors = require("cors");
const connection = require("./connection/Connection.js");
const user = require("./route/userRoute.js");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running...");
});

app.use(user);

app.listen(5000, (req, res) => {
  console.log("app is running at http://localhost:5000");
});
