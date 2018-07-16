/**
 * Created by jgmiu on 18-7-16.
 */
var connect = require('connect')
var parse = require('url').parse;
var app  = connect();
var routerOption = {
    'GET': {
        '/' : function (req,res) {
            res.end(req.url);
        },
        '/url' : function (req,res) {
            res.end(req.url);
        }
    }
};
//app.listen(3000);
app.use(logger)
    //.use('/admin',adminPage) // 当根路径为： /admin时候才会进入的中间件
    .use('/test',router(routerOption))
    .listen(3000);

// 自定义日志中间件
function logger(req,res,next) {
    console.log('.....%s %s',req.method,req.url);
    next();
};

function hello(req,res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world');
};

function adminPage(req,res,next) {
  console.log('管理员。。。。。。');
  //next(new Error('未知错误'));//抛出错误
    switch (req.url) {
        case '/':
            res.end('/');
            break;
        case '/user':
            res.end('/user');
            break;
    }
  next();
};

// 带配置的路由：
// obj 为路由配置
function router(obj) {
    return function (req,res,next) {
        console.log('.........');
        if(!obj[req.method]){
            next();
            return;
        }
        var routers = obj[req.method];
        var url = parse(req.url);
        // 遍历routers判断url是否在routers中
        var paths = Object.keys(routers);
        for(var i = 0; i < paths.length; i++){
          if (url.pathname == paths[i]){
              // 拼装函数执行参数
              var args = [req,res];
              routers[paths[i]].apply(null,args);
              return;
          }
        };
        next();
    }
}
