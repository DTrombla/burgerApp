var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "nh0nnqz652m14hey",
  password: "r7gura2p976fodko",
  database: "ycq434xmt7c04rga"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
