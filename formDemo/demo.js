/**
 * Created by jgmiu on 18-7-4.
 */
var http = require('http');
var items = [];

var server = http.createServer(function (req,res) {
    if ('/' == req.url){

    }else {
        notfound(res)
    }
});
server.listen(3000);
