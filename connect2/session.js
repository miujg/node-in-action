var connect = require('connect');
var app = connect();
var session = require('session');
app.use(session());
app.use(function (req,res,next) {
    var sess = req.session;
    if(sess.view){
        res.setHeader('Content-Type','text/html');
        res.end('<p>count: ' + sess.view + '</p>');
        sess.view ++;
    }else{
        sess.view = 1;
        res.end('start');
    }
});

app.listen(3000);