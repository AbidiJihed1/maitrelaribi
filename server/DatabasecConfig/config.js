const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "164.92.233.115",
  user: "faouzi",
  port: 5900,
  password: "Ji1961997/",
  database: "maitrelaribi_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = { connection };