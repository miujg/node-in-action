/**
 * Created by jgmiu on 18-7-11.
 */
var http = require('http');
var work = require('./lib/timetrack');
var mysql = require('mysql');

var db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: ''
});

var server = http.createServer(function (req, res) {
   switch (req.method) {
       case 'POST':
           switch (req.url){
               case '/':
                   break;
               case '/archive':
                   break;
               case '/delete':
                   break;
           }
           break;
       case 'GET':
           switch (req.url){
               case '/':
                   break;
               case  '/archived':
                   break
           }
           break;
   }
});

// 创建数据表
db.query(
    "CREATE TABLE IF NOT EXISTS work ("
    + "ID INT(10) NOT NULL AUTO_INCREMENT,"
    + "hourse DECIMAL(5,2) DEFAULT 0,"
    + "date DATE"
    + "archived INT(1) DEFAULT 0"
    + "description LONGTEXT,"
    + "PRIMARY KEY(id)",
    function (err) {
        if (err) throw err;
        console.log('Server start on port 3000......');
        server.listen(3000,'127.0.0.1');
    }
);