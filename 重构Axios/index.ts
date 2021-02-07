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
