// 文件存储demo
var fs = require('fs');
var path = require('path');
// 参数数组
var args = process.argv.splice(2);

// 取出第一个参数 作为命令
var command = args.shift();
var count = args.join(' ');
// 保存在文件之中
var file = path.join(process.cwd(), '/.tasks');

switch (command){
    case  'add':
        addTask(file, count);
        break;
    case  'list':
        console.log('list')
        listTask(file);
        break;
    default:
        console.log('demo of file');
};

function addTask(file, coutent) {
    storeTasks(file, coutent)
};

function listTask(file) {
    loadOrInitializeTaskArray(file, function (tasks) {
        console.log(tasks)
        for(var i; i < tasks.length; i++){
            console.log(tasks[i]);
        }
    })
};

function loadOrInitializeTaskArray(file, cb) {
    fs.exists(file, function (exists) {
        var tasks = [];
        if (exists) {
            fs.readFile(file, 'utf8', function (err,data) {
                if (err) throw err;
                var data = data.toString();
                var tasks = JSON.parse(data || '[]');

                cb(tasks);
            })
        }else {
            cb([]);
        }
    })
};

function storeTasks(file, tasks) {
    fs.writeFile(file, JSON.stringify(tasks),'utf8', function (err) {
        if (err) throw err;
        console.log('saved');
    })
}