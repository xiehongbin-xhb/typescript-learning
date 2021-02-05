/**
 * 1. 模块
 * 2. 命名空间
 * 3. 模块解析
 * 4. 声明合并
 */
// 定义用于匹配的正则表达式
var lettersRegexp = /^[A-Za-z]+$/;
var numberRegexp = /^[0-9]+$/;
// 定义一个字母类的验证器
// LettersOnlyValidator 实现了一个接口，里面包含一个isAcceptable方法，返回一个布尔类型的值
var LettersOnlyValidator = /** @class */ (function () {
    function LettersOnlyValidator() {
    }
    LettersOnlyValidator.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LettersOnlyValidator;
}());
// 5位数字编号验证器： 由数字组成，并且长度为5
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
var strings = ['hello', '90823', '101'];
var strings1 = ['hello', '90823', '101'];
// 定义一个对象，对象的属性值是字符串，对象的值是 StringValidator 接口
var validators = {};
validators["ZIP code"] = new ZipCodeValidator();
validators['Letters only'] = new LettersOnlyValidator();
for (var _i = 0, strings1_1 = strings1; _i < strings1_1.length; _i++) {
    var s = strings1_1[_i];
    for (var name_1 in validators) {
        var isMatch = validators[name_1].isAcceptable(s);
        console.log("'" + s + "' " + (isMatch ? "matches" : "does not match") + " '" + name_1 + "'.");
    }
}
