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
11. object
object表示非原始类型，也就是除了 number,string,boolean,symbol,null,undefined之外的类型。
使用object类型，就可以更好的表示像Object.create这样的API


## 类型断言
通过类型断言这样的方式可以告诉编辑器，变量对应的数据类型
类型断言的方式1：通过尖括号语法
```ts
let someValue: any = "this is a string"
let strLength: number = (<string>someValue).length;
let strLength1: number = (someValue as string).length;
```
## 接口
接口的作用就是为这些类型命名和为你的代码或者第三方代码定义契约。
定义接口
```ts
// 定义一个接口
interface LabelledValue {
  label: string
}
// 接口用来定义一些具有特定结构的数据类型，一般是用户自己定义的
// 比如要求 必须是某种数据类型，并具有一定格式
function printLabel (labelledObj:LabelledValue) {
  console.log(labelledObj.label)
}
```
类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。
### 可选属性
带有可选属性的接口和普通的接口定义差不多，只需要在可选属性名字的后面加一个?符号
```ts
interface SquareConfig {
  color?: string,
  width: number
}
```
可选属性的好处就是对可能存在的属性进行预定义，并且可以捕获引用了不存在的属性时的错误。
### 只读属性
一些对象属性只能在对象刚刚创建时修改其值，可以在属性名前用readonly来指定其只读属性。
```ts
interface Point {
  readonly x: number
  readonly y: number
}
let p1: Point = { x: 10, y: 20};
// 赋值后，x和y就不能再修改了。
```
### 额外类型检查
对象字面量会被特殊对待而且经过额外属性检查，当它们赋值给变量或者作为参数传递时，如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。
```ts
interface SquareConfig {
    color?: string;
    width?: number;
}
// error: 'colour' not expected in type 'SquareConfig'
let mySquare = createSquare({ colour: "red", width: 100 });
// 意思是  函数参数的目标类型是 SquareConfig
// 当你传递一个对象作为参数，但是包含了目标类型中没有的属性，就会报错
// 绕开这份检查的最简单的方式就是使用 类型断言
let mySquare = createSquare({width: 100, opacity: 0.5 } as SquareConfig);
// 然而最佳的方式是添加一个字符串索引签名，前提是你能确定这个对象可能具有某些为特殊用途用的二外属性。
// 可以这样定义接口
interface SquareConfig1 {
  color?: string,
  width?:number,
  [propName: string]: any
  // 这里要表示的是SquareConfig 可以有任意数量的属性，并且只要他们不是color和width，那么就无所谓它们的类型是什么
}
// 此外还可以将这个对象赋值给另外一个对象，因为squareoOtions不会经过额外属性检查，所以编辑器不会报错
// error: 'colour' not expected in type 'SquareConfig'
let mySquare = createSquare({ colour: "red", width: 100 });
```
接口也可以用来描述寒素类型
需要给接口定义一个调用签名，它就像是一个只有参数列表和返回值类型的函数定义。参数列表的每个参数都需要名字和类型
```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}
// 使用接口: 创建一个函数类型的变量，并将一个同类型的函数赋值给这个变量。
let mySearch: SearchFunc;
mySearch = funciton(src:string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
}
```
函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。如果不想直指定类型，TS的类型系统会推断出参数类型
### 可索引的类型
可索引类型具有一个索引签名，还有相应的索引返回值类型
```ts
interface StringArray {
  [index: number]: string;
  // 定义了StringArray接口，具有索引签名，这个索引签名表示了当用number去索引StringArray时会得到string类型的返回值
}
let myArray: StringArray;
myArray = ['Bob','Fred'];
let myStr: string = myArray[0];
```
TS支持两种索引签名，字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
因为使用number来索引时，JS会将它转换城string，再去索引对象。

可以给索引签名设置为只读，这样就防止了给索引赋值。
```ts
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!
```
### 类类型
与C#或者Java里接口的基本作用一样，TS也能够用它来明确的强制一个类去符合某种契约
```ts
interface clockInterface {
  currentTime: Date;
}
class Clock implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) {}
}
```
可以在接口中描述一个方法，在类里实现它
```ts
interface clockInterface {
  currentTime: Date;
  setTime(d:Date);
}
class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number){}
}
```
接口描述了类的公共部分
### 类静态部分和实例部分的区别
```ts
// 接口1  构造函数
interface ClockConstructor {
  new(hour: number, minute: number):ClockInterface;
}
// 定义 类类型的一个接口，里面有个tick方法
interface ClockInterface {
  tick()// 在类中声明方法
}
// 批量创建时钟接口 传入对应的构造函数以及相应参数，最终返回一个时钟接口
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return ctor(hour, minute);
}
// 定义类 通过实现一个接口的方式
class DigitalClock implements ClockInterface {
    constructor(h: number, m: number);
    tick() {
      console.log('beep beep')
    }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('tick tick');
  }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(Analogclock, 7, 32);
```
### 接口继承
接口可以继承，可以从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里
```ts
interface Shape {
  color: string
}
interface Square extends Shape {
  sideLength: number;
}
let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
```
一个接口可以继承多个接口，创建出多个接口的合成接口
```ts
interface Shape {
  color: string
}
interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}
let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5;
```
### 混合类型
接口能描述JS中丰富的类型
一个对象可以同时作为函数和对象使用，并且带有额外的属性
```ts
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = <Counter>function (start: number) {};
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}
let c = getCounter();

```
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