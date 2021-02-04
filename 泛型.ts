/**
 * 
 * 类型变量： 是一种特殊的变量，只用于表示类型而不是值
 * 给identity添加了类型变量T，T用来捕获用户传入的类型，之后再次使用了T当作返回值类型
 * 没有必要使用尖括号来明确地传入类型，编译器可以查看myString的值，然后把T设置为它的类型
 * 
 */
// 定义泛型函数
function identity<T>(arg: T): T {
  return arg;
}
// 使用泛型方法1
let output = identity<string>('myString');
// 这里明确指定了T是string类型，并作为一个参数传给函数
// 使用泛型方法2
let output1 = identity('myString');
// 利用了类型推论，即编译器会根据传入的参数自动确定T的类型

/**
 * 使用泛型变量
 */

 /**
  * 泛型： 在定义函数，接口，类的时候不能预先确定要使用的数据的类习惯，而是在使用函数，接口，类的时候才能确定数据的类型
  */
 function getArr<T>(value: T,count: number):T[] {
  // const arr: T[] = [];
  const arr: Array<T> = [];
  for(let i=0; i<count; i++) {
    arr.push(value);
  }
  return arr;
 }
const arr1 = getArr<number>(200.123, 4);
const arr2 = getArr<string>('1233', 4);
arr1[0].toFixed(2)


// 多个泛型参数的函数: 函数中有多个泛型的参数
function getMsg<K, V>(value: K, value2: V): [K, V] {
  return [value, value2]
}
const arr3 = getMsg<string, number>('123', 456);
arr3[0]
