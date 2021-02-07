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
function createSquare(config: SquareConfig): Square {
  let newSquare =  { color: 'white', area: 100}
  if(config.color) {
    newSquare.color = config.color;
  }
  if(config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
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
let mySquare = createSquare({color: 'black', width: 100})


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
