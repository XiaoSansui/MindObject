import React from "react";

export default function test3() {
  /* 面向对象编程 类的声明 */
  class Person1 {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    say() {
      console.log("hellow");
    }
  }
  let p: Person1 = new Person1("zhangsan", 20);
  console.log(p);
  p.say();

  /* 
  访问修饰符
    public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
    protected:受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
    private : 私有修饰符，只可以在类内使用private修饰的属性和行为。
    使用readonly修饰符将属性设置为只读，只读属性必须在生命时或者构造函数里被初始化（注意）。
  */
  class Person2 {
    public name: string;
    protected age: number;
    private sex: string;
    public readonly height: string = "666";
    public constructor(name: string, age: number, sex: string) {
      this.name = name;
      this.age = age;
      this.sex = sex;
    }
    public say() {
      console.log("public say");
    }
    protected say1() {
      console.log("protected say1");
    }
  }
  let p2: Person2 = new Person2("lisi", 22, "男");
  console.log("p2--->", p2);
  console.log("p2.name--->", p2.name);
  // console.log("p2.age--->", p2.age); 报错
  // console.log("p2.sex--->", p2.sex); 报错
  p2.say();
  // p2.say1() 报错
  console.log("p2.height--->", p2.height);
  // console.log("p2.height--->", (p2.height = 10));  报错

  /* 
    继承和重写 
    继承：允许我们创建一个类（子类），从已有的类（父类）上继承所有的属性和方法，子类可以新建父类中没有的属性和方法。
  */
  class Parent {
    public name: string;
    public age: number;
    public sex: string;
    public constructor(name: string, age: number, sex: string) {
      this.name = name;
      this.age = age;
      this.sex = sex;
    }
    public say() {
      console.log("parent say hello");
    }
  }
  let parent: Parent = new Parent("wangwu", 19, "男");
  console.log("parent--->", parent); // Parent {name: "wangwu", age: 19, sex: "男"}
  parent.say();

  class Son extends Parent {
    public skill: string = "web";
    public height: number = 100;
    public run() {
      console.log("Son is running");
    }
  }
  let son: Son = new Son("wangwuSon", 17, "男"); // Son {name: "wangwuSon", age: 17, sex: "男", skill: "web", height: 100}
  console.log(son);
  son.run();
  son.say();

  // 类方法的重写
  class Grandson extends Parent {
    public name: string = "yangliu";
    public say() {
      console.log("Grandson say hellow");
    }
  }
  let grandson: Grandson = new Grandson("qiqi", 2, "男");
  console.log("Grandson--->", grandson); // Grandson {name: "yangliu", age: 2, sex: "男"}
  grandson.say();

  /* 
    接口 
    在面向对象的语言中，术语interface经常被用来定义一个不包含数据和逻辑代码但是用来签名定义了行为的抽象类型。
  */
  interface Husband {
    name: string;
    interest: string;
    getMoney?: boolean;
  }
  let obj1: Husband = { name: "cxk", interest: "打篮球", getMoney: true };
  console.log("obj1--->", obj1);
  //规范函数类型接口
  interface SerchMan {
    (sou: string, sub: string): boolean;
  }
  let mySerch: SerchMan = function(source: string, substr: string): boolean {
    let flag = source.search(substr);
    return flag != -1;
  };
  console.log("mySerch--->", mySerch("qwer", "q")); // true
  console.log("mySerch--->", mySerch("qwer", "s")); // false
  /* 
    命名空间 
    又称内部模块，被用于组织有些具有内在联系的特性和对象
     namespace shuaiGe {
      export class Dehua {
        public name: string = "刘德华";
        talk() {
          console.log("我是帅哥刘德华");
        }
      }
    }
  
    namespace bajie {
      export class Dehua {
        public name: string = "马德华";
        talk() {
          console.log("我是二师兄马德华");
        }
      }
    }
    
    let dehua1: shuaiGe.Dehua = new shuaiGe.Dehua();
    let dehua2: shuaiGe.Dehua = new bajie.Dehua();
    dehua1.talk();
  */
  return <h1>面向对象编程</h1>;
}
