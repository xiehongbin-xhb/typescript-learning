/**
 * 1. 模块
 * 2. 命名空间
 * 3. 模块解析
 * 4. 声明合并
 */

 /**
  * 1. 模块
  * 模块在其自身的作用域里执行
  * 定义在一个模块里的变量，函数，类等在模块外部是不可见的，除非你明确地使用export形式导出它们
  * 模块是自声明的：两个模块之间的关系是通过在文件级别上使用imports和exports建立的
  * 1.1 导出 
  * 任何声明： 比如变量，函数，类，类型别名，或者接口 都可以通过 export关键字导出
  * 导出时重命名  
  * export Validator as mainValidator
  * 1.2 导入
  * 导入一个模块中的某个导出内容
  * 对导入内容进行重命名
  * 将整个模块导入到一个变量，并通过它来访问模块的导出部分
  * 默认导出 default 
  * 每个模块都可以由一个默认导出，默认导出使用default关键字标记，并且一个模块只能有一个default导出
  */
 /**
  * export = 
  * 为了支持CommonJS和AMD的exports，TS提供了export= 语法
  * export = 语法定义一个模块的导出对象，这里的对象指的是类,接口，命名空间，函数，枚举
  * 若使用export = 导出一个模块，则必须使用TS的特定语法 import module = require('module')来导入此模块
  */

  /**
   * 2. 命名空间
   * 任何使用module关键字来声明一个内部模块的地方都应该使用namespace关键字来替换
   */
namespace Validation1 {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }
  // 定义用于匹配的正则表达式
  let lettersRegexp = /^[A-Za-z]+$/;
  let numberRegexp = /^[0-9]+$/;
  // 定义一个字母类的验证器
  // LettersOnlyValidator 实现了一个接口，里面包含一个isAcceptable方法，返回一个布尔类型的值
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }
  // 5位数字编号验证器： 由数字组成，并且长度为5
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 &&  numberRegexp.test(s)
    }
  }
  
}
let strings: Array<string> = ['hello', '90823', '101'];
let strings1: string[] =  ['hello', '90823', '101'];

// 定义一个对象，对象的属性值是字符串，对象的值是 StringValidator 接口
let validators: { [s: string]: Validation1.StringValidator} = {};
validators["ZIP code"] = new Validation1.ZipCodeValidator();
validators['Letters only'] = new Validation1.LettersOnlyValidator();

for(let s of strings1) {
  for( let name in validators) {
    console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
  }
}

/**
 * 可以将同一个命名空间分割成多个文件，尽管是不同的文件，它们仍然是同一个命名空间，并且在使用的时候就如同它们在同一个文件中定义的一样
 * 因为不同文件之间存在依赖关系，需要加入引用标签来告诉编译器文件之间的关联
 */