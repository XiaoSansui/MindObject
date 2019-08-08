import React from "react";

export default function TsTest1() {
  /* Typescript变量 */
  var a: string = "a"; // 字符串
  var b: number = 18; // 数值
  var c: boolean = true; // 布尔
  enum REN { // 枚举 如果未赋值 返回下标
    nan = "男",
    nv = "女",
    yao = "妖"
  }
  var d: any = "string"; // any
  d = true;
  d = 10;
  var e: undefined; // undefined
  var f: null; // null

  /* 
    Typescript函数
    1.声明（定义）函数必须加 function 关键字；
    2.函数名与变量名一样，命名规则按照标识符规则；
    3.函数参数可有可无，多个参数之间用逗号隔开；
    4.每个参数参数由名字与类型组成，之间用分号隔开；
    5.函数的返回值可有可无，没有时，返回类型为 void；
    6.大括号中是函数体。
    7.可选形参 xxx?:type 
    8.默认形参 xxx:type = default
    9.剩余形参 ...xxx:type[]
  */
  function searchPeople(
    age: number,
    name?: string,
    sex: string = "男",
    ...outher: string[]
  ): string {
    var str: string = "";
    if (name) {
      str = "age=====>" + age + ",name=====>" + name + ",sex=====>" + sex;
    } else {
      str = "age=====>" + age + ",sex=====>" + sex;
    }
    for (let i = 0; i < outher.length; i++) {
      str += "," + outher[i];
    }
    return str;
  }
  var age = 18;
  var name = "zhangsan";
  var outher = "outher";
  var outher2 = "outher2";
  var outher3 = "outher3";
  var result: string = searchPeople(age, name, outher, outher2, outher3);

  // 函数定义方式
  /* 
    函数声明法  
    函数声明法创建函数是最常用的函数定义法。使用function关键字和函数名去定义一个函数。
   */
  function add(n1: number, n2: number): number {
    return n1 + n2;
  }
  console.log('函数声明法--->',add(1, 2));

  /* 
    函数表达式法  
    是将一个函数赋值给一个变量，这个变量名就是函数名。通过变量名就可以调用函数了。这种方式定义的函数，
    必须在定义之后，调用函数。下面例子中等号右边的函数没有函数名，称为匿名函数。 
  */
  var add1 = function(n1: number, n2: number): number {
    return n1 + n2;
  };
  console.log("函数表达式法--->",add(2, 3));

  /* 
    箭头函数
    箭头函数是 ES6 中新增的函数定义的新方式，我们的 TypeScript 语言是完全支持 ES6 语法的。箭头函数定义的函数一般都用于回调函数中。
  */
  var add2 = (n1: number, n2: number): number => {
    return n1 + n2;
  };
  console.log("箭头函数--->",add2(1, 4));

  return (
    <div>
      <h2>string:{a}</h2>
      <h2>number:{b}</h2>
      <h2>boolean:{c ? "true" : "false"}</h2>
      <h2>enum:{REN.nan}</h2>
      <h2>any:{d}</h2>
      <h2>undefined:{!e && "undefined"}</h2>
      <h2>null</h2>
      <h2>result:{result}</h2>
    </div>
  );
}
