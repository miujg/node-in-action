/**
 * Created by jgmiu on 18-7-16.
 */
//多个中间件处理错误

var api = connect()
    .use(users)
    .use(pets)
    .use(errorHandler);

var app = connect()
    .use(hello)
    .use('/api', api)
    .use(errorPage)
    .listen(3000);

function hello(req,res,next) {
    if(req.url.match(/^\/hello/)){
        res.end('hello world');
    }else{
        next();
    }
};
