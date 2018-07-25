/**
 * Created by jgmiu on 18-7-25.
 */
var net = require('net');

net.createServer(function (socket) {
    socket.write('hello world!\r\n');
    socket.end();
}).listen(1337);

console.log('port on 1337');
