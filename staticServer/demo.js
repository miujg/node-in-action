/**
 * Created by jgmiu on 18-7-4.
 */
var http = require('http')
var parse = require('url').parse;
var join = require('path').join;
var fs =  require('fs');

var root = __dirname;

var server = http.createServer(function (req, res) {
   var url = parse(req.url);
   var path = join(root, url.pathname);
   var stream = fs.createReadStream(path);
   // stream.on('data',function (chunk) {
   //     res.write(chunk);
   // });
   // stream.on('end', function () {
   //     res.end();
   // })
   // 
   //  stream.on('error',function (err) {
   //     res.statusCode = 500;
   //     res.end('not know error');
   //  });
   //  stream.pipe(res);
    
    fs.stat(path,function (err,stat) {
       if(err){
           if('ENOENT' == err.code){
               res.statusCode = 404;
               res.end('not found');
           } else{
               res.statusCode = 500;
               res.end('unkow error');
           }
       } else {

       }
    });
});

server.listen(3000);


