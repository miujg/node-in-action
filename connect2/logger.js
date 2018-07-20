/**
 * Created by jgmiu on 18-7-20.
 */
var connect = require('connect');
var app = connect();
var logger = require("morgan");
var fs = require("fs");
//函数第二个配置参数详情见 http://nodejs.cn/api/fs.html#fs_file_system_flags
var log = fs.createWriteStream("/home/jgmiu/studeltProject/node-in-action/mylog.log", {flags: 'a'});
// 默认的logger输出格式会非常的冗长 类似：
// ::1 - - [Fri, 20 Jul 2018 07:20:43 GMT] "GET / HTTP/1.1" 200 - "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.89 Safari/537.36"
//app.use(logger());
//自定义logger输出格式
//app.use(logger(':method :url :response-time ms'));
//app.use(logger('dev'))
//给日志设置stream
app.use(logger({format: ':method :url :response-time ms',stream: log, immediate: true,buffer: true}));
app.use(hello);
app.listen(3000);

function hello (req,res,next) {
    res.end("hello world");
};