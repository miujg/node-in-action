/**
 * Created by jgmiu on 18-7-2.
 */
var http = require('http')
var url = require('url')
var items = []

var server = http.createServer(function (req, res) {
    switch (req.method) {
        // 新建代办事件
        case 'POST':
            var item = '';
            req.setEncoding('utf8');
            req.on('data',function (chunk) {
                item += chunk;
            });
            req.on('end',function () {
                items.push(item);
                res.end('OK\n');
            });
            break;
        // 获取
        case 'GET':
            // items.forEach(function (item,i) {
            //     res.write(i + ':' + item + '\n');
            // });
            var body = items.map(function (item,i) {
                return 'i' + ':' + item;
            }).join('\n');
            res.setHeader('Content-Type','text/plain; charset="utf-8"');
            res.setHeader('Content-Length',Buffer.byteLength(body));
            res.end(body);
            break;
        case 'DELETE':
            var path = url.parse(req.url).pathname;
            var i = parseInt(path.slice(1), 10);
            if (isNaN(i)){
                //不是数字，设置响应码为400
                res.statusCode = 400;
                res.end('input not ')
            }else {
                items.slice(i,1);
            }
            break;
    }
});

server.listen(3000);
