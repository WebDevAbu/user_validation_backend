require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./connection/Connection.js");
const user = require("./route/userRoute.js");

const app = express();
const port = 5000 || process.env.PORT;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running...");
});

app.use(user);

app.listen(port, (req, res) => {
  console.log(`app is running at http://localhost:${port}`);
});
