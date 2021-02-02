# TypeScript 文档
## 基本类型
1. 布尔类型
声明：
```ts
let isDone: boolean = false;
// 声明命令let/const
// 变量名
// 变量名后跟冒号，以及变量的类型
// 最后为变量的值
// js声明变量的方法  
let isDone1 = false
// 相对js，ts在变量名后增加声明了变量的类型
```
2. 数字
TS中，所有数字都是浮点数，这些浮点数的类型是 number。
支持十进制，十六进制，以及ES6引入的二进制和八进制
```ts
let num1: number = 6; // 十进制
let num2: number = 0x00d; // 十六进制
```
3. 字符串
使用string来表示字符串数据类型,和js一样，可以使用单引号和双引号来表示字符串。
还可以使用模板字符串，可以定义多行文本以及内嵌表达式。
```js
let str: string = 'abc';
```
4. 数组
TS中定义数组的方式有两种。
方式1： 直接在元素类型后面接上 `[]`,表示由该类型元素组成的一个数组。
```ts
let list: number[] = [1, 2, 3];
```
方式2： 使用数组泛型， `Array<元素类型>`
```ts
let list: Array<number> = [1, 2, 3];
```
5. 元组
元组类型允许表示一个已知元素数量和类型的数组，各元素类型不必相同。
数组的数量和元素的顺序都有要求
```ts
let x: [string, number]; // 声明一个数量为2，且数组元素类型为字符串以及数字
```
可以通过索引访问到这个元组数组内的元素
```ts
let x: [string, number];
x = ['hello', 10];
x[0] // 'hello'
x[1] // 10
```
当访问元组的越界元素时，会使用联合类型替代。(这里有问题)
```ts
let x: [string, number];
x = ['hello', 10];
x[0] // 'hello'
x[1] // 10
x[3] = 'world' 
// 元组x中只有两个元素，通过访问索引3的元素
```
6. 枚举
enum类型是对js标准数据类型的一个补充。

使用enum关键字声明一个枚举类型，相当于增加了一个数据类型，基本数据类型，在声明其他变量时，可以设置变量的数据类型为定义好的枚举类型，比如这里的Color
```ts
enum Color {Red, Green, Blue};
let c: Color = Color.Red;
```
默认情况下，从0开始编号，也可以手动指定第一个成员开始的编号，如下：
```ts
enum Color { Red = 1, Green, Blue }
// 第一个成员从1开始编号，Green，B,lue对应的值就是 1，2
```
也可以为每个成员单独指定对应的值
```ts
enum Color = { Red = 1, Green = 4, Blue = 10}
```
可以通过枚举的值得到它的名字，比如
```ts
enum Color { Red = 1, Green, Blue };
let colorName: string = Color[2];
```
7. any
在编程阶段还不清楚类型的变量指定一个类型，可以使用any类型

8. void
void表示没有类型，当一个函数没有返回值的时候，其返回值的类型就是void
```ts
funcion warnUser(): void {
  console.log('this is UserWarning');
}
```
声明一个void类型的变量没什么用，因为只能为它赋予undefined和null
9. null和undefined
null和undefined是所有类型的子类型，即你可以把null和undefined赋值给任意类型。
当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。
10. never
never类型表示那些永远不会存在的值的类型。 例如never类型是那些总是会抛出异常或者根本不会有返回值的函数表达式或者箭头函数表达式的返回值类型。
变量也可能是never类型，当它们被永不为真的类型保护所约束时。
never类型是任何类型的子类型，也可以赋值给任何类型。
没有类型是never的子类型或可以赋值给never类型（除了never类型之外），即使any类型也不可以赋值给never。
以下是返回never类型的函数
```ts
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}
function infiniteLoop(): never {
  while(true) {
    
  }
}
```
## 接口
## 类
## 函数
## 泛型
## 枚举
## 类型推论
## 类型兼容性
## 高级类型
## Symbols
## 迭代器和生成器
## 模块
## 命名空间
## 命名空间与模块
## 模块解析
## 声明合并
## JSX
## 装饰器
## Mixins
## 三斜线指令
## 文件类型检查