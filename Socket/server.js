/**
 * Created by jgmiu on 18-7-25.
 */
var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');
var html = fs.readFileSync('index.html','utf8');

function handler(req,res) {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));
  res.end(html);
};

function tick() {
  var now = new Date().toUTCString();
  io.sockets.send(now);
};
// 每隔一秒 给所有连上的客户端发送一次时间
setInterval(tick, 1000);

app.listen(8080)