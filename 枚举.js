//TS支持 数字枚举 以及基于字符串的枚举
// 1. 数字枚举
// 定义枚举
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["RIght"] = 3] = "RIght";
})(Direction || (Direction = {}));
// 初始化器： 默认Up从0开始，也可以通过 Up = 1，来确定初始化器的起始值
// 使用枚举：通过枚举的属性来访问枚举成员，或者 通过枚举的名字访问枚举类型
var Respone;
(function (Respone) {
    Respone[Respone["No"] = 0] = "No";
    Respone[Respone["Yes"] = 1] = "Yes";
})(Respone || (Respone = {}));
// 通过Respone.Yes 来返回指定的值
console.log('Response', Respone[1]);
// function respond(recepient: string, message: Respone): void {
// }
