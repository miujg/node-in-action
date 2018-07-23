/**
 * Created by jgmiu on 18-7-23.
 */

// 参考地址：http://mongoosejs.com/docs/guide.html
// github地址： https://github.com/Automattic/mongoose
const mongoose = require('mongoose');
// 连接mongodb
mongoose.connect('mongodb://localhost:27017/myproject');

//定义模型
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

//可带默认值
const postScheam = new Schema({
    title: {type: String,default: 'title'},
    body: String,
    date: Date
});

// 某型的类型有： String Number Date Buffer Boolean Mixed ObjectId Array Decimal128 Map

//讲定义的模型放入mogodb中
mongoose.model('Post', postScheam);
// 去除模型的构造函数
var Post = mongoose.model('Post');

var post = new Post();
post.title = 'node in action';
post.body = 'a book';
post.date = new Date();

//存储模型
// post.save(function (err) {
//     if (err) throw err;
//     console.log('post save success!');
// });
var post2 = new Post();
post2.title = 'node in action2';
post2.body = 'a book2';
post2.date = new Date();
// post2.save(function (err) {
//     if (err) throw err;
//     console.log('post2 save success!');
// })

//查找
Post.find({body: 'a book2'},function (err,posts) {
    if (err) throw err;
    console.log(posts);
});
//更新
Post.update({body: 'a book2'},{body:'a book3'},function (err,row) {
    if (err) throw err;
    console.log(row);
    console.log('update success');
})
//删除(查找出来之后，调用post.remove就删除了)