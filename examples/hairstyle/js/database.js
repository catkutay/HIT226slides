//run as node database.js

var mysql = require('mysql');

var connectionLocal = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password"
});

connectionLocal.connect(function(err) {
    if (err) throw err;
    console.log("Connected to local database");
    connectionLocal.query("CREATE DATABASE mydb", function (err, result) {
        
        console.log("Database set up");
    });
});