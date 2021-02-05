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
