import React from "react";

export default function test2() {
  // 引用类型声明数组
  // 需要注意的是，在TypeScript中指定数据类型的数组只能存储同一类型的数组元素。

  /* 字面量赋值法 */
  // 定义一个空数组,数组容量为0
  let arr1: number[] = [];
  // 定义数组时直接赋值
  let arr2: Array<string> = ["js", "ts"];
  let arr3: Array<boolean> = [true, false, true];
  let arr4: number[] = [1, 2, 3, 4];

  /* 
    构造函数赋值法
    在 TypeScript 中使用 Array 这个引用类型来表示数组的，那么每一个数组都是 Array 类型的实例。那么，我们在创建数组的时候也可以使用构造函数来进行赋值。
  */
  let arr5: number[] = new Array();
  let arr6: number[] = new Array(1, 2, 3, 4);
  let arr7: Array<string> = new Array("js", "ts");
  let arr8: Array<boolean> = new Array(true, false, true);

  /* 
    元祖 
    元祖是一种特殊的数组，元祖类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
  */
  let arr9: [string, number, boolean] = ["string", 100, false];

  // 引用类型声明字符串
  // 基本类型字符串：由单引号或者双引号括起来的一串字符串。
  // 引用类型字符串：用new 实例化的 String类型。
  // 这两种声明字符串的方法没有什么不同。基本类型的字符串可以直接使用引用类型的属性和方法。
  let str1 = "typescript";
  let str2 = new String("typescript");
  console.log("str1--->", str1);
  console.log("str2--->", str2);

  // 引用类型-日期对象
  // 日期对象是Date的实例，可以使用构造函数的方法进行创建。并且构造函数中可以传递多种类型的参数。
  let time: Date = new Date();
  console.log(time);

  // 引用类型-正则表达式
  // 构造函数法
  let reg1: RegExp = new RegExp("jspang"); //表示字符串规则里含有jspang
  console.log(reg1); //  /jspang/
  let reg2: RegExp = new RegExp("jspang", "gi");
  console.log(reg2); //  /jspang/gi
  // 字面量法
  let reg3: RegExp = /jspang/;
  let reg4: RegExp = /jspang/gi;
  //  test(string) ：在字符串中查找是否存在指定的正则表达式并返回布尔值，如果存在则返回 true，不存在则返回 false。
  let result: boolean = reg3.test("jspang");
  console.log("test--->", result);
  //  exec(string) :  用于在字符串中查找指定正则表达式，如果 exec() 方法执行成功，则返回包含该查找字符串的相关信息数组。如果执行失败，则返回 null。
  console.log("exex--->", reg4.exec("jspang"));


  return (
    <div>
      <h2>{"arr1--->" + arr1}</h2>
      <h2>{"arr2--->" + arr2}</h2>
      <h2>{"arr3--->" + arr3}</h2>
      <h2>{"arr4--->" + arr4}</h2>
      <h2>{"arr5--->" + arr5}</h2>
      <h2>{"arr6--->" + arr6}</h2>
      <h2>{"arr7--->" + arr7}</h2>
      <h2>{"arr8--->" + arr8}</h2>
      <h2>{"arr9--->" + arr9}</h2>
      <h2>----------------------------------------------</h2>
      <h2>{"str1--->" + str1}</h2>
      <h2>{"str2--->" + str2}</h2>
    </div>
  );
}
