/**
 * Created by jgmiu on 18-7-4.
 */
var http = require('http');
var qs = require('querystring');
var items = [];

var server = http.createServer(function (req,res) {
    if ('/' == req.url){
        switch (req.method) {
            case 'GET':
                //将待办事项展示到页面
                show(res);
                break;
            case 'POST':
                //添加代办事项
                add(req,res);
                break;
            default:
                badRequest(res);
        }
    }else {
        notfound(res);
    }
});
server.listen(3000);
function show(res) {
    var lis = items.map(function (item) {
        return '<li>' + item + '</li>';
    }).join(' ');
    console.log(lis);
    var html = '<html><head><title>xx</title></head><body>'
        + '<h1>Todo List</h1>'
        + '<ul>'
        + lis
        + '</ul>'
        + '<form method="post" action="/">'
        + '<p><input type="text" name = "item"></p>'
        + '<p><input type="submit" value="Add Item"></p>'
        + '</form></body></html>';
    res.setHeader('Content-Type','text/html');
    res.setHeader('Content-Length',Buffer.byteLength(html))
    res.end(html)
};

function add(req,res) {
    var body = '';
    req.setEncoding('utf8');
    req.on('data',function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        var obj = qs.parse(body);
        items.push(obj.item);
        show(res);
    })
}

function notfound(res) {
    res.statusCode = 404;
    res.setHeader('Content-type','text/plain');
    res.end('not found');
};

function badRequest(res) {
    res.statusCode = 400;
    res.setHeader('Content-type','text/plain');
    res.end('badRequest');
}

