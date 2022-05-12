var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "webprogramming",
});
connection.connect();

connection.query("SELECT * from feeds WHERE ID=1", function (error, results, fields) {
  if (error) throw error;
  console.log("첫번째 데이터의 콘텐트: ", results[0].content);
});

connection.end();
