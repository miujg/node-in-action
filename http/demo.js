/**
 * Created by jgmiu on 18-7-2.
 */
var http = require('http');

var server = http.createServer(function (req,res) {
    // 获取http谓词
    console.log(req.method)
    // 获取请求头
    // var accept = req.getHeader('Accept');
    // console.log(accept);
    // 设置响应头
    var body = 'hello world';
    res.setHeader('Content-Length',body.length);
    res.setHeader('Content-type', 'text/plain');
    // 设置状态码
    res.statusCode = 302;
    res.end(body);
});

server.listen(3000);



