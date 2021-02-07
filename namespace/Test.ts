/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

// Some samples to try
{
  () => {
    let strings = ["Hello", "98052", "101"];

    // Validators to use
    let validators: { [s: string]: Validation.StringValidator; } = {};
    validators["ZIP code"] = new Validation.ZipCodeValidator();
    validators["Letters only"] = new Validation.LettersOnlyValidator();

    // Show whether each string passed each validator
    for (let s of strings) {
      for (let name in validators) {
        console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
      }
    }
  }
}

/**
 * 当涉及到多文件时，必须确保所有编译后的代码都被加载了，有两种方式
 * 1. 把所有输入文件编译为一个输出文件，需要使用-- outFile 标记
 * tsc --outFile sample.js Test.js
 * 2. 可以编译每一个文件（默认方式），那么每个源文件都回对应生成一个JS文件，然后在页面上通过script标签将所有生成的JS文件都按正确的顺序引进来
 */

 /**
  * 3.命名空间和模块
  * 在TS中使用模块和命名空间来组织代码
  * 
  * 
  * 命名空间
  * 是位于全局命名空间下的一个普通的带有名字的JS对象，通过 --outFile结合在一起
  * 
  * 模块
  * 模块可以包含代码和声明，不同的是模块可以声明它的依赖
  * 模块会把依赖添加到模块加载器上
  * 模块也提供了更好的代码重用，更强的封闭性以及更好的使用工具进行优化
  * 
  * 对于Node.js应用来说，模块是默认并推荐的组织代码的方式
  * 从ES6开始，模块成为了语言内置的部分。
  * 
  */
 /**
  * 模块使用方式
  * 1. 遵循ES6的模块处理 导入 通过import ，导出使用export
  * 2. TS中提供了另外一种语法 export = 对象
  * 通过
  */