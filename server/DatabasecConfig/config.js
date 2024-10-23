const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  // port: 5900,
  password: "Ji1961997/",
  database: "maitrelaribi_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = { connection };