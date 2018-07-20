/**
 * Created by jgmiu on 18-7-20.
 */
var connect = require('connect');
var cookieParser = require('cookie-parser');
var app = connect();
app.use(cookieParser('hello my friend'));
app.use(function (req,res) {
   console.log(req.cookies);
   console.log(req.signedCookies);
   res.end('hello world');
});
app.listen(3000);