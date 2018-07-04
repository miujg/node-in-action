/**
 * Created by jgmiu on 18-7-2.
 */
var http = require('http')
var items = []

var server = http.createServer(function (req, res) {
    switch (req.method) {
        // 新建代办事件
        case 'POST':
            var item = '';
            req.setEncodeing('utf8');
            req.on('data',function (chunk) {
                item += chunk;
            });
            req.on('end',function () {
                items.push(item);
                res.end('OK\n');
            });
            break;
        // 获取
        case 'PUT':
            items.forEach(function (item,i) {
                res.write()
            });
            res.end();
            break;
    }
});

server.listen(3000);
