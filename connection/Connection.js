const mysql = require("mysql2");
const table = require("../model/table.js");
const connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Torab@000sql",
  database: "crud_contact1",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected--");
  connection.query(table, function (err, result) {
    if (err) throw err;
    console.log("Table created--");
  });
});

module.exports = connection;
