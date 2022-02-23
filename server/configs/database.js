const mysql = require("mysql");

const db = mysql.createConnection({
  // user ->  cctclient
  user: "root",
  //  host ->endpoint
  host: "localhost",
  // password
  password: "admin1997!",
  // ask pa
  database: "cctpwa",
});

module.exports = db;
