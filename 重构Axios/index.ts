/**
 * 1. 基本数据类型
 * 布尔
 * 字符串
 * 数字
 */
// 数组
let x: number[] = [1,2,3,4];
let array: Array<number> = [1,2,3,4]; // 数组泛型

// 元组： 已知元素类型以及长度的数组
// 访问元组的越界元素
let truple: [string, number]
truple = ['hello', 10]
// truple[3] = '111';

// 枚举
enum Color {
  Red = 1,
  Green = 3,
  Blue = 4
}
let c: Color = Color.Green;
// 支持通过名字获取值，也支持通过值来反查名字

// any 不做类型检查
let list: any[] = [1, true, 'free'];
list[1] = 100;

// void 表示没有任何类型，经常用在函数返回值
// undefined 
// null
// undefined 和 null 是所有类型的子类型，即任意类型都会转换为undefined
// never 永远不存在的数字类型 never是所有类型的子类型，但是never不是任何类型的子类型
function error(messag: string): never {
  // 表示这个函数不会结束，不会返回值
  throw new Error(messag)
}
// 无限循环
function inifiiteLoop(): never {
  while(true) {

  }
}

// Object 表示除了boolean,string,number 等基本类型之后的
declare function create(o: object | null): void;

// 类型断言
let someValue: any = 'this is a string'
let stringLength: number = (<string>someValue).length;
// 方式1 通过<string>someValue的方式指定someValue的类型
// 方式2 
let stringLength1: number = (someValue as string).length



/**
 * 变量声明：
 * let const var
 * 解构
 * 展开
 */

/**
 * 接口
 * 1. 可选属性
 * 2. 只读属性
 * 3. 额外属性检查
 * 4. 函数类型
 * 5. 可索引类型
 * 6. 继承接口
 * 7. 混合类型
 * 8. 接口继承类
 */
/**
 * 1. 接口定义
 */
interface LabeledValue  {
  label: string;
}
/**
 *  可选属性  使用?
 */
interface Square {
  color: string,
  area: number;
}
interface SquareConfig {
  color?: string,
  width?: number
}
// function createSquare(config: SquareConfig): Square {
//   let newSquare =  { color: 'white', area: 100}
//   if(config.color) {
//     newSquare.color = config.color;
//   }
//   if(config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }
/**
 * 只读属性
 */
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = {x: 10, y: 20 };
let ro: ReadonlyArray<number>  = [1,1,3,4];
// ReadonlyArray<T>  只读数组 == TS中定义的泛型


/**
 * 额外属性检查
 */
// TS会对传入的对象字面量做检查，如果传入的对象属性和定义的数量和属性名不一致，就会报错
// 就算匹配的属性是可选的属性，比如这里的color和width属性
// 解决方式有几种：
// 一种是给传入的对象字面量做类型断言 如：{color: 'black', width: 100 } as SquareConfig
// 一种在定义这个接口时增加字符串签名：
interface SquareConfigWidthSign {
  color?: string,
  width?: number,
  [propsName:string]: any
}
// 一种是不传字面量，使用一个变量做为参数，跳过这个类型检查
// let mySquare = createSquare({color: 'black', width: 100})


/**
 * 函数类型的接口
 */
/**
 * 为函数增加调用签名
 */
interface SearchFunc {
  // 函数类型接口对应的调用签名：包含　参数列表，以及函数返回值的类型
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}


// 可索引类型
interface StringArray {
  [index: number]: string
}
let myArray: StringArray;
myArray = ['Bob', 'Fred'];
let myStr: string = myArray[0];
// TS中支持两种索引类型: 字符串以及数字索引
// 两种方式可以同时使用, 但是 数字签名返回的值必须是字符串签名返回值的子集,因为 在处理的时候,会将数字转换为字符串再去索引
// 这个有问题
class Animal {
  name: string
}
class Dog {
  bread: string
}
// interface NotOkay {
//   [x: number]: Animal
//   [x: string]: Dog
// }

/**
 * 类类型
 */
// 一个类包含两种类型，静态类型和实例类型
// 静态类型主要是构造函数
// 这里定义的类型是实例类型
interface ClockInterface {
  currentTime: Date;
}
// 类 可以实现一个接口
// 类只描述了一个类的公共部分
class Clock implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) {
  }
}
// 构造器接口: 类 不能去实现一个构造器接口
interface ClockConstructor {
  new(hour:number,minute: number) // 构造器签名
}

// 实例接口/构造器接口

// 类 去实现一个接口， 实际上是去实现类的实例部分，而构造器属于类的静态部分


// 接口继承
interface Shapes {
  color: string;
}
interface PenStroke {
  penWidth: number;
}
// 一个接口页可以继承多个接口，用逗号分隔开
interface Square extends Shapes, PenStroke {
  sideLength: number
}
let square =  {} as Square;
square.color = 'blue'
square.sideLength = 10;
square.penWidth = 11;

// 混合类型
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = function(start: number) {

  } as Counter;
  counter.interval = 1232;
  counter.reset = function() {

  }
  return counter;
}
const counter1 = getCounter();
counter1(10);
counter1.reset();

// 接口继承类
// 接口继承一个类时，会继承这个类的成员，比如 private，protected属性，但是不包含实现
// 创建一个接口，继承于包含私有成员或者受保护成员的类时，这个接口只能被 这个类或者这个类的子类 实现
class Control {
  private state: any;
}
interface SelectableControl  extends Control{
  select()
}

class Button extends Control implements SelectableControl {
  select() {
    console.log('select')
  }
}
class TextBox extends Control{
  select() {
    console.log('select')
  }
}

// class ImageC implements SelectableControl{
//   // 这里缺少state私有属性
//   select() {
//     console.log('select')
//   }
// }


/**
 * 类：
 * 实现类
 * 1. 函数 
 * 2. 基于原型
 * 3. 基于class
 * 
 * 
 * 内容：
 * 0. 基本示例
 * 1. 继承 
 * 2. 公共，私有，受保护的修饰符
 * 3. readonly修饰符
 * 4. 存取器
 * 5. 静态属性
 * 6. 抽象类
 */

 /**
  * 0. 基本示例
  */
 class Greeter {
   greeting: string;
   constructor(message: string) {
     this.greeting = message;
   }
   greet() {
     return 'Hello' + this.greeting;
   }
 }
 let greeter = new Greeter('world');
 greeter.greet();

 /* 
  公共： public
  私有: private
  受保护的：protected
 1.在比较两个类是否兼容时，是需要考虑是否包含 私有以及受保护的变量，如果有，
 则两个成员都必须要有相同的私有或者受保护的变量，并且是在同一个地方声明的
 那么这两个类才是兼容的

  private变量以及public变量的区别。
  都不能在类外部访问
  可以在子类被访问 
  在派生类中 private是不可以访问的，protected变量是可以的。
 */ 

 /**
  * 存取器
  * get 
  * set
  */
 /**
  * 静态属性： 类上的属性，不是示例属性
  */
 /**
  * 抽象类:
  * 和接口的定义差不多
  * 抽象方法： 
  */
 abstract class Department {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  printName(): void {
    console.log('DepartmentName'+ this.name);
  }
  abstract printMeeting(): void; // 抽象方法 包含函数签名，但是不包含函数具体实现
 }

 class AccountDepartMent extends Department {
   constructor(){
     super('Account ad Auditing');
   }
   // 实现抽象方法
   printMeeting(): void {
     console.log('the Accounting Department meets each Monday 8 am')
   };
   genertateReports(): void {
     console.log('genertateReports');
   }
 }
 let department: Department;
//  department = new Department() 抽象类不能被实例化
// 抽象类的派生类 才可以被实例化
department = new AccountDepartMent();
department.printMeeting()
department.printName();
// department.genertateReports()  department 已经声明是DepartmentD类型，这个类型里面是没有这个方法


// 高级技巧
// 类是具有实例部分和静态部分的
// 1. 修改类的静态部分，通过创建一个


interface personInterface {

}
let person = {
  age111: 10,
  gender: 'male'
}

class testClass {
  name: string;
  age: number;
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  sayName() {
    console.log('my Name is' );
  }
  greeter() {
    let str = 'age';
    this[`say${str}`]();
  }
}


/**
 * 函数：
 * 1. 基本示例
 * 2. 函数类型
 * 3. 可选参数/默认参数/ 剩余参数
 * 可选参数 必须放在参数列表最后
 * 默认参数 不用
 * 剩余参数
 * 4. this
 * 5. 重载
 */
function buildName(firstName: string, ...restOfName: string[]):string {
  return firstName
}
/**
  泛型：
  1. 使用泛型变量
  2. 泛型类型
  3. 泛型类
  4. 泛型约束
 */
// 泛型
 function idenity<T>(arg: T):T {
  return arg;
}
// let output = idenity<string>('myString');
let output = idenity('testString');

/** 泛型变量 */
/** 泛型类型 */
