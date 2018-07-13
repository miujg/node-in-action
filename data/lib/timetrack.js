/**
 * Created by jgmiu on 18-7-11.
 */
var qs = require('querystring');

// 发送html
exports.sendHtml = function (res,html) {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html);
};

// 处理接受到的数据
exports.parseReceivedData = function (req, cq) {
    var body = '';
    req.setEncoding('utf8');
    req.on('data',function (chunk) {
        body += chunk;
    });
    req.on('end',function () {
        var data = qs.parse(body);
        cb(data);
    })
};
// 封装简单的表单提交
exports.actionForm = function (id, path,label) {
    var html = '<form method="POST" action= "' + path + '">' +
            '<input type = "hidden" name = "id" id = "' + id + '">' +
            '<input type="submit" value = "' + label + '"';
    return html;
};

exports.add = function (db,req,res) {
    exports.parseReceivedData(req, function (work) {
        // work为工作计划，将其添加到数据库中
        db.query(
            'insert into work (hourse,date,description)'
            + 'values(?,?,?)',
            [work.hourse,work.date,work.description],
            function (err) {
                if (err) throw err;
                // 工作计划添加成功之后会再次查询出所有工作计划并返回到页面
                exports.show(db,res);
            }
        )
    });
};

