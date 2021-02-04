
// 接口是对象的状态(属性)和行为(方法)的抽象描述
// 接口是一种类型，是一种规则


// 1. 可选属性
// 2. 只读属性
interface Person {
  readonly id: number; // 只读
  name: string;
  age: number;
  sex?: string; // 可选
}
const person: Person = {
  id: 123,
  name: 'dell',
  age: 20,
  sex: 'male'
}

// 3. 函数类型
// 为了使用接口表示函数类型，需要给接口定义一个调用签名
// 
// 定义一个接口作为某个函数的类型
interface SearchFunc {
  // 只有参数列表和返回值的类型定义
  (source: string, subString: string): boolean
}
// 定义一个函数，函数的类型就是上面定义的接口
const search: SearchFunc = function(source: string, subString: string): boolean {
  return source.search(subString) > -1
}

// 4. 类类型： TS中也能够用它来明确的强制一个类去符合某种契约、
// 让类去实现某个接口，可以把这个接口当成这个类的类型

// 定义接口
interface Bird {
  fly(); // 该方法中没有任何的实现
}
// 定义类，这个类的类型是上面的接口
// 也可以理解 Bird接口 约束了当前这个类
class Blueird implements Bird {
  fly () {
    console.log('i can fly');
  }
}
const blueBird = new Blueird()
// 一个类可以实现多个接口
interface AnimalInterface {
  walk(); // 该方法中没有任何的实现
}
class Animal implements Bird,AnimalInterface {
  fly () {
    console.log('i can fly');
  }
  walk () {
    console.log('i can walk')
  }
}
const person1 = new Animal()
// 接口也可以继承其他的多个接口

interface BirdAndAnimal extends Bird,AnimalInterface {

}

// 接口之间可以继承，类可以实现接口



/**
 * 类
 */
// 类可以理解为模板，通过模板可以实例化对象
// 面向对象的编程思想
class Person {
  // 定义属性
  name: string;
  age:number;
  gender: string;
  // 定义构造函数，为了讲来实例化对象的时候，可以直接堆属性的值进行初始化
  constructor(name: string, age: number, gender) {
    this.age = age;
    this.name = name;
    this.gender = gender;
  }
  sayHi(str: string) {
    console.log('hello' + str);
  }
}
// 类的继承： 允许继承来扩展现有的类
// 类从基类中继承了属性和方法。
// Dog类继承于Animal类。 Dog类是一个派生类，派生于Animal基类，通过extends关键字。
// 派生类一般被称作子类，基类通常被称作超类

class AnimalClass {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
class Snake extends AnimalClass {
  // 子类中还包含自己的构造函数，需要先调用super
  // 派生类中包含了一个构造函数，必须调用 super()，它会执行基类的构造函数。
  // 在构造函数中返回this的属性之前，一定要调用super()
  name: string;
  constructor(name: string) {
    super(name);
  }
}
let sam = new Snake("Sammy");

// 公共，私有，受保护的修饰符
//  在ts中 默认为public
// 可以明确的将一个成员标记为public

// 私有 private，当一个成员被标记为private时，标识这个成员不能在声明它的类的外部访问
class AnimalPrivateClass {
  private name: string;
  constructor(theName: string){ this.name = theName};
}
// 不能通过 new AnimalPrivateClass('test').name 这样的方式来访问name属性

// protected 与private的行为类似，但是有一点不同，protected成员在派生类中仍然可以访问
class PersonProtected {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Employee extends PersonProtected {
  private department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}
let howard = new Employee('Howard', 'Sales');
console.log(howard.getElevatorPitch());
// 不能通过howard.name 访问到name

// 不能在PersonProtected类外访问到name，但是可以通过Employee类的实例方法访问

// readonly修饰符
// 可以使用readonly关键字设置为只读的，只读属性必须在声明时或者构造函数中被初始化


// 函数
// 创建函数
// 给每个参数添加类型 以及为函数本身添加返回值类型
// 函数返回值类型是函数类型的必要部分，如果函数没有返回值，也必须指定返回值类型为void
// TS中的每个函数参数都是必须的。可以在参数名使用? 实现可选参数的功能
function buildName (firstName: string, lastName?: string) {
  if(lastName) {
    return firstName + '' + lastName;
  }else {
    return firstName;
  }
} 
// 可选参数必须跟在必选参数之后

// 默认参数
function buildName1 (firstName: string, lastName = 'Dele') {
  if(lastName) {
    return firstName + '' + lastName;
  }else {
    return firstName;
  }
}
// 带默认值的参数 不需要放在必须参数的后面

// 剩余参数
// 在TS中，可以将所有参数收集到一个变量里
function buildName2 (firstName: string,...restOfName: string[]): string {
  return firstName + "" + restOfName.join('-')
}
// 剩余参数会被当做 个数不限 的可选参数，可以一个都没有，也可以有任意个
// 编译器创建参数数组，名字是在省略号后面给定的名字。