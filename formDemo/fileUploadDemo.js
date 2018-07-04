var http = require('http');
var qs = require('querystring');
var formidable = require('formidable')
var items = [];

var server = http.createServer(function (req,res) {
    if ('/' == req.url){
        switch (req.method) {
            case 'GET':
                //将待办事项展示到页面
                show(res);
                break;
            case 'POST':
                upload(req,res);
                break;
            default:
        }
    }else {

    }
});
server.listen(3000);
function show(res) {
    var html = '<html><head><title>xx</title></head><body>'
        + '<h1>file upload</h1>'
        + '</ul>'
        + '<form method="post" action="/" enctype="multipart/form-data">'
        + '<p><input type="text" name = "name"></p>'
        + '<p><input type="file" name = "file"></p>'
        + '<p><input type="submit" value="Upload"></p>'
        + '</form></body></html>';
    res.setHeader('Content-Type','text/html');
    res.setHeader('Content-Length',Buffer.byteLength(html))
    res.end(html)
};
function upload(req,res) {
    // 上传逻辑
    if(!isFormData(req)){
        res.statusCode = 400;
        res.end('not file');
        return;
    }
    var form = new formidable.IncomingForm();
    // 得到中诸如type=text 这种input的name与用户输入的值
    form.on('field', function (field,value) {
        //console.log(field);
        //console.log(value);
    });
    // 得到type = file 这种input所上传的文件
    form.on('file', function (name,file) {
        //console.log(name);
        //console.log(file);
    });
    form.on('end',function () {
        res.end('upload done');
    }) ;
    // 收到的字节数，前一个参数为实际接受到的字节，第二个参数代表期望得到的（可以理解为上传文件的大小）
    // 一般用于返回给用户，让用户知道文件上传的实时进度
    form.on('progress',function (bytesReceived,bytesExpected) {
        var percent = bytesReceived / bytesExpected * 100;
        console.log(percent);
    })
    form.parse(req);//将页面传入的form转换为IncomingForm类型表单
};

function isFormData(req) {
    var type = req.headers['content-type'] || '';
    return 0 == type.indexOf('multipart/form-data')
}