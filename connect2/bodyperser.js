/**
 * Created by jgmiu on 18-7-20.
 */
var connect = require('connect');
var bodyParser = require('body-parser');
var app = connect();
app.use();
app.use(bodyParser());
app.use(function (req,res) {
    console.log(req.body);
    console.log(req.file);
    res.end("upload is ok!");
});
app.listen(3000);
// 通过一下命令会让程序去解析请求体
// curl -d '{"username":"mjg"}' -H "Content-Type: application/json" http://localhost:3000