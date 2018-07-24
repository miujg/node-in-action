/**
 * Created by jgmiu on 18-7-24.
 */
var assert = require('assert');

// 实际，期望，当实际与期望不一样的时候抛出的错误提示
assert.equal('1','1','til');
//assert.equal('1','2','1不等于2');
// 实际，期望，当实际与期望一样的时候抛出的错误提示
//assert.notEqual('1','1','til');

//测试异步函数
var count = 0;
function doAsync(cb) {
    setTimeout(cb,2000,false);
};

var doAsyncTest = function (cb) {
    doAsync(function (value) {
        console.log(value);
        assert.ok(value,"true.....")
    });
    count++;
    cb();
};
doAsync(function () {
    console.log('xxxxxxxx');
});