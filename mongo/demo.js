/**
 * Created by jgmiu on 18-7-23.
 */
// node实战中的代码已经不在使用于最新的版本了,参考地址：https://github.com/mongodb/node-mongodb-native

// 链接mongodb：

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    
    // inserDocuments(db,function () {
    //     findDocuments(db,function () {
    //         client.close();
    //     })
    // })

    // findDocuments(db, function (arr) {
    //     console.log(arr)
    //     client.close();
    // })

    // updateDocument(db,function () {
    //     client.close();
    // })

    removeDocument(db,function () {
        client.close();
    })
});

// 插入：
const inserDocuments = function (db, callback) {
  const collection = db.collection('documents');
  
  collection.insertMany([
      {a:1},{a:2},{a:3}
  ],function (err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
  })
};

// 查询
const findDocuments = function (db, callback) {
  const collection = db.collection('documents');
  // 第一个参数用来过滤条件，可携程{a:1} 就只会查询出 a的值为1 的所有记录
  collection.find({}).toArray(function (err ,docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      //console.log(docs)
      callback(docs);
  });
};

// 修改
const updateDocument = function (db, callback) {
  const collection = db.collection('documents');
  // 第一个参数是筛选条件，第二个参数是
  collection.updateOne({a:2},{$set: {b:1}}, function (err,result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Updated the document with the field a equal to 2");
      callback(result);
  });
};

//删除
const removeDocument = function (db,callback) {
    const collection = db.collection('documents');

    collection.deleteOne({a:3}, function (err,result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        console.log("Removed the document with the field a equal to 3");
        callback(result);
    });
};